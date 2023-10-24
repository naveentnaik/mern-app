import React from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom"

function ErrorPage() {
    const main={
    display:"flex",
    alignItems:'center',
    justifyContent:"center",
    height:"90vh"
    }

    const inner={
        display:"flex",
        alignItems:'center',
        justifyContent:"center",
        flexDirection:"column"
        }

  return (
    <>
    <div style={main}>
        <div style={inner}>
            <h1>404 ERROR</h1>
            <h3>Page Not Found</h3>
            <Link style={{marginTop:"10px"}} to='/'><Button variant="secondary" >Go back to home</Button></Link>
        </div>
    </div>
    </>
  )
}

export default ErrorPage