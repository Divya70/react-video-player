import { NavLink, Outlet } from "react-router-dom";
import { Aside } from "../../Components/aside/aside";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./profile.css";

export const ProfilePage = () => {

    const getActiveStyle = ({ isActive }) => ({
        margin: "1rem",
        color: isActive ? "#fdca3e" : "#e8e6e3",
        cursor: "pointer"
      });

    return (
        <>
            <Navbar />

            <div className="aside-main-flex">
                <Aside />

                <div className="user-profile-container">
                    <h2 className="profile-heading">User Profile</h2>
                    <div className="title-container">
                        <NavLink style={getActiveStyle} to="/profile/">
                            <h2>Profile Info</h2> 
                        </NavLink>
                        <NavLink style={getActiveStyle} to="settings">
                            <h2>Settings</h2> 
                        </NavLink>
                    </div>
                    <hr className="devider" />

                    <div className="content-container">
                        <Outlet />
                    </div>
                    
                </div>

          
            </div>
            
        </>
    )
}