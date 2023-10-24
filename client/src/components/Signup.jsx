import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link,useNavigate } from 'react-router-dom';
import { useState} from 'react';
import axios from 'axios';

function Signup() {
   
   const[user,setUser]=useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
   })
   const navigate = useNavigate();
   let name,value;

   const handleInputs=(e)=>{
    name=e.target.name;
    value=e.target.value;

    setUser({...user,[name]:value})
   }

   
   const handleClick=(event)=>{
    event.preventDefault();
    axios.post('/register',user)
    .then((res)=>{console.log(res)
     setUser({ name:"",email:"",phone:"",work:"",password:"",cpassword:""})})
     .then(()=>{
        navigate('/login')
     })
    .catch((err)=>console.log(err))
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
      <h3 style={{textAlign:"center"}}>REGISTER</h3>
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' 
        value={user.name}
        onChange={handleInputs}
        placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email'
         value={user.email}
         onChange={handleInputs}
         placeholder="Enter eamil" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" name='phone'
         value={user.phone}
         onChange={handleInputs}
         placeholder="Enter phone" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
        <Form.Label>Work</Form.Label>
        <Form.Control type="text" name='work' 
         value={user.work}
         onChange={handleInputs}
        placeholder="Enter work" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password'
         value={user.password}
         onChange={handleInputs}
         placeholder="Enter password" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control type="password" name='cpassword'
         value={user.cpassword}
         onChange={handleInputs}
         placeholder="Confirm password" />
      </Form.Group>
      <Button onClick={handleClick} style={{marginRight:'150px'}} type='submit' name='signup' variant="secondary">Register</Button>
      <Link to='/login'><Button  name='login' variant="secondary">Login</Button></Link>
    </Form>
    </div>
    </div>
   </>
  )
}

export default Signup