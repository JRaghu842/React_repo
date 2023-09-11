import { useState } from "react";
import { Link } from "react-router-dom";

let Title = () => {
  return (
    <a href="/">
      <img
        className="h-24 pl-3"
        alt="logo"
        src="https://lh5.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT"
      />
    </a>
  );
};

let HeaderComponent = () => {
  let [isLogedIn, setisLogedIn] = useState(false);
  return (
    <div className="flex justify-between items-center">
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
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
        </ul>
      </div>
      {isLogedIn ? (
        <button
          className="pr-2"
          onClick={() => {
            setisLogedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          className="pr-2"
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
