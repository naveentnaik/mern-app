import React, { createContext,useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbars from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { initialState,reducer } from '../src/reducer/UseReducer';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import ErrorPage from './components/ErrorPage';
import Logout from './components/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';
export const UserContext =createContext();


const App = () => {

  const [state, dispatch] = useReducer(reducer,initialState)


  return (
    <>
   <UserContext.Provider value={{state,dispatch}}> 
    <Navbars/>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/about' element={<About/>}/>
      <Route  path='/contact' element={<Contact/>}/>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/signup' element={<Signup/>}/>
      <Route  path='/logout' element={<Logout/>}/>
      <Route  path='*' element={<ErrorPage/>}/>
    </Routes>
    </UserContext.Provider>
    </>
    
  )
}

export default App