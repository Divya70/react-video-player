import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { VideoListing } from "./Pages/Video-Listing/VideoListing";
import { VideoPlayer } from "./Pages/Video-player/videoPlayer";
import { Login } from "./Pages/Authentication/Login";
import { Signup } from "./Pages/Authentication/Signup";
import  Mockman  from "mockman-js";
import { ProfilePage } from "./Pages/Profile/profile";
import { ProfileInfo } from "./Components/Profile/profile-info";
import { Settings } from "./Components/Profile/settings";
import { LikedPage } from "./Pages/LikedVideos/liked";
import { RequiresAuth } from "./Utility-functions/RequiresAuth";
import { WatchLater } from "./Pages/watch-later/watchLater";
import { HistoryPage } from "./Pages/History/History";
import { PlaylistPage } from "./Pages/Playlist/playlist";
import { PlaylistVideos } from "./Pages/playlistVideos/playlistVideos";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<VideoListing />} />
        <Route path="/video/:videoId" element={<VideoPlayer />} />
        <Route path="/playlist/:playlistId" element={<PlaylistVideos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      
        <Route path="/like" 
          element={
            <RequiresAuth>
              <LikedPage />
            </RequiresAuth>
          } 
        />

        <Route path="/watchlater" 
          element={
            <RequiresAuth>
              <WatchLater />
            </RequiresAuth>
          } 
        />


        <Route path="/history" 
          element={
            <RequiresAuth>
              <HistoryPage />
            </RequiresAuth>
          } 
        />

        <Route path="/playlist" 
          element={
            <RequiresAuth>
              <PlaylistPage />
            </RequiresAuth>
          } 
        />

        <Route path="/profile/" element={<ProfilePage />} >
          <Route path="" element={<ProfileInfo />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
