// import Template from "../components/Auth/Template";
import loginImg from "../assets/login.png";
import Templet from "../component/Templet";
import React from 'react'

function Login({ setIsLoggedIn }) {
  return (
    // <div className='flex justify-center items-center h-full'>Login</div>
   
       <Templet
      title="Welcome Back"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={loginImg}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    />

    
  );
}

export default Login;
