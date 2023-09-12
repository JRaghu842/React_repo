// import { Link, Outlet } from "react-router-dom";
// import CareerClassCompo from "./CareerClass";
// import React, { useEffect } from "react";

import React, { useState } from "react";

let Section = ({ title, description }) => {
  let [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border-2 border-black rounded-lg p-2 m-2">
      <h1 className="font-bold text-xl">{title}</h1>
      {isVisible === true ? (
        <button
          className="border-2 border-black p-2 rounded-lg"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="border-2 border-black p-2 rounded-lg"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

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

// class About extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("Parent-Constructor");
//   }

//   componentDidMount() {
//     // API call here
//     console.log("Parent-componentDidMount");
//   }

//   componentDidUpdate() {
//     console.log("Parent-componentDidUpdate");
//   }

//   componentWillUnmount() {
//     console.log("Parent-componentWillUnmount");
//   }

//   render() {
//     console.log("Parent-render");
//     return (
//       <div className="About_container">
//         <section className="abt-section-1">
//           <h1>This is About page for Foodvilla company pvt LTD.</h1>
//           <p>Hello! wellcome to the world of food, Just EAT and repEAT 😋</p>
//         </section>
//         <section>
//           <h2>Our Mission</h2>
//           <p>
//             Our mission is to provide high-quality products/services that meet
//             the needs of our customers while maintaining a commitment to
//             sustainability and social responsibility.
//           </p>
//         </section>
//         <section className="abt-section-2">
//           <h2>Our Values</h2>
//           <ul>
//             <li>Customer Satisfaction</li>
//             <li>Integrity and Transparency</li>
//             <li>Innovation</li>
//             <li>Community Engagement</li>
//           </ul>
//         </section>
//         <h2 className="abt-h2">Meet Our Team</h2>
//         <div className="abt-team-div">
//           <div className="team-member">
//             <img
//               src="https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7080194-7382724028-unkno.png"
//               alt="Roronoro ZORO - CEO"
//             />
//             <h3>Roronoro Zoro</h3>
//             <p>CEO</p>
//           </div>
//           <div className="team-member">
//             <img
//               src="https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7078671-9363995852-39fc3.jpg"
//               alt="ACE - CTO"
//             />
//             <h3> Ace D Roger</h3>
//             <p>CTO</p>
//           </div>
//           <div className="team-member">
//             <img
//               src="https://comicvine.gamespot.com/a/uploads/square_small/11117/111178336/7080202-1635462455-unkno.png"
//               alt="LUFFy - CFO"
//             />
//             <h3> Monkey D Loffy</h3>
//             <p>CFO</p>
//           </div>
//         </div>
//         <div className="career">
//           <CareerClassCompo name={"Class based Props"} />
//         </div>
//         <Link to={"/about/profile"}>
//           <h3 className="abt_auth">CLICK HERE TO GET MORE ABOUT AUTHOR</h3>
//         </Link>
//         <Outlet />
//       </div>
//     );
//   }
// }

let About = () => {
  return (
    <div>
      <Section
        title={"About us"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,"
        }
      />

      <Section
        title={"Our Mission"}
        description={
          "Our mission is to provide high-quality products/services that meet the needs of our customers while maintaining a commitment tosustainability and social responsibility."
        }
      />

      <Section
        title={"Contact us"}
        description={
          "a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC."
        }
      />

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
    </div>
  );
};

// React life cycle ORDER is given below

// Parent-Constructor
// About.js:83 Parent-render
// CareerClass.js:9 Child-Constructor
// CareerClass.js:18 Child-render
// CareerClass.js:14 Child-componentDidMount
// About.js:79 Parent-componentDidMount

export default About;
