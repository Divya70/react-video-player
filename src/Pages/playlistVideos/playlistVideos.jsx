import { Aside } from "../../Components/aside/aside";
import { Navbar } from "../../Components/Navbar/Navbar";
import { HorizontalCard } from "../../Components/horizontalCard/horizontalCard";
import { usePlayList } from "../../context/playList-context";
import { useParams } from "react-router-dom";
import { deletePlaylistVideoHandler } from "../../Utility-functions/playlistHandler";
import playlistVideosImg from "../../assets/page-side-img.svg";
import { useData } from "../../context/dataStore";


export const PlaylistVideos = () => {
  const { playlistState } = usePlayList();
  const { toastProp } = useData();
  const { playlistId } = useParams();
  const playlist = playlistState.playlists.reduce( (accu, item) => (item._id === playlistId ? item : accu),
    { title: {title : ""}, videos: [], _id: "" }
  );
  const playlistVideosLength = playlist.videos.length;

  return (
    <>
      <Navbar />

      <div className="aside-main-flex">
        <Aside />

        <div className="horizontal-main-container">
          <div className="like-img-and-info">
            <img
              className="horizontal-hero-img"
              src={playlistVideosImg}
              alt="like"
            />
            <p className="liked-vid-heading">Playlist {playlist.title.title}</p>
            <p className="liked-vid-count" >{`${playlistVideosLength} ${playlistVideosLength === 0 || playlistVideosLength === 1 ? "Video" : "Videos"}`}</p>
            
          </div>
          <div className="card-show">
            {
                playlist.videos.map( video => (
                    <HorizontalCard 
                        key={video._id} 
                        videos = {video}
                        deleteHandler = {deletePlaylistVideoHandler}
                        playlistId = { playlistId } 
                        toastProp = {toastProp}
                    />
                ) )
            }
          </div>
        </div>
      </div>
    </>
  );
};
