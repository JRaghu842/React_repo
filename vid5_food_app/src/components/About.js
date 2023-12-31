import { Link, Outlet } from "react-router-dom";
import CareerClassCompo from "./CareerClass";
import React, { useEffect } from "react";
import userContext from "../utils/userContext";

// Functional Component ABOUT

// const About = () => {
// //   console.log("Parent-Constructor");
// //   useEffect(() => {
// //     // API call here
// //     console.log("Parent-useEffect");
// //   }, []);
//   return (
//     <div className="About_container">
//       <section className="abt-section-1">
//         <h1>This is About page for Foodvilla company pvt LTD.</h1>
//         <p>Hello! wellcome to the world of food, Just EAT and repEAT 😋</p>
//         {/* {console.log("Parent-render")} */}
//       </section>
//       <section>
//         <h2>Our Mission</h2>
//         <p>
//           Our mission is to provide high-quality products/services that meet the
//           needs of our customers while maintaining a commitment to
//           sustainability and social responsibility.
//         </p>
//       </section>
//       <section className="abt-section-2">
//         <h2>Our Values</h2>
//         <ul>
//           <li>Customer Satisfaction</li>
//           <li>Integrity and Transparency</li>
//           <li>Innovation</li>
//           <li>Community Engagement</li>
//         </ul>
//       </section>
//       <h2 className="abt-h2">Meet Our Team</h2>
//       <div className="abt-team-div">
//         <div className="team-member">
//           <img
//             src="https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7080194-7382724028-unkno.png"
//             alt="Roronoro ZORO - CEO"
//           />
//           <h3>Roronoro Zoro</h3>
//           <p>CEO</p>
//         </div>
//         <div className="team-member">
//           <img
//             src="https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7078671-9363995852-39fc3.jpg"
//             alt="ACE - CTO"
//           />
//           <h3> Ace D Roger</h3>
//           <p>CTO</p>
//         </div>
//         <div className="team-member">
//           <img
//             src="https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7080202-1635462455-unkno.png"
//             alt="LUFFy - CFO"
//           />
//           <h3> Monkey D Loffy</h3>
//           <p>CFO</p>
//         </div>
//       </div>
//       <div className="career">
//         <CareerClassCompo name={"Class based Props"} />
//       </div>
//       <Link to={"/about/profile"}>
//         <h3 className="abt_auth">CLICK HERE TO GET MORE ABOUT AUTHOR</h3>
//       </Link>
//       <Outlet />
//     </div>
//   );
// };

// Class based component for ABOUT section

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent-Constructor");
  }

  componentDidMount() {
    // API call here
    console.log("Parent-componentDidMount");
  }

  componentDidUpdate() {
    console.log("Parent-componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Parent-componentWillUnmount");
  }

  render() {
    console.log("Parent-render");
    return (
      <div className="About_container">
        <userContext.Consumer>
          {({ user }) => (
            <h2 className="text-xl font-bold m-4">
              Name: {user.name} and Email: {user.email}
            </h2>
          )}
        </userContext.Consumer>
        <section className="abt-section-1">
          <h1>This is About page for Foodvilla company pvt LTD.</h1>
          <p>Hello! wellcome to the world of food, Just EAT and repEAT 😋</p>
        </section>
        <section>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide high-quality products/services that meet
            the needs of our customers while maintaining a commitment to
            sustainability and social responsibility.
          </p>
        </section>
        <section className="abt-section-2">
          <h2>Our Values</h2>
          <ul>
            <li>Customer Satisfaction</li>
            <li>Integrity and Transparency</li>
            <li>Innovation</li>
            <li>Community Engagement</li>
          </ul>
        </section>
        <h2 className="abt-h2">Meet Our Team</h2>
        <div className="abt-team-div">
          <div className="team-member">
            <img
              src="https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7080194-7382724028-unkno.png"
              alt="Roronoro ZORO - CEO"
            />
            <h3>Roronoro Zoro</h3>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img
              src="https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7078671-9363995852-39fc3.jpg"
              alt="ACE - CTO"
            />
            <h3> Ace D Roger</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img
              src="https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7080202-1635462455-unkno.png"
              alt="LUFFy - CFO"
            />
            <h3> Monkey D Loffy</h3>
            <p>CFO</p>
          </div>
        </div>
        <div className="career">
          <CareerClassCompo name={"Class based Props"} />
        </div>
        <Link to={"/about/profile"}>
          <h3 className="abt_auth">CLICK HERE TO GET MORE ABOUT AUTHOR</h3>
        </Link>
        <Outlet />
      </div>
    );
  }
}

// React life cycle ORDER is given below

// Parent-Constructor
// About.js:83 Parent-render
// CareerClass.js:9 Child-Constructor
// CareerClass.js:18 Child-render
// CareerClass.js:14 Child-componentDidMount
// About.js:79 Parent-componentDidMount

export default About;
