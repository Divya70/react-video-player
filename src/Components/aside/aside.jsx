import "./aside.css";
import { ImHome } from 'react-icons/im';
import { CgPlayList } from 'react-icons/cg';
import { AiFillLike } from 'react-icons/ai';
import { MdOutlineWatchLater } from 'react-icons/md';
import { FaHistory } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom";


export const Aside = () => {

    const getActiveStyle = ({ isActive }) => ({
        color: isActive ? "#4285F4" : "#ffffff",
    });


    return (
        <aside className="vid-aside-container" >
            
            <NavLink style={getActiveStyle} to="/" className="aside-title-box" >
                <ImHome className="vid-aside-icon active" />
                <p className="vid-aside-title active">Home</p>
            </NavLink >
                
            <NavLink style={getActiveStyle} to="/playlist" className="aside-title-box">
                <CgPlayList className="vid-aside-icon playlist-icon" />
                <p className="vid-aside-title">Playlist</p>
            </NavLink>

            <NavLink style={getActiveStyle} to="/like" className="aside-title-box" >
                <AiFillLike className="vid-aside-icon" />
                <p className="vid-aside-title mr-top">Likes</p>
            </NavLink>

            <NavLink style={getActiveStyle} to="/watchlater" className="aside-title-box">
                <MdOutlineWatchLater className="vid-aside-icon watch" />
                <p className="vid-aside-title mr-top">Watch Later</p>
            </NavLink>

            <NavLink style={getActiveStyle} to="/history" className="aside-title-box">
                <FaHistory className="vid-aside-icon" />
                <p className="vid-aside-title mr-top">History</p>
            </NavLink>
        </aside>
    )
}