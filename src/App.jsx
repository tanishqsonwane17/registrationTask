import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  const [flag, setFlag] = useState(true);
  const [usersData, setUsersData] = useState([]); // global user data state

  return (
    <>
      <h2 className='text-xl font-bold'>Users</h2>
      {flag 
        ? <Login setFlag={setFlag} usersData={usersData} /> 
        : <Register setFlag={setFlag} setUsersData={setUsersData} usersData={usersData} />
      }
    </>
  );
};

export default App;
