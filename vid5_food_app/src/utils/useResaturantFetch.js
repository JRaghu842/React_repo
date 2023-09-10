import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurantFetch = (id) => {
  const [restau, setRestau] = useState([]);

  const [dish, setDish] = useState([]);

  useEffect(() => {
    getResturantInfo();
  }, []);

  async function getResturantInfo() {
    try {
      let datas = await fetch(FETCH_MENU_URL + id);
      let json = await datas.json();
      let resturantData = json?.data?.cards[0]?.card?.card?.info;
      let dishData =
        json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards;
      setDish(dishData);
      setRestau(resturantData);
    } catch (error) {
      console.log("There is a error while fetching data :" + error);
    }
  }
  return [restau, dish];
};

export default useRestaurantFetch;
