import "./VideoListing.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Aside } from "../../Components/aside/aside";
import { VideoCard } from "../../Components/videoCard/videoCard";
import { useData } from "../../context/dataStore";
import { useFilter } from "../../context/filter-context";
import { applyFilter } from "../../Utility-functions/applyFIlter";

export const VideoListing = () => {
  const { dataStoreState } = useData();
  const { filterState, filterDispatch, searchedVideo } = useFilter();

  const filteredDataByCategory =
    filterState.category === "All"
      ? dataStoreState.videos
      : dataStoreState.videos.filter(
          (item) => item.category === filterState.category.toLowerCase()
        );

  const filteredBySearchedData = filteredDataByCategory.filter((item) =>
    item.title.toLowerCase().includes(searchedVideo.toLowerCase().trim())
    ||
    item.channel.toLowerCase().includes(searchedVideo.toLowerCase().trim())
      
  );

  return (
    <>
      <Navbar />

      <div className="aside-main-flex">
        <Aside />

        <div className="filter-and-main-flex">
          <div className="filter-box">
            {dataStoreState.categories.map((category) => (
              <div
                onClick={() =>
                  applyFilter(category.categoryName, filterDispatch)
                }
                key={category._id}
                className={`filter-chip ${
                  filterState.category === category.categoryName && "chip-color"
                }`}
              > 
                {category.categoryName}
              </div>
            ))}
          </div>

          <main className="vid-listing-container">
            {
              filteredBySearchedData.length === 0
              ?
              <h1 className="show-text">No videos found</h1>
              :
              <>
                {filteredBySearchedData.map((video) => (
                <VideoCard key={video._id} video={video} />
                ))}
              </>

            }
            
          </main>
        </div>
      </div>
    </>
  );
};
