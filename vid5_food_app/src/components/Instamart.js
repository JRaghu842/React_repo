import React, { useState } from "react";

// Short cut for toggle
// let Section = ({ title, description, isVisible, setIsVisible }) => {
//   return (
//     <div className="border-2 border-black rounded-lg p-2 m-2">
//       <h1 className="font-bold text-xl">{title}</h1>
//       <button
//         className="border-2 border-black p-2 rounded-lg"
//         onClick={() => {
//           setIsVisible(!isVisible);
//         }}
//       >
//         {isVisible ? "Hide" : "Show"}
//       </button>

//       {isVisible && <p>{description}</p>}
//     </div>
//   );
// };

let Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border-2 border-black rounded-lg p-2 m-2">
      <h1 className="font-bold text-xl">{title}</h1>
      {isVisible === true ? (
        <button
          className="border-2 border-black p-2 rounded-lg"
          onClick={() => {
            setIsVisible();
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="border-2 border-black p-2 rounded-lg"
          onClick={() => {
            setIsVisible();
          }}
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

let Instamart = () => {
  let [visibleSection, setVisibleSection] = useState("about");
  return (
    <div>
      <Section
        title={"About Instamart"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,"
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => {
          setVisibleSection((prevState) => {
            return prevState === "about" ? null : "about";
          });
        }}
      />

      <Section
        title={"Instamart Mission"}
        description={
          "Our mission is to provide high-quality products/services that meet the needs of our customers while maintaining a commitment tosustainability and social responsibility."
        }
        isVisible={visibleSection === "mission"}
        setIsVisible={() => {
          setVisibleSection((prevState) => {
            return prevState === "mission" ? null : "mission";
          });
        }}
      />

      <Section
        title={"Contact Instamart"}
        description={
          "a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC."
        }
        isVisible={visibleSection === "contact"}
        setIsVisible={() => {
          setVisibleSection((prevState) => {
            return prevState === "contact" ? null : "contact";
          });
        }}
      />
    </div>
  );
};

export default Instamart;
