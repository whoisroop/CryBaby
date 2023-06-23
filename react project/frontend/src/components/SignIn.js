import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

import "../css/signIn.css"

const Login = () => {

  const navigate = useNavigate();
  function loginUser(){
    navigate("/")
  }


  function babyname(val){
    {localStorage.setItem('babyname', val.target.value)}
  }
  function useremail(val){
    {localStorage.setItem('useremail', val.target.value)}
  }
  
  return (
    <div>
      {
        <>
        <div class="login-box signin">
      <h2><i>LOGIN</i></h2>
      
      <form name="contactForm" onSubmit={loginUser}>
        <div class="user-box">
          <input type="email" name="email" required="" onChange={useremail}/>
          <label>Email ID</label>
        </div>
        <div class="user-box">
          <input type="password" name="pswd" required="" length="8" />
          <label>Password</label>
        </div>
        <div class="user-box">
          <input type="text" name="baby" required="" onChange={babyname}/>
          <label>Baby Name</label>
        </div>
       
         <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <input type="submit" value="LOGIN" />
                  
        </a>
      </form>
    </div>
      </>
      
}
    </div>
  );
}

export default Login;
