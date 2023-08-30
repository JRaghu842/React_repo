import React from "react";
import ReactDOM from "react-dom/client";

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
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
