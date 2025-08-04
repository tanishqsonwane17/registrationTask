import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext';

const Card = () => {
const {usersData} = useContext(MyStore);
  return (
    <div>

            <div className='flex gap-6 p-12'>
{usersData.map((user, index) => (
  <div key={index} className='flex h-6 w-32 justify-center border rounded-lg'>
    <h1>{user.username}</h1>
  </div>
))}
    </div>

    </div>
  )
}

export default Card