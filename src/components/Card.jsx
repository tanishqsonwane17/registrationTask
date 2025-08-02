import React from 'react'

const Card = ({usersData}) => {
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