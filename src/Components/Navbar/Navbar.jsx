import "./Navbar.css";
import { AiOutlineSearch } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { useAuth } from "../../context/authentication-context";
import { Link, useNavigate } from "react-router-dom";
import { useFilter } from "../../context/filter-context";


export const Navbar = () => {

    const { authState, getUser } = useAuth();
    const { setSearchedVideo } = useFilter();
    const { filterDispatch } = useFilter();
    const navigate = useNavigate();

    const searchHandler = (e) => {
        setSearchedVideo(e.target.value);
        filterDispatch({ type : "CLEAR_FILTER", payload : "All" });
    }

    return (
        <nav className="vid-nav-container" >
            <p className="vid-brand-name">Video Player<span></span></p>
            <div className="vid-search-container">
                <AiOutlineSearch className="search-icon" />
                <input onChange={(e) => searchHandler(e)} onClick={() => navigate("/")}
                className="vid-search-input" type="search" name="search" placeholder="Search..." autoFocus />
            </div>
            <div className="vid-profile-container">
                {
                    authState.token
                    ?
                    
                    <Link to="/profile/">
                        <FaUser className="vid-user-icon" />
                        <p className="vid-user-name" >Hey, {getUser.firstName}</p>
                    </Link>
                    
                    :
                    <Link to="/login">
                        <FaUser className="vid-user-icon" />
                        <p className="vid-user-name" >Login</p>
                    </Link>

                }
            </div>
        </nav>
    )
}
