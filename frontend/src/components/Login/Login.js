import React, { Component } from 'react';

import  GoogleLogin  from 'react-google-login';


const Login = () => {
    const responseGoogle = (response) => {
        console.log(response);
      }
    return(
        <div>
        <h1>Login</h1>
       
           
            <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      </div>
        )
}
  


export default Login