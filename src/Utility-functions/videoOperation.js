import { addToPlaylistHandler, deletePlaylistVideoHandler } from "./playlistHandler";

export const videoOperation = (playlistId, videos, authState, playlistVideo, playlistDispatch, toastProp) => {
    videos?.find(item => item._id === playlistVideo._id)
    ?
    deletePlaylistVideoHandler(authState, playlistVideo._id, undefined, playlistId, playlistDispatch, toastProp)
    :
    addToPlaylistHandler(authState, playlistDispatch, playlistId, playlistVideo, toastProp)
}