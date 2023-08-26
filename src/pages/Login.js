import React from 'react'
// import Template from '../components/Template'
import loginImg from "../assets/login.png"
import Template from '../components/Template'

const Login = ({setIsLoggedIn}) => {
  return (
    <Template 
    title="Welcome Back"
    desc1="Build Skills for Today, Tommorow and Beyond"
    desc2="Education to future proof your career."
    formType="login"
    image={loginImg}
    setIsLoggedIn={setIsLoggedIn}
   />


  )
}

export default Login
