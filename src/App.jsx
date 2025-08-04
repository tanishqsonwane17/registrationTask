import React, { useContext, useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Card from './components/Card';
import { MyStore } from './context/MyContext';

const App = () => {

const {flag, setFlag,usersData,setUsersData} = useContext(MyStore);

  return (
    <>
      <h2 className='text-xl font-bold'>Users</h2>
      {flag 
        ? <Login setFlag={setFlag} usersData={usersData} /> 
        : <Register setFlag={setFlag} setUsersData={setUsersData} usersData={usersData} />
      }
      <Card usersData={usersData}/>
    </>
  );
};
export default App;
