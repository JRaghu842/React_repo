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

  let [searchfilter, setSearchFilter] = useState(resturentlist);

  return (
    <>
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
            setSearchFilter(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="all_resturants">
        {searchfilter.map((restaurant) => {
          return (
            <ResturantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
