import { IMG_URL } from "../config.js";

let FoodCart = ({
  name,
  category,
  imageId,
  description,
  price,
  defaultPrice,
}) => {
  return (
    <div className="text-center">
      <img className="w-96 m-auto my-2" src={IMG_URL + imageId} />
      <h2 className="font-semibold text-lg my-2">Name: {name}</h2>
      <h2 className="font-semibold text-lg my-2">Category: {category}</h2>
      <h2 className="text-lg my-2">Description: {description}</h2>
      <h2 className="font-semibold text-lg my-2">
        Price: ₹ {price / 100 || defaultPrice / 100}
      </h2>
      <hr />
    </div>
  );
};

export default FoodCart;
