import React, {useState}from 'react';
import './SignUp.css';

const SignUp =() => {
  const[action, setAction] = useState("Sign Up");
  return(
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className="underline"></div>
      </div>
      <div className='inputs'>
        {action==="Login"?<div></div>:        <div className='input'>
          <img src='images/user_icon.png' alt="" />
          <input type='email' placeholder="Email Id"/>
        </div>}

        <div className='input'>
          <img src='images/user_icon.png' alt="" />
          <input type='password' placeholder="Password"/>
        </div>
    </div>
    {action==="Sign Up"?<div></div>:  <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
   
    <div className="submit-container">
      <div className={action==="Login" ? "submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}} >Sign Up</div>
      <div className={action==="Sign Up" ? "submit gray" : "submit"}  onClick={()=>{setAction("Login")}}>Login</div>
    </div>
  </div>
  );
};

export default SignUp;
