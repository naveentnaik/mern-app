import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';


function  About() {
  const [user,setUser]=useState({data:{}})
  const mainDiv={
    height:"400px",
    width:"500px",
    border:"2px solid black",
    display:"flex",
    alignItems:"center",
    flexDirection:"column"
  }

  const MM={
    display:"flex",
    alignItems:'center',
    justifyContent:"center",
    marginTop:"40px"
  }

  

  const navigate = useNavigate();
  
 const callAboutPage =async()=>{
  try {
    const data=await axios.get('/about')
    if(!data.status===200){
      const error= new Error(data.error)
      throw error
    }
  
      console.log(data)
     setUser(data)
    
    
  } catch (error) {
    navigate('/login')
  }
  
 }

  useEffect(() => {
    
  callAboutPage()
   
  }, [])

  return (
  <>
  <div style={MM}>
    <div style={mainDiv}>
      <h2 style={{marginTop:"20px"}}>{user.data.name}</h2>
      <h6 >{user.data.work}</h6>
    <Table  bordered >
      <tbody>
        <tr>
          <td>UserId</td>
          <td>{user.data._id}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{user.data.name}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{user.data.email}</td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>{user.data.phone}</td>
        </tr>
        <tr>
          <td>Profession</td>
          <td>{user.data.work}</td>
        </tr>
      </tbody>
    </Table>
    <Button variant="secondary" type='submit'  >Edit profile</Button>
    </div>
  </div>
 
  </>
  )
}

export default About