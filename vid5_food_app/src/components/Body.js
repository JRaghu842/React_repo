import ResturantCard from "./ResturantCard";
import ShimmerUIComponent from "./shimmerui";
import FilterAlert from "./FilterAlert";
import { filterData } from "../utils/helper";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext.js";

let BodyComponent = () => {
  let [searchText, setSearchText] = useState("");
  let [searchfilterarray, setSearcharrayFilter] = useState([]);
  let [apiData, setapiData] = useState([]);

  let { user, setUser } = useContext(userContext);

  // Empty depencendy array [] : only once useEffect is called after initial render
  //  depencendy array with states [searchText, searchFilter] : one time at initialy + Every time any change in state

  //"https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627"
  //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"

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
        jsons?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log(datas);
      setSearcharrayFilter(resturants);
      setapiData(resturants);
    } catch (error) {
      console.log("Error in fetching data :" + error);
    }
  }

  //   let [searchUpdate, setSearchUpdate] = useState("False");

  let internetStatus = useOnline();

  if (internetStatus === false) {
    return <h1>🔴 You are offline! Please check your internet connection </h1>;
  }

  if (!apiData) {
    return null;
  }

  return apiData.length === 0 ? (
    <ShimmerUIComponent />
  ) : searchfilterarray.length === 0 ? (
    <FilterAlert />
  ) : (
    <>
      {/* ----------------------------- search functionality ------------------------------------ */}
      <div className="my-3">
        <input
          className="ml-3 border-2 px-3 py-2 border-gray-300 rounded-lg"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        {/* <h1>{searchUpdate}</h1> */}
        <button
          data-testid="search-btn"
          className="ml-3 border-2 px-5 py-2 border-black rounded-lg"
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

      <div className="my-3">
        <button
          className="ml-3 border-2 px-5 py-2 border-black rounded-lg"
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
          className="ml-3 border-2 px-5 py-2 border-black rounded-lg"
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

      {/* -----------------------------Input for name and email change--------------------------- */}
      <div>
        <input
          className="ml-3 border-2 px-3 py-2 border-gray-300 rounded-lg"
          value={user.name}
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
        <input
          className="ml-3 border-2 px-3 py-2 border-gray-300 rounded-lg"
          value={user.email}
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
        />
      </div>
      {/* --------------------------------Resturant cards here----------------------------------- */}

      <div className="flex flex-wrap" data-testid="res-list">
        {searchfilterarray.map((restaurant) => {
          return (
            <Link
              to={"/resturant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <ResturantCard {...restaurant.info} />

              {/* <ResturantCard
                cloudinaryImageId={restaurant.info.cloudinaryImageId}
                name={restaurant.info.name}
                cuisines={restaurant.info.cuisines}
                avgRating={restaurant.info.avgRating}
              /> */}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
