
export const dataStoreReducer = (state, action) => {

    switch (action.type) {
        case "INITIAL_DATA":
            return {...state, videos : action.payload};

        case "CATEGORIES_DATA":
            return {...state, categories : action.payload};

        case "LIKED_VIDEOS":
            return {...state, likedVideos : action.payload};

        case "WATCH_LATER_VIDEOS":
            return {...state, watchLater : action.payload};

        case "HISTORY_VIDEOS":
            return {...state, historyVideos : action.payload};

        default:
            state;
    }
}