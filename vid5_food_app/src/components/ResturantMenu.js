import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../config";
import ShimmerUIComponent from "./shimmerui";
import useRestaurantFetch from "../utils/useResaturantFetch";

const ResturantMenu = () => {
  const { id } = useParams();

  const [restau, dish] = useRestaurantFetch(id);

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
