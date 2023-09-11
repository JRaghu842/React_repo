import { IMG_URL } from "../config";

let ResturantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="w-48 shadow-xl m-3 p-3 rounded-lg">
      <img
        className="w-full rounded-lg"
        alt="resturant_img"
        src={IMG_URL + cloudinaryImageId}
      />
      <h2 className="font-semibold text-xl ">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3 className="font-semibold text-lg">Rating: {avgRating} Star</h3>
    </div>
  );
};

export default ResturantCard;
