import { useState } from "react";
import { Link } from "react-router-dom";

let Title = () => {
  return (
    <a href="/">
      <img
        className="logo_img"
        alt="logo"
        src="https://lh5.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT"
      />
    </a>
  );
};

let HeaderComponent = () => {
  let [isLogedIn, setisLogedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav_items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About us</li>
          </Link>
          <Link to="/contact">
            <li>Contact us</li>
          </Link>
          {/* <Link to="/cart">
            <li>Cart</li>
          </Link> */}
        </ul>
      </div>
      {isLogedIn ? (
        <button
          onClick={() => {
            setisLogedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
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
