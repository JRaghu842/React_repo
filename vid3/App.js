import React from "react";
import ReactDOM from "react-dom/client";

// const heading1 = React.createElement(
//   "h1",
//   { id: "head1", key: "headkey1" },
//   "This is Heading One"
// );
// const heading2 = React.createElement(
//   "h1",
//   { id: "head2", key: "headkey2" },
//   "This is Heading Two"
// );

// const navbar = React.createElement("div", { id: "navbar", key: "navkey" }, [
//   heading1,
//   heading2,
// ]);

// const onesection = React.createElement(
//   "h2",
//   { id: "sectiononeID", key: "oneseckey" },
//   "This is section one......"
// );

// const container = React.createElement("div", { id: "container" }, [
//   navbar,
//   onesection,
// ]);

// const heading1 = React.createElement(
//   "h1",
//   { id: "heading1", key: "keyheading1" },
//   "Namaste Readt Heading"
// );

// const li1 = React.createElement(
//   "li",
//   { id: "li1", key: "keyli1" },
//   "About  us"
// );

// const li2 = React.createElement(
//   "li",
//   { id: "li2", key: "keyli2" },
//   "Support us"
// );

// const li3 = React.createElement(
//   "li",
//   { id: "li3", key: "keyli3" },
//   "Contact us"
// );

// const ullist = React.createElement("ul", { id: "ullist", key: "keydiv" }, [
//   li1,
//   li2,
//   li3,
// ]);

// const newheading = <h1 key="newheadingKey">New Namaste React</h1>;

// const container = React.createElement("div", { id: "container" }, [
//   heading1,
//   ullist,
//   newheading,
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);

// ///////////////////////////////////////////////////////////////////////////////

// let heading = (
//   <h1 id="JSXheading" key="JSX_Headin_Key">
//     JSX Namaste React
//   </h1>
// );

// let HeaderComponent = () => {
//   return (
//     <div>
//       {heading}
//       <h2 id="head2_1" key="keyhead2_1">
//         Namaste React head2_1
//       </h2>
//       <h2 id="head2_2" key="keyhead2_2">
//         Namaste React head2_2
//       </h2>
//     </div>
//   );
// };

// //////////////////////////////////////////////////////////////////

let Heading = () => (
  <h1 id="JSXheading" key="JSX_Headin_Key">
    JSX Namaste React
  </h1>
);

let HeaderComponent = () => {
  return (
    <div>
      {/* {Heading()} */}
      {/* OR */}
      <Heading />
      <h2 id="head2_1" key="keyhead2_1">
        Namaste React head2_1
      </h2>
      <h2 id="head2_2" key="keyhead2_2">
        Namaste React head2_2
      </h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
