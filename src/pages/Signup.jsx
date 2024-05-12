// import Template from "../components/Auth/Template";
import signupImg from "../assets/signup.png";
import Templet from "../component/Templet";
import React from 'react'

function Signup({ setIsLoggedIn }) {
  return (
    // <div className='flex justify-center items-center h-full'>
    //   Signup
    // </div>
    <Templet
      title="Join the millions learning to code with StudyNotion for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Signup;
