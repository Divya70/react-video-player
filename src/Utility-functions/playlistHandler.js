import { getAllPlaylist, postNewPlaylist, deletePlaylist, getPlaylistVideos, postVideoPlaylist, deleteVideoPlaylist } from "../services/playlistService";
import toast from 'react-hot-toast';
import { videoOperation } from "./videoOperation";

export const getPlaylistHandler = async (authState, playlistDispatch) => {

    try {
        const res = await getAllPlaylist(authState.token);
        if(res.status === 200){
            playlistDispatch({ type : "PLAYLISTS", payload : res.data.playlists });
    }
        
    } catch (error) {
        alert(error);
    }

}


export const createPlaylistHandler = async (playListTitle, authState, playlistDispatch, navigate, playlistVideo, toastProp) => {

    if(authState.token){
        try {
            const res = await postNewPlaylist(authState.token, playListTitle);

            if(res.status === 201){

                playlistDispatch({ type : "PLAYLISTS", payload : res.data.playlists });
                const newPlaylist = res.data.playlists[res.data.playlists.length - 1]
                videoOperation(newPlaylist._id, newPlaylist.videos, authState, playlistVideo, playlistDispatch, toastProp);
                
            }
             
        } catch (error) {
            console.log(error);
        }
    }
    else {
        navigate("/login");
    }
}


export const deletePlaylistHandler = async (playlistId, authState, playlistDispatch, toastProp) => {
    try {
        const res = await deletePlaylist(authState.token, playlistId);
        if(res.status === 200){
            playlistDispatch({ type : "PLAYLISTS", payload : res.data.playlists });
            toast.success('Playlist Deleted',toastProp);
        }
        
    } catch (error) {
        toast.error('Something went wrong',toastProp);
    }
}

export const getPlaylistVideosHandler = async (authState, playlistDispatch, playlistId) => {

    try {
        const res = await getPlaylistVideos(authState.token, playlistId);
        if(res.status === 200){
            playlistDispatch({ type : "PLAYLISTS_VIDEO_UPDATE", payload : res.data.playlists });
    }
        
    } catch (error) {
        alert(error);
    }

}


export const addToPlaylistHandler = async ( authState, playlistDispatch, playListId, playListVideo, toastProp ) => {

        try {
            const res = await postVideoPlaylist(authState.token, playListId, playListVideo);
            console.log(res);
            if(res.status === 201){
                playlistDispatch({ type : "PLAYLISTS_VIDEO_UPDATE", payload : res.data.playlist });
                toast.success('Video Added Scuccessfully',toastProp);
            }
            
        } catch (error) {
            toast.error('Something went wrong',toastProp);
            console.log(error);

        }
}

export const deletePlaylistVideoHandler = async (authState, videoId, undefined, playlistId, playlistDispatch, toastProp) => {
    try {
        const res = await deleteVideoPlaylist(authState.token, playlistId, videoId);
        if(res.status === 200){
            playlistDispatch({ type : "PLAYLISTS_VIDEO_UPDATE", payload : res.data.playlist });
            toast.success('Video Removed',toastProp);
        }
        
    } catch (error) {
        toast.error('Something went wrong',toastProp);
    }
}