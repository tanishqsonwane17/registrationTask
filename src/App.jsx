import React, { useContext } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Card from './components/Card';
import { MyStore } from './context/MyContext';
import { LuSunMoon } from "react-icons/lu";

const App = () => {
  const { flag, setFlag, usersData, setUsersData, setDark, dark } = useContext(MyStore);

  return (
    <div className={`min-h-screen p-4 ${dark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-between items-center">
        <h2 className='text-xl font-bold'>Users</h2>
        <LuSunMoon 
          className={`text-2xl cursor-pointer ${dark ? 'text-white' : 'text-black'}`}
          onClick={() => setDark(prev => !prev)}
        />
      </div>

      {flag 
        ? <Login setFlag={setFlag} usersData={usersData} dark={dark} /> 
        : <Register setFlag={setFlag} setUsersData={setUsersData} usersData={usersData} dark={dark} />
      }
      <Card />
    </div>
  );
};

export default App;
