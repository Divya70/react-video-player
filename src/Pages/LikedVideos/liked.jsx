import { Aside } from "../../Components/aside/aside";
import { Navbar } from "../../Components/Navbar/Navbar";
import pageSideImg from "../../assets/page-side-img.svg";
import "./liked.css";
import { HorizontalCard } from "../../Components/horizontalCard/horizontalCard";
import { useData } from "../../context/dataStore";
import { removeFromLike } from "../../Utility-functions/likeHandler";

export const LikedPage = () => {

    const  { dataStoreState, toastProp } = useData();
    const videosCount = dataStoreState.likedVideos.length;

    return(
        <>
            <Navbar />

            <div className="aside-main-flex">
                <Aside />

                <div className="horizontal-main-container">
                    <div className="like-img-and-info">
                        <img className="horizontal-hero-img" src={pageSideImg} alt="like" />
                        <p className="liked-vid-heading">Liked videos</p>
                        <p className="liked-vid-count" >{`${videosCount} ${videosCount === 0 || videosCount === 1 ? "Video" : "Videos"}`}</p>
                    </div>
                    <div className="card-show">
                        {
                            dataStoreState.likedVideos.map( video => (
                                <HorizontalCard 
                                key={video._id} 
                                videos = {video}
                                deleteHandler = {removeFromLike}
                                toastProp = {toastProp}
                                />
                            ) )
                        }
                        
                    </div>
                </div>        
            </div>
        
        </>
    )
}