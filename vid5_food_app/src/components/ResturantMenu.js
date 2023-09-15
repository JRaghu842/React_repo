import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../config";
import ShimmerUIComponent from "./shimmerui";
import useRestaurantFetch from "../utils/useResaturantFetch";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ResturantMenu = () => {
  const { id } = useParams();

  const [restau, dish] = useRestaurantFetch(id);

  let dispatch = useDispatch();

  let handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return restau.length === 0 ? (
    <ShimmerUIComponent />
  ) : (
    <div className="p-3">
      <div>
        <h3 className="font-semibold text-lg mt-3 text-center">
          Resturant id: {id}
        </h3>
        <h1 className="font-bold text-xl mb-2 text-center">
          Name: {restau.name}
        </h1>
        <img
          className="border w-1/4 my-4 m-auto"
          alt="individual_restaurant_img"
          src={IMG_URL + restau.cloudinaryImageId}
        />
        <h3 className="font-semibold text-lg text-center">
          Resturant Address : {restau.areaName}, {restau.locality},{" "}
          {restau.city}
        </h3>
        <h3 className="font-semibold text-lg text-center">
          Average Rating : {restau.avgRating}
        </h3>
      </div>
      <div>
        <h2 className="font-bold text-lg my-4">Dishes Available</h2>
        <hr />
        <div>
          {dish.map((item) => (
            <div key={item.card.info.id}>
              <img
                className="py-3 m-3 w-60"
                src={IMG_URL + item.card.info.imageId}
              />
              <p>Dish Name: {item.card.info.name}</p>
              <p>Description: {item.card.info.description}</p>
              <p>Category: {item.card.info.category}</p>
              <p>
                Price: ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </p>
              <button
                className="py-3 px-5 m-3 bg-green-200"
                onClick={() => handleAddItem(item.card.info)}
              >
                ADD ITEM
              </button>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResturantMenu;
