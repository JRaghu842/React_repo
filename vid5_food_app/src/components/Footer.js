import { Link } from "react-router-dom";

let FooterComponent = () => {
  return (
    <>
      <div className="m-3 p-3 grid border-2 border-black grid-cols-2 text-center items-center justify-between">
        <a href="/">Instagram</a>
        <p>
          Address: 8th main road, 4th block, <br /> basavanagudi, bangalore
        </p>
        <a href="/">Facebook</a>
        <p>Licence: all rights are resvered under FBI</p>
        <a href="/">Mail</a>
      </div>
    </>
  );
};

export default FooterComponent;
