import { useState } from "react";

let Title = () => {
  return (
    <a href="/">
      <img
        className="logo_img"
        alt="logo"
        src="https://yt3.googleusercontent.com/HipIhegQlrlSzBGZSUtOPYyA2VGbo2qyXmIdYNkodW-HVF01t5CX-MrXoDKnf9R5UErOmCbnbA=s900-c-k-c0x00ffffff-no-rj"
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
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
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
