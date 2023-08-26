import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
   <>
   <Template 
    title="Join the millions learning to code with Studynotion for free"
    desc1="Build Skills for Today, Tommorow and Beyond"
    desc2="Education to future proof your career."
    formType="signup"
    image={signupImg}
    setIsLoggedIn={setIsLoggedIn}
   />

   </>

  )
}

export default Signup
