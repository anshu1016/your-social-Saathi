import React, { createContext, useContext, useState } from 'react'
const AuthContext = createContext();
const AuthContextProvider = ({children}) => {
    const userToken = localStorage.getItem("userToken");
    const [isLogIn, setIsLogIn] = useState(userToken ? true : false);
  return (
    <div>
      <AuthContext.Provider value={{isLogIn,setIsLogIn}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}
const useAuth = () => useContext(AuthContext);
export  {AuthContextProvider,useAuth};
