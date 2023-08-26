import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai"
import { toast } from 'react-hot-toast';

function LoginForm({setIsLoggedIn}) {
const [formData, setformData] = useState({ email:"",password:""});
const [showPassword, setshowPassword] = useState(false);
const navigate=useNavigate();
function changeHandler(event){
    setformData((prevData)=>({
    ...prevData,
    [event.target.name]:event.target.value
    
    } ))
    }
function submitHandler(event){
event.preventDefault();
setIsLoggedIn(true);
toast.success("Logged in!");
navigate("/dashboard");
}


  return (
      <form onSubmit={submitHandler} 
      className='flex flex-col w-full gap-y-4 mt-6'
      >
<label className='w-full' >  <span className="flex items-center">
    <p className="text-[1rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address</p>{" "}
    <sup className="text-pink-200">*</sup>
  </span> <input 
   className='bg-richblack-800 border w-full border-richblack-700 rounded-[0.5rem] text-richblack-5 w--full p-[12px] '
  required type="email" id='emailAddress' name='emailAddress' placeholder='Enter Email Address' value={formData.emailAddress}  onChange={changeHandler} /></label>

<label className='w-full relative'><span className="flex items-center">
    <p className="text-[1rem] text-richblack-5 mb-1 leading-[1.375rem]">Password</p>{" "}
    <sup className="text-pink-200">*</sup>
  </span><input
  className='bg-richblack-800 w-full border border-richblack-700 rounded-[0.5rem] text-richblack-5 w--full p-[12px] ' 
  required type={showPassword ? ("text"): ("password")} id='password' name='password' placeholder='Password' />
  <span className='absolute right-3 top-[38px] cursor-pointer '  
  onClick={()=>setshowPassword((prev)=>!prev)}> 
{showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) }
</span>
  
  </label>


<Link to="#"
><p className='text-xs mt-0 text-blue-100 max-w-max ml-auto '>Forgot Password</p>
</Link>
<button className='text-center w-full font-medium rounded-[8px] px-[12px] py-[8px] mt-6 mb-3 bg-yellow-50'>Sign In</button>
      </form>
  )
}

export default LoginForm
