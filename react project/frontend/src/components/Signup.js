import React, { useState } from "react";
import "../css/signUp.css"
import { redirect, useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword} from "firebase/auth"
import Auth  from "./auth"



const SignUp = () => {

  let userPassword="";
  let emailid="";

  const navigate = useNavigate();
  function registerUser(){
    console.log(emailid)
    console.log(userPassword) 
    navigate("/")
  }

  function babyname(val){
    {localStorage.setItem('babyname', val.target.value)}
  }
  function useremail(val){
    {localStorage.setItem('useremail', val.target.value)}
    emailid=val.target.value
  }
  function userPass(val){
    {localStorage.setItem('useremail', val.target.value)}
    userPassword=val.target.value;
  }
  
  return (
    <div id="signup-body">
      {
        <>
        <div className="login-box signup">
      <h2><i style={{color:"orangered"}}>SIGNUP</i></h2>
      
      <form name="contactForm" onSubmit={registerUser}>
        <div className="user-box">
          <input type="email" name="email" required="" onChange={useremail}/>
          <label>Email ID</label>
        </div>
        <div className="user-box">
          <input type="password" name="pswd" required="" onChange={userPass}/>
          <label>Password</label>
        </div>
        <div className="user-box">
          <input type="text" name="name" required="" onChange={babyname}/>
          <label>Baby Name</label>
        </div>
        <div className="user-box">
          <input type="date" name="dob" required="" />
          <label>Baby Date of Birth</label>
        </div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <input type="submit" value="SIGNUP" />
      </form>
      
    </div>
      </>
      
}
    </div>
  );
}


export default SignUp;
