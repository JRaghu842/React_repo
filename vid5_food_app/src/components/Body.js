import { resturentlist } from "../config";
import ResturantCard from "./ResturantCard";

import { useState } from "react";

function filterData(searchText, resturentlist) {
  let filteredData = resturentlist.filter((rest) =>
    rest.info.name.includes(searchText)
  );

  return filteredData;
}

let BodyComponent = () => {
  let [searchText, setSearchText] = useState("");

  //   let [searchUpdate, setSearchUpdate] = useState("False");

  let [searchfilterarray, setSearcharrayFilter] = useState(resturentlist);

  return (
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
            let data = filterData(searchText, resturentlist);

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
            let data = filterData(searchText, resturentlist);

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
            let data = filterData(searchText, resturentlist);

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
            <ResturantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
