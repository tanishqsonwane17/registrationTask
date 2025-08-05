import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext';

const Card = () => {
const {usersData} = useContext(MyStore);
  return (
    <div>

            <div className='flex gap-6 p-12'>
{usersData.map((user, index) => (
  <div key={index} className='flex p-4  justify-center border rounded-lg'>
    <h1 className='flex flex-col gap-4'>{user.username} <h5>{user.email}</h5> <h6>{user.mobile}</h6></h1>
  </div>
))}
    </div>

    </div>
  )
}

export default Card