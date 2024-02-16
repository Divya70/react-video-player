export const playlistReducer = (state, action) => {
  switch (action.type) {
    case "PLAYLISTS":
      return { ...state, playlists: action.payload };

    case "PLAYLISTS_VIDEO_UPDATE":
      return {
        ...state,
        playlists: state.playlists.map((item) =>
          item._id === action.payload._id
            ? { ...item, videos: action.payload.videos }
            : item
        ),
      };

    default:
      state;
  }
};
