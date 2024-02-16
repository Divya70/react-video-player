import axios from "axios";

export const getLikeVideo = (token) => {
    return axios.get("/api/user/likes", {
      headers: {
        authorization: token,
      },
    });
};

export const postLikeVideo = (token, video) => {
    return axios.post(
      "/api/user/likes",
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
};
  

export const deleteLikeVideo = (token, videoId) => {
    return axios.delete(`/api/user/likes/${videoId}`, {
        headers: {
        authorization: token,
        },
    });
};

