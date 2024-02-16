import { createContext, useContext, useReducer, useState } from "react";
import { filterReducer } from "../Reducer/filterReducer";
import toast, { Toaster } from 'react-hot-toast';

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);
const initialVal = { category : "All" };


const FilterProvider = ({ children }) => {

    const [filterState, filterDispatch] = useReducer(filterReducer, initialVal);
    const [searchedVideo, setSearchedVideo] = useState("");

    return (
        <FilterContext.Provider value={{ filterState, filterDispatch, searchedVideo, setSearchedVideo }}>
            { children }
            <Toaster position="top-center" reverseOrder={true} />
        </FilterContext.Provider>
    )
}

export { FilterProvider, useFilter };