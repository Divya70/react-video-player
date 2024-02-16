import "./authentication.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router";
import { useAuth } from "../../context/authentication-context";
import { useData } from "../../context/dataStore";
import toast from 'react-hot-toast';


const Login = () => {

    const navigate = useNavigate();
    const [userData, setUserData] = useState({email : "", password : ""});
    const { authDispatch } = useAuth();
    const location = useLocation();
    const { toastProp } = useData();
    let from = location.state?.from?.pathname || '/';

    // Dummy data for guest credential
    const dummyData = {
        email : "divyanamdev@gmail.com",
        password : "divyanamdev123"
    }

    // Use guest credential click handler
    const addDummyUser = (e) => {
        e.preventDefault();
        setUserData(dummyData);
    }

    // User input values change handler
    const userInputValues = (e) => {
        setUserData((pre) => ({...pre, [e.target.name] : e.target.value }));
    }

    // login click handler
    const loginClickHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/auth/login", userData);
            
            if(response.status === 200){
                localStorage.setItem("token", response.data.encodedToken);
                localStorage.setItem("user", JSON.stringify(response.data.foundUser));
                authDispatch({ type : "USER_LOGIN", payload : response.data.encodedToken })
                navigate(from, { replace: true });
                toast.success('Login Successfully',toastProp);
                
            }

            

        } catch (error) {
            toast.error('Something went wrong',toastProp);
        }

    }

    return (
        <form className="auth-container">
            <header className="heading-box flex-center">
                <h2 className="auth-heading login-heading">Login</h2>
            </header>
    
            <div className="input-container flex margin-bottom width-100">
                <label htmlFor="email" className="auth-label">Email address</label>
                <input onChange={ userInputValues } name="email" className="auth-input" type="email" placeholder="Type email" value={userData.email} />
            </div>
    
            <div className="input-container flex margin-bottom width-100">
            <label htmlFor="password" className="auth-label">Password</label>
            <input onChange={ userInputValues } name="password" className="auth-input" type="password" placeholder="Type password" value={userData.password} />
            </div>
    
            <div className="condition-box flex width-100 margin-bottom">
                <div className="remember-me-box">
                    <input type="checkbox" name="remember me" id="remember-me" />
                    <label htmlFor="remember me">Remember me</label>
                </div>
    
                <div className="forgot-pass-box ">
                    <a href="#" className="forgot-pass-link">Forgot your password?</a>
                </div>
            </div>

            <div className="auth-btn width-100 credential-btn-container">
                <button onClick={(e) => addDummyUser(e)} className="btn btn-primary-outline btn-width">Use Guest Credential</button>
            </div>
    
            <div className="auth-btn width-100">
                 <button onClick={(e) => loginClickHandler(e)} className="btn btn-primary btn-width">Login</button>
            </div>
    
            <div className="auth-btn width-100">
                <button className="btn btn-secondary-link btn-width"><Link to="/signup">Create New Account</Link></button>
            </div>
        </form>
    )
}

export {Login};