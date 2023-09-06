import ResturantCard from "./ResturantCard";
import ShimmerUIComponent from "./shimmerui";
import FilterAlert from "./FilterAlert";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function filterData(searchText, resturentlist) {
  let filteredData = resturentlist.filter((rest) =>
    rest?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filteredData;
}

let BodyComponent = () => {
  let [searchText, setSearchText] = useState("");
  let [searchfilterarray, setSearcharrayFilter] = useState([]);
  let [apiData, setapiData] = useState([]);

  // Empty depencendy array [] : only once useEffect is called after initial render
  //  depencendy array with states [searchText, searchFilter] : one time at initialy + Every time any change in state

  useEffect(() => {
    getResturants();
  }, []);

  async function getResturants() {
    try {
      let datas = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627"
      );
      let jsons = await datas.json();
      let resturants =
        jsons?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log(datas);
      setSearcharrayFilter(resturants);
      setapiData(resturants);
    } catch (error) {
      console.log("Error in fetching data :" + error);
    }
  }

  //   let [searchUpdate, setSearchUpdate] = useState("False");

  return apiData.length === 0 ? (
    <ShimmerUIComponent />
  ) : searchfilterarray.length === 0 ? (
    <FilterAlert />
  ) : (
    <>
      {/* ----------------------------- search functionality ------------------------- */}

      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        {/* <h1>{searchUpdate}</h1> */}
        <button
          className="search-btn"
          onClick={() => {
            //if (searchUpdate === "False") {

            //   setSearchUpdate("True");
            // } else {
            //   setSearchUpdate("False");
            // }

            // step 1. filter the data
            let data = filterData(searchText, apiData);

            // step 2. update the state searchFilter on click
            setSearcharrayFilter(data);
          }}
        >
          Search
        </button>
      </div>

      {/* ---------------------------- sort functionality --------------------------------------- */}

      <div className="sort-container">
        <button
          className="inc_btn"
          onClick={() => {
            let data = filterData(searchText, apiData);

            setSearcharrayFilter(
              data.sort((a, b) => a.info.name.localeCompare(b.info.name))
            );
          }}
        >
          Sort Inc Order
        </button>
        <button
          className="desc_btn"
          onClick={() => {
            let data = filterData(searchText, apiData);

            setSearcharrayFilter(
              data.sort((a, b) => b.info.name.localeCompare(a.info.name))
            );
          }}
        >
          Sort Desc Order
        </button>
      </div>

      <div className="all_resturants">
        {searchfilterarray.map((restaurant) => {
          return (
            <Link
              to={"/resturant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <ResturantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
