import axios from "axios";

export const getAllPlaylist = (token) => {
    return axios.get("/api/user/playlists", {
      headers: { authorization: token },
    });
};

export const postNewPlaylist = (token, playListTitle) => {
    return axios.post(
      "/api/user/playlists",
      { playlist: { title: playListTitle } },

      {
        headers: { authorization: token },
      }
    );
};
  

export const deletePlaylist = (token, playListId) => {
    return axios.delete(`/api/user/playlists/${playListId}`, {
        headers: { authorization: token },
    });
};


export const getPlaylistVideos = (token, playListId) => {
    return axios.get(`/api/user/playlists/${playListId}`, {
      headers: { authorization: token },
    });
};


export const postVideoPlaylist = (token, playListId, playListVideo) => {
    return axios.post(`/api/user/playlists/${playListId}`,
      { video : playListVideo },

      {
        headers: { authorization: token },
      }
    );
};


export const deleteVideoPlaylist = (token, playListId, videoId) => {
    return axios.delete(`/api/user/playlists/${playListId}/${videoId}`,
      {
        headers: { authorization: token },
      }
    );
};