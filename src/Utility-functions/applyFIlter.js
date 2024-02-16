
export const applyFilter = (filterCategory, filterDispatch) => {
    filterDispatch({ type : "FILTER_BY_CATEGORY", payload : filterCategory });
}