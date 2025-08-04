import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { MyStore } from '../context/MyContext';

const Login = () => {
  const {usersData,setFlag} = useContext(MyStore);
    const {register, handleSubmit, formState: {errors, isValid}, reset} = useForm()
function submitHandler(data) {
  const user = usersData.find((user) => user.email === data.email && user.password === data.password);

  if (user) {
    console.log(" Logged in successfully");
  } else {
    console.log(" Invalid password");
  }

  reset();
}

  return (
    <>
    
    <form action="" onSubmit={handleSubmit(submitHandler)}
    className='flex flex-col gap-3 w-56 p-4'
    >
     <input  className='border px-4 py-2 rounded ' {...register('email', {required: true})} type="email" placeholder='Email' />
     {errors.email?.type === 'required' && <span className='text-red-500'>email is required</span>}
     <input  className='border px-4 py-2 rounded ' {...register('password', {required: true})} type="password" placeholder='Password' />
     {errors.password?.type === 'required' && <span className='text-red-500'>password is required</span>}
     <button 
     
     disabled={!isValid} className='border px-4 py-2 rounded bg-blue-400 cursor-pointer text-white ' >Login</button>
    </form>
    <p className='px-4 text-xs'>Create new account? <span className='text-blue-600 cursor-pointer' onClick={ () => setFlag((prev)=> !prev)}>Register</span></p>
    
    </>
  )
}

export default Login