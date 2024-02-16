import axios from "axios";

export const getHistoryVideos = (token) => {
    return axios.get("/api/user/history", {
      headers: {
        authorization: token,
      },
    });
};

export const postHistoryVideos = (token, video) => {
    return axios.post(
      "/api/user/history",
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
};
  

export const deleteHistoryVideos = (token, videoId) => {
      return axios.delete(`/api/user/history/${videoId}`, {
          headers: {
          authorization: token,
          },
      });
};


export const deleteAllHistoryVideos = (token) => {
  return axios.delete(`/api/user/history/all`, {
      headers: {
      authorization: token,
      },
  });
};