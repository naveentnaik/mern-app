import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Contact() {
  const [user,setUser]=useState({name:"",email:"",phone:"",message:""})

  const masterDiv={
    width:"800px",
    display:"flex",
    alignItems:'center',
    justifyContent:"center",
    flexDirection:"column"
  }
  
  const cardStyle={
    display:"flex",
    alignItems:'center',
    justifyContent:"space-around",
    marginTop:"50px",
    width:"80vw",
   textAlign:'center'
  }

  const mainDiv={
    display:"flex",
    alignItems:'center',
    justifyContent:"space-around"
  }

  const mainDiv2={
    width:"700px",
    display:"flex",
    alignItems:'center',
    justifyContent:"space-between"
  }

  const HeadDiv={
    display:"flex",
    alignItems:'center',
    justifyContent:"center",
    marginTop:"30px",
    flexDirection:"column"
  }

  
  const navigate = useNavigate();
  
 const callAboutPage =async()=>{
  try {
    const data=await axios.get('/getdata')
    if(!data.status===200){
      const error= new Error(data.error)
      throw error
    }
  
      console.log(data)
     setUser({...user,name:data.data.name,email:data.data.email,phone:data.data.phone})
    
  } catch (error) {
    navigate('/login')
  }
  
 }

 
  useEffect(() => {
    
  callAboutPage()
  }, [])
  

  const onChangeHandler=(e)=>{
     const {name,value}=e.target
     setUser({...user,[name]:value})
    
  }
  
  const contactForm =async(e)=>{
    e.preventDefault()
    const {name,email,phone,message}=user

  if(name===""||email===""||phone===""||message==="")
  {
    alert("please fill the details")
  }
  else{
  
    const send = await axios.post("/contact",{name,email,phone,message})
   setUser({...user,message:""})
    
    if(!send){
      console.log("message not found")
    }
    else{
      alert("message sent")
     
    }
  }
  }

  console.log(user)
  return (
    <>
    <div style={mainDiv}>
    <div style={cardStyle}>
        <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Phone</Card.Header>
        <Card.Body>
          <Card.Text>
           +919449098490
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Email</Card.Header>
        <Card.Body>
          <Card.Text>
          nana.naveen50@gmail.com
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Adress</Card.Header>
        <Card.Body>
          <Card.Text>
            mahime,honnavar
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    </div >
    <form>
    <div style={HeadDiv}>
      
       <div style={masterDiv}>
        <h3>Get in touch</h3>
          <div style={mainDiv2}>
          <FloatingLabel controlId="floatingPassword" label="Name">
            <Form.Control style={{width:"200px"}} 
            name='name'
            onChange={onChangeHandler}
            value={user.name} type="name" required={true} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="email">
            <Form.Control style={{width:"200px"}} 
            name='email'
            onChange={onChangeHandler}
            value={user.email} type="email"  required={true}/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="number">
            <Form.Control style={{width:"200px"}} 
            onChange={onChangeHandler}
            name='phone'
            value={user.phone} type="number" required={true} />
          </FloatingLabel>
          </div>
          <div >
          <Form.Control style={{width:"700px", height:"150px",marginTop:"30px"}}
           name='message'
           value={user.message}
           onChange={onChangeHandler} 
           required={true}
           as="textarea" aria-label="With textarea" />
          </div>
       </div>
       <Button variant="primary" onClick={contactForm} type='submit' style={{margin:"20px 570px 0 0"}}>Send message</Button>
    </div>
    </form>
    </>
  )
}

export default Contact