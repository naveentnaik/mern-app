import React from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import {useState} from 'react'
import { UserContext} from "../App"


function Login() {
  
  const {state,dispatch} = useContext(UserContext)

  const[user,setUser]=useState({
   email:"",password:""
   })
   const navigate = useNavigate();
   let name,value;

   const onChangeHandler=(e)=>{
    name=e.target.name;
    value=e.target.value;

    setUser({...user,[name]:value})
   }

   const handleClick=(event)=>{
    event.preventDefault();
   
    axios.post('/login',user)
    .then((res)=>{console.log(res)
     setUser({email:"",password:""})
     return res
     })

     .then((d)=>{
       
      if(d.status===400){
        window.alert("invalid credentials")
      }
      else{
        dispatch({type:"USER",payload:true})
        window.alert("Login sucessfull")
        navigate('/')

      }
       
           
     })
    .catch((err)=>{console.log(err) 
     window.alert("invalid credentials")}
     )
    console.log(user)

   }


  const formStyle={
    width:'300px',
}
const flex={
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginTop:"20px"
}


return (
<>
<div style={flex}>
<div style={formStyle}>
<Form>
  <h3 style={{textAlign:"center"}}>LOGIN</h3> 
  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' value={user.email} onChange={onChangeHandler} placeholder="Enter eamil" />
  </Form.Group>
  <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' value={user.password} onChange={onChangeHandler} placeholder="Enter password" />
  </Form.Group>
  <div style={{marginTop:"30px"}}>
  <Button style={{marginRight:'150px'}} type='submit' onClick={handleClick} name='signin' variant="secondary">Login</Button>
  <Link to='/signup'><Button  name='login' variant="secondary">Register</Button></Link>
  </div>
</Form>
</div>
</div>
</>
)
}

export default Login