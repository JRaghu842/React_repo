import { IMG_URL } from "../config.js";

let FoodCart = ({ name, category, imageId, price, defaultPrice }) => {
  return (
    <div className="w-60 shadow-xl m-3 p-3  rounded-lg bg-pink-50">
      <img
        className="w-full m-auto my-2 rounded-lg"
        src={IMG_URL + imageId}
        alt="No img found"
      />
      <h2 className="font-semibold text-lg my-2">Name: {name}</h2>
      <h2 className="text-lg my-2">Category: {category}</h2>
      <h2 className="font-semibold text-lg my-2">
        Price: ₹ {price / 100 || defaultPrice / 100}
      </h2>
    </div>
  );
};

export default FoodCart;
