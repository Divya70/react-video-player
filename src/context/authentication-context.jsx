import { createContext, useContext, useReducer, useEffect, useState } from "react";
import { authReducer } from "../Reducer/authReducer";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
    
    const getToken = localStorage.getItem("token");
    const [authState, authDispatch] = useReducer(authReducer, { token : getToken });
    const getUser = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        authDispatch({type : "CHECK_TOKEN", payload : getToken });
    }, [])


    return (
        <AuthContext.Provider value={{authState, authDispatch, getUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, useAuth };