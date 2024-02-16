import { deleteWatchLaterVideos, getWatchLaterVideos, postWatchLaterVideos } from "../services/watchLaterService";
import toast from 'react-hot-toast';

export const getWatchLaterHandler = async (authState, dataStoreDispatch) => {

        try {
            const res = await getWatchLaterVideos(authState.token);
            if(res.status === 200){
                dataStoreDispatch({ type : "WATCH_LATER_VIDEOS", payload : res.data.watchlater });
            }
            
        } catch (error) {
            alert(error);
        }
}


export const addToWatchLater = async (authState, video, dataStoreDispatch, navigate, toastProp) => {

    if(authState.token){
        try {
            const res = await postWatchLaterVideos(authState.token, video);
            if(res.status === 201){
                dataStoreDispatch({ type : "WATCH_LATER_VIDEOS", payload : res.data.watchlater });
                toast.success('Saved to Watchlater videos!',toastProp);
            }
            
        } catch (error) {
            toast.error('Something went wrong',toastProp);
        }
    }
    else {
        navigate("/login");
    }
}

export const removeFromWatchLater = async ( authState, videoId, dataStoreDispatch, empty1, empty2, toastProp) => {
    try {
        const res = await deleteWatchLaterVideos(authState.token, videoId);
        if(res.status === 200){
            dataStoreDispatch({ type : "WATCH_LATER_VIDEOS", payload : res.data.watchlater });
            toast.success('Remove from watchlater videos!',toastProp);
        }
        
    } catch (error) {
        toast.error('Something went wrong',toastProp);
    }
}