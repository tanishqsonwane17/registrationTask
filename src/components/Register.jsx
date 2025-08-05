import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { MyStore } from '../context/MyContext';

const Register = () => {
  const { usersData, setUsersData, setFlag } = useContext(MyStore);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm({ mode: 'onChange' }); // 👈 live validation enabled

  function submitHandler(data) {
    const storedData = [...usersData, data];
    setUsersData(storedData);
    localStorage.setItem('users', JSON.stringify(storedData));
    console.log("Registered:", data);
    reset();
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className='flex flex-col gap-3 w-56 p-4'
      >
        {/* Username */}
        <input
          className='border px-4 py-2 rounded'
          {...register('username', { required: true })}
          type="text"
          placeholder='Username'
        />
        {errors.username?.type === 'required' && (
          <span className='text-red-500'>Username is required</span>
        )}

        {/* Email */}
        <input
          className='border px-4 py-2 rounded'
          {...register('email', { required: true })}
          type="email"
          placeholder='Email'
        />
        {errors.email?.type === 'required' && (
          <span className='text-red-500'>Email is required</span>
        )}

        {/* Mobile */}
        <input
          className='border px-4 py-2 rounded'
          {...register('mobile', { required: true, minLength: 10 })}
          type="text" // 👈 minLength works with text, not number
          placeholder='Mobile'
        />
        {errors.mobile?.type === 'required' && (
          <span className='text-red-500'>Mobile is required</span>
        )}
        {errors.mobile?.type === 'minLength' && (
          <span className='text-red-500'>Mobile must be at least 10 digits</span>
        )}

        {/* Password */}
        <input
          className='border px-4 py-2 rounded'
          {...register('password', { required: true })}
          type="password"
          placeholder='Password'
        />
        {errors.password?.type === 'required' && (
          <span className='text-red-500'>Password is required</span>
        )}

        {/* Submit Button */}
        <button
          disabled={!isValid}
          className={`border px-4 py-2 rounded text-white ${
            isValid ? 'bg-blue-500' : 'bg-blue-500 cursor-not-allowed'
          }`}
        >
          Register
        </button>
      </form>

      <p className='px-4 text-xs'>
        Already have an account?{' '}
        <span
          className='text-blue-600 cursor-pointer'
          onClick={() => setFlag((prev) => !prev)}
        >
          Login
        </span>
      </p>
    </>
  );
};

export default Register;
