import axios from "axios";

export const getWatchLaterVideos = (token) => {
  return axios.get("/api/user/watchlater", {
    headers: {
      authorization: token,
    },
  });
};

export const postWatchLaterVideos = (token, video) => {
  return axios.post(
    "/api/user/watchlater",
    { video },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const deleteWatchLaterVideos = (token, videoId) => {
  return axios.delete(`/api/user/watchlater/${videoId}`, {
    headers: {
      authorization: token,
    },
  });
};