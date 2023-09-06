import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

// let ResturantCard = (props) => {
//   console.log(props);
//   return (
//     <div className="card">
//       <img
//         alt="resturant_img"
//         src={
//           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
//           props.restaurant.info.cloudinaryImageId
//         }
//       />
//       <h2>{props.restaurant.info.name}</h2>
//       <h3>{props.restaurant.info.cuisines.join(", ")}</h3>
//       <h3>{props.restaurant.info.avgRating} Stars</h3>
//     </div>
//   );
// };

//instead using of props as parameter and using props.resturant, we can use destructured resturent as shown below

// let ResturantCard = ({ restaurant }) => {
//   return (
//     <div className="card">
//       <img
//         alt="resturant_img"
//         src={
//           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
//           restaurant.info.cloudinaryImageId
//         }
//       />
//       <h2>{restaurant.info.name}</h2>
//       <h3>{restaurant.info.cuisines.join(", ")}</h3>
//       <h3>{restaurant.info.avgRating} Stars</h3>
//     </div>
//   );
// };

// we can further destructure it like this

// let ResturantCard = ({ restaurant }) => {
//   let { cloudinaryImageId, name, cuisines, avgRating } = restaurant.info;
//   return (
//     <div className="card">
//       <img
//         alt="resturant_img"
//         src={
//           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
//           cloudinaryImageId
//         }
//       />
//       <h2>{name}</h2>
//       <h3>{cuisines.join(", ")}</h3>
//       <h3>{avgRating} Stars</h3>
//     </div>
//   );
// };

// we can do one more thing

// let ResturantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
//   return (
//     <div className="card">
//       <img
//         alt="resturant_img"
//         src={
//           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
//           cloudinaryImageId
//         }
//       />
//       <h2>{name}</h2>
//       <h3>{cuisines.join(", ")}</h3>
//       <h3>{avgRating} Stars</h3>
//     </div>
//   );
// };

// let BodyComponent = () => {
//   return (
//     <div className="all_resturants">
//       <ResturantCard {...resturentlist[0].info} />
//       <ResturantCard {...resturentlist[1].info} />
//       <ResturantCard {...resturentlist[2].info} />
//       <ResturantCard {...resturentlist[3].info} />
//       <ResturantCard {...resturentlist[4].info} />
//       <ResturantCard {...resturentlist[5].info} />
//       <ResturantCard {...resturentlist[6].info} />
//       <ResturantCard {...resturentlist[7].info} />
//     </div>
//   );
// };

// Now Finally we can do this.................................

// this code related to body including resturentlist, resturentCard and BodyComponent is a kind of "config driven ui" code meaning, if we just add new resturent in resturent list it will automaticlly updates the content page.

let Applayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
