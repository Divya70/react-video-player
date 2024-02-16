import "./horizontalCard.css";
import { FaTrashAlt } from 'react-icons/fa';
import { getUrl } from "../../Utility-functions/getUrl";
import { useAuth } from "../../context/authentication-context";
import { useData } from "../../context/dataStore";
import { Link } from "react-router-dom";
import { usePlayList } from "../../context/playList-context";

export const HorizontalCard = ({ videos, deleteHandler, playlistId, toastProp }) => {

    const likedImg = getUrl(videos._id);
    const { authState } = useAuth();
    const { dataStoreDispatch } = useData();
    const { playlistDispatch } = usePlayList();

    return (
        <div className="horizontal-card-container">
            <Link to={`/video/${videos._id}`} >
                <div className="horizontal-img-wrapper">
                    <img className="horizontal-card-img" src={likedImg} alt="img" />
                    <span className="time-stamp">{ videos.duration }</span>
                </div>
            </Link>
                <div className="horizontal-card-body">
                    <p className="horizontal-card-title">{ videos.title }</p>
                    <p className="horizontal-card-channel">{ videos.channel }</p>
                </div>

            <FaTrashAlt onClick={() => deleteHandler( authState, videos._id, dataStoreDispatch, playlistId, playlistDispatch, toastProp)} className="trash-icon" />
        </div>
    )
}
