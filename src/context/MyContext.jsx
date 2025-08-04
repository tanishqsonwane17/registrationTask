import { createContext, useState } from "react";

export const MyStore = createContext()

export const MyProvider = ({children}) => {
  const [flag, setFlag] = useState(true);
  const [usersData, setUsersData] = useState(()=>localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []); 
    return <MyStore.Provider value={{flag, setFlag, usersData, setUsersData}}>
        {children}
    </MyStore.Provider>
}

