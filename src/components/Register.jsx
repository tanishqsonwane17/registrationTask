import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { MyStore } from '../context/MyContext';
const Register = () => {
  const {usersData, setUsersData, setFlag} = useContext(MyStore);
  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm();

  function submitHandler(data) {
    const storedData = [...usersData, data]
    setUsersData(storedData); 
     localStorage.setItem('users', JSON.stringify(storedData))
    console.log(" Registered:", data);
    reset();
  }  return (
    <>
    
    <form action="" onSubmit={handleSubmit(submitHandler)}
    className='flex flex-col gap-3 w-56 p-4'
    >
     <input  className='border px-4 py-2 rounded ' {...register('username', {required: true})} type="text" placeholder='username' />
     {errors.username?.type === 'required' && <span className='text-red-500'>username is required</span>}
     <input  className='border px-4 py-2 rounded ' {...register('email', {required: true})} type="email" placeholder='Email' />
     {errors.email?.type === 'required' && <span className='text-red-500'>email is required</span>}
     <input  className='border px-4 py-2 rounded ' {...register('mobile', {required: true}, {minLength: 10})} type="number" placeholder='mobile' />
     {errors.mobile?.type === 'required' && <span className='text-red-500'>mobile is required</span>}
     {errors.mobile?.type === 'minLength' && <span className='text-red-500'>mobile must be 10 digits</span>}
     <input  className='border px-4 py-2 rounded ' {...register('password', {required: true})} type="password" placeholder='Password' />
     {errors.password?.type === 'required' && <span className='text-red-500'>password is required</span>}
     <button 
     
     disabled={!isValid} className='border px-4 py-2 rounded bg-blue-400 cursor-pointer text-white ' >Register</button>
    </form>
    <p className='px-4 text-xs'>Already have an account  <span className='text-blue-600 cursor-pointer' onClick={ () => setFlag((prev)=> !prev)}>Login</span></p>


    </>
  )
}

export default Register