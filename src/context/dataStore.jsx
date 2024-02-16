import axios from "axios";
import {
    createContext,
    useContext,
    useReducer,
    useEffect,
  } from "react";
import { dataStoreReducer } from "../Reducer/dataStoreReducer";
import toast from 'react-hot-toast';


const DataStoreContext = createContext();

const initialVal = {
    videos : [],
    categories : [],
    likedVideos : [],
    watchLater : [],
    historyVideos : []
}

const toastProp = {
  duration: 2000,
  style: {
  fontSize: "1.2rem",
  borderRadius: '10px',
  background: '#168baf',
  color : '#fff'
  },
}


const DataStoreProvider = ({children}) => {

    const [dataStoreState, dataStoreDispatch] = useReducer(dataStoreReducer, initialVal);

    useEffect(
        () => {
          (async () => {
            try {
              const res = await axios.get("/api/videos");
              if(res.status === 200) {
                dataStoreDispatch({type : "INITIAL_DATA", payload : res.data.videos});
                toast.success('Welcome to My Video Player App',toastProp);
              }
            } catch (error) {
               alert(error);
            }

            try {
                const res = await axios.get("/api/categories");
                if(res.status === 200) {
                  dataStoreDispatch({type : "CATEGORIES_DATA", payload : res.data.categories});
                }
              } catch (error) {
                 alert(error);
              }

          })();
        }, []);


    return (
        <DataStoreContext.Provider value={{ dataStoreState, dataStoreDispatch, toastProp }}>
            {children}
        </DataStoreContext.Provider>
    )
}

const useData = () => useContext(DataStoreContext);

export { DataStoreProvider, useData };