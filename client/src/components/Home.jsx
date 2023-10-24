import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { UserContext} from "../App"

function Home() {
  const {state,dispatch} = useContext(UserContext)
  const [user,setUser]=useState("")
  const mainDiv={
    display:"flex",
    alignItems:'center',
    justifyContent:"space-around",
    height:"90vh"
  }

  

  const callAboutPage =async()=>{
    try {
      const data=await axios.get('/getdata')
      if(!data.status===200){
        const error= new Error(data.error)
        throw error
      }
    
        console.log(data)
       setUser(data.data.name)
      
    } catch (error) {
      console.log(error)
    }
    
   }
  
   
    useEffect(() => {
      dispatch({type:"USER",payload:true})
    callAboutPage()
    }, [])
  return (
    <div style={mainDiv}>
      <h1>Welcome to the home {user}</h1>
    </div>
  )
}

export default Home