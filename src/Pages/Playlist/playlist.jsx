import "../../Pages/Video-Listing/VideoListing.css";
import { Aside } from "../../Components/aside/aside";
import { Navbar } from "../../Components/Navbar/Navbar";
import { PlaylistCard } from "../../Components/playlistCard/playlistCard";
import { usePlayList } from "../../context/playList-context";



export const PlaylistPage = () => {

    const { playlistState } = usePlayList();

    return (
        <>
            <Navbar />

            <div className="aside-main-flex">
                <Aside />

                <div className="filter-and-main-flex">
                    {
                        playlistState.playlists.length === 0
                        &&
                        <h1 className="msg-heading">No playlist added</h1>
                    }
                    <main className="vid-listing-container" >
                       {
                           playlistState.playlists.map( playlist => (
                               <PlaylistCard key={playlist._id} playlist = {playlist} />
                           ) )
                       }
                    </main> 
                </div>
          
            </div>
            
        </>
    )
}