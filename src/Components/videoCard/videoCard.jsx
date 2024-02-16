import "./videoCard.css";
import { AiOutlineMore } from 'react-icons/ai';
import { CgPlayList } from 'react-icons/cg';
import { MdOutlineWatchLater } from 'react-icons/md';
import { getUrl } from "../../Utility-functions/getUrl";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useClickOutside } from "../../Utility-functions/useClickOutside";
import { addToWatchLater, removeFromWatchLater } from "../../Utility-functions/watchLaterHandler";
import { useAuth } from "../../context/authentication-context";
import { useData } from "../../context/dataStore";
import { addToHistory } from "../../Utility-functions/historyHandler";
import { PlaylistModal } from "../playlistModal/playlistModal";


export const VideoCard = ({ video }) => {
    
    const imgUrl = getUrl(video._id);
    const [menu, setMenu] = useState(false);
    const { authState } = useAuth();
    const { dataStoreState, dataStoreDispatch, toastProp } = useData();
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const isWatched = dataStoreState.watchLater.find(item => item._id === video._id);

    const menuBoxRef = useClickOutside(() => setMenu(false));
    
    return (    
        <>   

        {
            showModal
            &&
            <PlaylistModal setShowModal = {setShowModal} playlistVideo = {video} />
        }

        <div className="vid-main-container">
            <Link to={`/video/${video._id}`} >
                <figure onClick={ () => addToHistory(video, authState, dataStoreDispatch, navigate) } className="vid-img-contaier">
                    <img className="vid-img" src={imgUrl} alt="vidImg" />
                    <span className="vid-duration" >{video.duration}</span>
                </figure>
            </Link>
        
            <div className="vid-body-continer">
                <img 
                className="avatar avatar-small" 
                src={video.channelAvatar} alt="badge" />
                <div className="vid-info-box">
                    <p className="vid-title" >{video.title}</p>
                    <p className="vid-channel">{video.channel}</p>
                    <p className="vid-views">{video.views} Views</p>
                </div>
                <div ref={menuBoxRef} className="menu-wrapper">
                    <AiOutlineMore onClick={() => setMenu(open => !open)} className="menu-icon" />

                    {
                        menu
                        &&
                        <div className="menu-options-wrapper">
                            <div className="option-box">
                                {
                                    authState.token && isWatched
                                    ?
                                    <>
                                        <MdOutlineWatchLater className="option-menu-icon-WL watched" />
                                        <p  onClick={() => removeFromWatchLater(authState, video._id,  dataStoreDispatch, undefined, undefined, toastProp)} className="option-menu-title watched">Remove from Watch Later</p>
                                    </>
                                    :
                                    <>
                                        <MdOutlineWatchLater  className="option-menu-icon-WL" />
                                        <p onClick={() => addToWatchLater(authState, video, dataStoreDispatch, navigate, toastProp)} className="option-menu-title">Save to Watch Later</p>
                                    </>
                                }
                               
                            </div>
                            <div className="option-box">
                                <CgPlayList className="option-menu-icon" />
                                <p onClick={() => setShowModal(true)} className="option-menu-title">Save to PlayList</p>
                            </div>
                        </div>
                    }
                   
                </div>
            </div>
        </div>
        </> 
    )
}