import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/authentication-context";
import toast from 'react-hot-toast';
import { useData } from "../../context/dataStore";


export const Settings = () => {

    const  { authDispatch } = useAuth();
    const   navigate  = useNavigate();
    const  { toastProp } = useData();

    const logoutClickHandler = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        authDispatch({ type : "USER_LOGOUT"});
        toast.success('Logout Successfully',toastProp);
        navigate("/");
    }

    return (
       <Link to="/" ><button onClick={logoutClickHandler} className="btn btn-primary">Logout</button></Link>
    )
}