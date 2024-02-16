import { deleteHistoryVideos, getHistoryVideos, postHistoryVideos, deleteAllHistoryVideos } from "../services/historyService";
import toast from 'react-hot-toast';

export const getHistoryHandler = async (authState, dataStoreDispatch) => {

        try {
            const res = await getHistoryVideos(authState.token);
            if(res.status === 200){
                dataStoreDispatch({ type : "HISTORY_VIDEOS", payload : res.data.history });
            }
            
        } catch (error) {
            alert(error);
        }
}


export const addToHistory = async (video, authState, dataStoreDispatch, navigate) => {

    if(authState.token){
        try {
            const res = await postHistoryVideos(authState.token, video);
            if(res.status === 201){
                dataStoreDispatch({ type : "HISTORY_VIDEOS", payload : res.data.history });
            }
            
        } catch (error) {
            toast.error('Something went wrong',toastProp);
        }
    }
    else {
        navigate("/login");
    }
}

export const removeFromHistory = async ( authState, videoId, dataStoreDispatch, empty1, empty2) => {
    try {
        const res = await deleteHistoryVideos(authState.token, videoId);
        if(res.status === 200){
            dataStoreDispatch({ type : "HISTORY_VIDEOS", payload : res.data.history });
        }   
        
    } catch (error) {
        toast.error('Something went wrong',toastProp);
    }
}


export const clearTheHistory = async (authState, dataStoreDispatch, toastProp) => {
    try {
        const res = await deleteAllHistoryVideos(authState.token);
        if(res.status === 200){
            dataStoreDispatch({ type : "HISTORY_VIDEOS", payload : res.data.history });
            toast.success('History Clear',toastProp);
        }
        
    } catch (error) {
        toast.error('Something went wrong',toastProp);
    }
}