import { Aside } from "../../Components/aside/aside";
import { Navbar } from "../../Components/Navbar/Navbar";
import { AiFillLike } from 'react-icons/ai';
import { CgPlayList } from 'react-icons/cg';
import { MdOutlineWatchLater } from 'react-icons/md';
import { IoIosShareAlt } from 'react-icons/io';
import React from 'react'
import ReactPlayer from 'react-player/lazy'
import "../Video-Listing/VideoListing.css";
import "./videoPlayer.css";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../../context/dataStore";
import axios from "axios";
import { useAuth } from "../../context/authentication-context";
import { addToLike, removeFromLike } from "../../Utility-functions/likeHandler";
import { addToWatchLater, removeFromWatchLater } from "../../Utility-functions/watchLaterHandler";
import { useState } from "react";
import { PlaylistModal } from "../../Components/playlistModal/playlistModal";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import toast from "react-hot-toast";

export const VideoPlayer = () => {

    const [showModal, setShowModal] = useState(false);
    const { videoId } = useParams();
    const { dataStoreState, dataStoreDispatch, toastProp } = useData();
    const { authState } =useAuth();
    const navigate = useNavigate();
    const video = dataStoreState.videos.length !== 0 && dataStoreState.videos.find( video => videoId === video._id );
    const isLiked = dataStoreState.likedVideos.find(item => item._id === video._id);
    const isWatched = dataStoreState.watchLater.find(item => item._id === video._id);

    const LinkCopyToClipboard = () => {
        toast.success('Url Copy To Clipboard',toastProp);
    }


    return (
        <>
            {
                showModal
                &&
                <PlaylistModal setShowModal = {setShowModal} playlistVideo = {video}   />

            }
            <Navbar />

            <div className="aside-main-flex">
                <Aside />

                <section className="video-and-notes-container">
                    <div className="video-container">
                        <div className="video-player">
                            <ReactPlayer 
                                url={`https://www.youtube.com/watch?v=${videoId}`}
                                controls={true} 
                                playing={true}
                                className="react-player"
                                width="100%"
                                height="100%"
                            />
                        </div>
                        <div className="video-body">
                            <p className="video-player-title" >{video.title}</p>
                            <p className="vid-channel">{video.channel}</p>
                            <p className="vid-views">{video.views} views</p>
                            <div className="video-player-icons">

                                <div className="vid-option">
                                    {
                                        authState.token && isLiked
                                        ?
                                        <>
                                            <AiFillLike onClick={() => removeFromLike(authState, video._id, dataStoreDispatch, undefined, undefined, toastProp)} className="vid-player-icon is-active" />
                                            <p className="option-name is-active" >Liked</p>
                                        </>
                                        :
                                        <>
                                            <AiFillLike onClick={() =>addToLike(video, authState, dataStoreDispatch, navigate, toastProp)} className="vid-player-icon" />
                                            <p className="option-name" >Like</p>
                                        </>

                                    }
                                    
                                </div>
                                <div className="vid-option">
                                {
                                        authState.token && isWatched
                                        ?
                                        <>
                                            <MdOutlineWatchLater onClick={() => removeFromWatchLater( authState, video._id, dataStoreDispatch, undefined, undefined, toastProp)} className="vid-icon-watch-Later is-active" />
                                            <p className="option-name is-active" >Watch Later</p>
                                        </>
                                        :
                                        <>
                                            <MdOutlineWatchLater onClick={() =>addToWatchLater(authState, video, dataStoreDispatch, navigate, toastProp)} className="vid-icon-watch-Later" />
                                            <p className="option-name" >Watch Later</p>
                                        </>

                                    }
                                </div>
                                <div onClick={() => setShowModal(true)} className="vid-option">
                                    <CgPlayList className="vid-icon-save" />
                                    <p className="option-name" >Save</p>
                                </div>
                                <CopyToClipboard text={window.location.href}>
                                    <div onClick={ LinkCopyToClipboard } className="vid-option">
                                        <IoIosShareAlt className="vid-player-icon" />
                                        <p className="option-name" >Share</p>
                                    </div>
                                </CopyToClipboard>                              
                                
                            </div>
                        </div>
                    </div>

                </section>
          
            </div>
            
        </>
    )
}
 
