import { IMG_URL } from "../config";

let ResturantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img alt="resturant_img" src={IMG_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>Rating: {avgRating} Star</h3>
    </div>
  );
};

export default ResturantCard;
