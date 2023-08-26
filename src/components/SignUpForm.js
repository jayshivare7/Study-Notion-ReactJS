import React from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
function SignupForm({setIsLoggedIn}) {
const [formData, setformData] = useState({
  firstName:"",lastName:"", email:"",password:"",confirmPassword:""
});

function changeHandler(event){
setformData((prevData)=>({
...prevData,
[event.target.name]:event.target.value

} ))
}
const navigate=useNavigate();
const [accountType, setaccountType] = useState("student");
const [showPassword1, setshowPassword1] = useState(false);
const [showPassword2, setshowPassword2] = useState(false);
function submitHandler(event){
event.preventDefault();
if(formData.password!=formData.confirmPassword){
  toast.error("Password do not match");
  return;
}

setIsLoggedIn(true);
toast.success("Account created");
navigate("/dashboard");
  
}


  return (
<>      <div className='flex my-6 bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max'>
      <button 
      onClick={()=>setaccountType("student")}
      className={`${accountType==="student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200" } py-2 px-5 rounded-full transition-all duration-200`}
      >Student</button>
      <button 
       className={`${accountType==="instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200" } py-2 px-5 rounded-full transition-all duration-200`}
       onClick={()=>setaccountType("instructor")}>Instructor</button>
    </div>

  <form onSubmit={submitHandler} >  
   <div className=' flex justify-between mt-4 mb-4'>  <label >
    <span className='flex items-center '>  <p className="text-[1rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name</p> <sup className="text-pink-200">*</sup> </span>
      <input  className='bg-richblack-800 border border-richblack-700 rounded-[0.5rem] text-richblack-5 w-full mt-1 p-[12px] ' required type="text" name='firstName' value={formData.firstName} placeholder='First Name' onChange={changeHandler}/>
     </label>
     <label >
 <span className='flex items-center'> <p className="text-[1rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name</p> <sup className="text-pink-200">*</sup></span>
      <input  className='bg-richblack-800 border border-richblack-700 rounded-[0.5rem] text-richblack-5 mt-1 w-full p-[12px] ' required type="text" name='lastName' value={formData.lastName} placeholder='Last Name' onChange={changeHandler}/>
     </label> </div>
     <label className='mt-4' >
    <span className='flex items-center'> <p className="text-[1rem] text-richblack-5 mb-1 leading-[1.375rem]"> Email Address</p> <sup className="text-pink-200">*</sup></span>
      <input   className='bg-richblack-800 border  border-richblack-700 rounded-[0.5rem] text-richblack-5 w-full mt-1 p-[12px] ' required type="email" name='email' value={formData.email} placeholder='Email Address' onChange={changeHandler}/>
     </label> 
     <div className=' flex justify-between mt-4 '> <label className='relative' >
     <span className='flex items-center'><p className="text-[1rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password</p> <sup className="text-pink-200">*</sup></span>
      <input  className='bg-richblack-800 border border-richblack-700 rounded-[0.5rem] text-richblack-5 w-full mt-1 p-[12px] ' required type={showPassword1 ? ("text"):("password") } name='password' placeholder='Enter Password' value={formData.password} onChange={changeHandler}/>
      <span className='absolute right-3 top-[38px] cursor-pointer ' onClick={()=>setshowPassword1((prev)=>!prev)}> {showPassword1 ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>): (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) } </span>
     </label> 
     <label className='relative' >
    <span className='flex items-center'><p className="text-[1rem] text-richblack-5 mb-1 leading-[1.375rem]"> Confirm Password</p> <sup className="text-pink-200">*</sup></span>
      <input  className='bg-richblack-800 border border-richblack-700 rounded-[0.5rem] text-richblack-5 w-full mt-1 p-[12px] ' required type={showPassword2 ? ("text"):("password") } name='confirmPassword' placeholder='Confirm Password' value={formData.confirmPassword} onChange={changeHandler}/>

     <span  className='absolute right-3 top-[38px] cursor-pointer ' onClick={()=>setshowPassword2((prev)=>!prev)} > {showPassword2 ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>): (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) } </span>
     </label>  </div>
     <button className='text-center w-full font-medium rounded-[8px] px-[12px] py-[8px] mt-6 mb-3 bg-yellow-50'>Create Account</button>
  </form> 
 </>

  )
}

export default SignupForm
