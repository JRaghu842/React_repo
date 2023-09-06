import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../config";
import ShimmerUIComponent from "./shimmerui";

const ResturantMenu = () => {
  const { id } = useParams();

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

  return restau.length === 0 ? (
    <ShimmerUIComponent />
  ) : (
    <div>
      <div>
        <h3>Resturant id: {id}</h3>
        <h1>Name:{restau.name}</h1>
        <img
          alt="individual_restaurant_img"
          src={IMG_URL + restau.cloudinaryImageId}
        />
        <h3>
          Resturant Address : {restau.areaName}, {restau.locality},{" "}
          {restau.city}
        </h3>
        <h3>Average Rating : {restau.avgRating}</h3>
      </div>
      <div>
        <h2>Dishes Available</h2>
        <div>
          {dish.map((item) => (
            <div key={item.card.info.id}>
              <p>Dish Name: {item.card.info.name}</p>
              <p>Description: {item.card.info.description}</p>
              <p>Category: {item.card.info.category}</p>
              <p>Price: ₹ {item.card.info.price / 100}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResturantMenu;
