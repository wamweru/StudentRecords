import React, {createContext, useState, useContext} from 'react';
import { useParams } from 'react-router-dom';

//creating the AuthContext
const AuthContext=createContext();


//custom hook to use the AuthContext
export const UseAuth = () =>{
    return useContext(AuthContext);
};

export const AuthProvider=({children}) => {
    const [user, setUser]=useState(null);

    const login =(userData)=>{
          
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        //logic here
        setUser(null);
        localStorage.removeItem('user');
    }

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};