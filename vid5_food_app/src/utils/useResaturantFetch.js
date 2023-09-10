import { useState, useEffect } from "react";

const useRestaurantFetch = (id) => {
  const [restau, setRestau] = useState([]);

  const [dish, setDish] = useState([]);

  useEffect(() => {
    getResturantInfo();
  }, []);

  async function getResturantInfo() {
    try {
      let datas = await fetch(
        "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.3647083&lng=75.1239547&restaurantId=" +
          id
      );
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
