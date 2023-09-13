import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import Profile from "./components/Profile";
import ShimmerUIComponent from "./components/shimmerui";
import userContext from "./utils/userContext";
// import Instamart from "./components/Instamart";

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

let Instamart = lazy(() => import("./components/Instamart"));
let About = lazy(() => import("./components/About"));

// Never lazy load inside Component. Always lazy load before component creating starts.
{
}
// without dynamic context
// let Applayout = () => {
//   return (
//     <>
//       <HeaderComponent />
//       <Outlet />
//       <FooterComponent />
//     </>
//   );
// };

// with dynamic context this will overwrite static context data
let Applayout = () => {
  let [user, setUser] = useState({
    name: "Raghu",
    email: "Raghu@gmail.com",
  });

  return (
    <userContext.Provider value={{ user: user, setUser: setUser }}>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </userContext.Provider>
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
        element: (
          <Suspense
            fallback={
              <h1>
                I can write any piece of jsx here or I can add Shimmer component
                here also
              </h1>
            }
          >
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile name={"Raghu"} />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturant/:id",
        element: <ResturantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<ShimmerUIComponent />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
