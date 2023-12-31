import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import useOnline from "../utils/useOnline";

let Title = () => {
  return (
    <a href="/">
      <img
        data-testid="logo"
        className="h-24 p-2 m-2 border-2 border-black "
        alt="logo"
        src="https://lh5.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT"
      />
    </a>
  );
};

let HeaderComponent = () => {
  let [isLogedIn, setisLogedIn] = useState(false);

  let { user } = useContext(userContext);

  let isOnline = useOnline();

  let cartSlice = useSelector((store) => store.cart.items);

  console.log(cartSlice);

  return (
    <div className="flex justify-between items-center bg-blue-100 shadow-lg sm:bg-pink-100 md:bg-purple-100">
      <Title />
      <div className="nav_items">
        <ul className="flex">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About us</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact us</li>
          </Link>
          <Link to="/cart">
            <li data-testid="cart-items" className="px-2">
              Cart ({cartSlice.length})
            </li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
        </ul>
      </div>
      <div className="flex">
        <h1>{user.name}</h1>
        {isOnline ? (
          <h1 data-testid="online-status" className=" pl-2">
            🟢
          </h1>
        ) : (
          <h1 className=" pl-2"> 🔴</h1>
        )}
      </div>
      {isLogedIn ? (
        <button
          className="mr-2 border-2 px-5 py-2 border-black rounded-lg"
          onClick={() => {
            setisLogedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          className="mr-2 border-2 px-5 py-2 border-black rounded-lg"
          onClick={() => {
            setisLogedIn(true);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default HeaderComponent;
