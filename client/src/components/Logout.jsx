import axios from 'axios';
import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import { useContext } from 'react';
const Logout=()=>{
    const {state,dispatch} = useContext(UserContext)
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('/logout').
        then(()=>{
            dispatch({type:"USER",payload:false})
            navigate('/login')
        })
    })

    return(
   <>
   
  </>
    )
}

export default Logout;