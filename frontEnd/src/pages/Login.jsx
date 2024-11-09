import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./Login.css"


const baseBackEnd = 'http://localhost:3000/backend';

function Login() {
  
  const [fields, setFields] = useState({
    email: 'John_OfficeStaff@gmail.com',
    phone: '8325559878'
});
  const setFieldValue = ({ target: {name, value } }) => {
    setFields(prev =>({
      ...prev,  // Copy all existing fields
      [name]: value
    }));
  } 

  const handleLogin = e => {
    e.preventDefault();
   // Reset error state if there was one before
    // Add your logic here to send data to backend
    fetch(`${baseBackEnd}/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fields)
      })
     .then(res => {
      res.json()
      })
     .then(user =>{
      console.log(user)
     })
       // Add your logic here
  }

  //useEffect(() => {

    //fetch(`${baseBackEnd}/posts`)
    //.then(res => res.json())
    //.then(post => {
      //console.log(post) // Add your logic here
    //})

  //}, []);

  return (
    <>
      <div className='login-pages'>
        <h1 className='login-header'>Login</h1>
        <form onSubmit = {handleLogin}>
          <label htmlFor="email" >Email:</label>
          <br/>
          <input 
            type = "email" 
            name = "email" 
            value = {fields.email} 
            onChange = {setFieldValue} 
            id="email"
          />
          <br/>
          <label htmlFor="phone">Phone:</label>
          <br/>
          <input 
            type = "phone" 
            name = "phone" 
            value = {fields.phone} 
            onChange = {setFieldValue} 
            id="phone"/>
          <br/>
          <Link><button type="submit">Submit</button></Link>
        </form>
        
      </div>
    </>
  )
}

export default Login