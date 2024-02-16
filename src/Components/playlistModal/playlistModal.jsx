import { VscChromeClose } from 'react-icons/vsc';
import { usePlayList } from '../../context/playList-context';
import { useState } from "react";
import "./playlistModal.css";
import { addToPlaylistHandler, createPlaylistHandler, deletePlaylistVideoHandler } from '../../Utility-functions/playlistHandler';
import { useAuth } from '../../context/authentication-context';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../context/dataStore';
import { videoOperation } from '../../Utility-functions/videoOperation';

export const PlaylistModal = ({ playlistVideo, setShowModal }) => {

    const { playListTitle, setPlayListTitle, playlistDispatch, playlistState } = usePlayList();
    const [openForm, setOpenForm] = useState(false);
    const { authState } = useAuth();
    const { toastProp } = useData();
    const navigate = useNavigate();

   

    const createPlaylist = (e) => {
        e.preventDefault();
        
        createPlaylistHandler(playListTitle, authState, playlistDispatch, navigate, playlistVideo, toastProp);
        setPlayListTitle({title : ""});
    }

    


    return (
        <>
            <main className="modal-main-container">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>Save to...</h3>
                        <VscChromeClose onClick={() => setShowModal(false)} className='cancle-icon' />
                    </div>

                    <div className="playlist-select-container">

                        {
                            playlistState.playlists.map( playlist => (
                                <label key={playlist._id} className='playlist-label' htmlFor="playlist-select">
                                    <input
                                    onClick={ () => videoOperation(playlist._id, playlist.videos, authState, playlistVideo, playlistDispatch, toastProp) }
                                    checked={ playlist.videos.find(item => item._id === playlistVideo._id) ? true : false }
                                    className='playlist-checkbox' 
                                    type="checkbox" 
                                    name="playlist-select"
                                    id={playlist._id}
                                     />
                                    {playlist.title.title}
                                </label>
                            ) )
                        } 

                        
                    </div>
                    
                    {
                        openForm
                        ?
                        <form onSubmit={(e) => createPlaylist(e)}  className="add-playlist-form">
                            <input onChange={(e) => setPlayListTitle((pre) => ({...pre, title:e.target.value}))} value={playListTitle.title} className='create-plalist-input w100 b-radius' placeholder='Playlist Name' type="search" name="playlist" required/>
                            <button className="btn btn-primary w100 b-radius">Create</button>
                        </form>
                        :
                        <div className="create-playlist-btn">
                            <button onClick={() => setOpenForm(true)} className="create-btn"><span>+</span> Create Playlist </button>
                        </div>
                    }

                </div>
            </main>
        </>
    )
}

