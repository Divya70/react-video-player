import { createContext, useContext, useReducer, useState } from "react";
import { playlistReducer } from "../Reducer/playlistReducer";

const PlaylistContext = createContext();
const usePlayList = () => useContext(PlaylistContext);

const initialVal = {
  playlists: [],
};

const PlayListProvider = ({ children }) => {
  const [playlistState, playlistDispatch] = useReducer(
    playlistReducer,
    initialVal
  );
  const [playListTitle, setPlayListTitle] = useState({title : ""});

  return (
    <PlaylistContext.Provider
      value={{
        playlistState,
        playlistDispatch,
        playListTitle,
        setPlayListTitle,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export { PlayListProvider, usePlayList };
