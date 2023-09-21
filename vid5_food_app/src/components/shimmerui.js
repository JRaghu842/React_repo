let divStyling = {
  width: "192px",
  height: "340px",
  backgroundColor: "rgb(224, 224, 224)",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

let ShimmerUIComponent = () => {
  return (
    <>
      {/* <h1>Shimmer UI loading here.........</h1> */}
      <div data-testid="shimmer">
        <div className="w-72 h-12 bg-slate-200  m-3 rounded-lg"></div>
        <div className="w-72 h-12 bg-slate-200  m-3 mb-5 rounded-lg"></div>
        <div className="w-72 h-12 bg-slate-200  m-3 mb-5 rounded-lg"></div>
        <div className="flex flex-row flex-wrap ml-1">
          <div style={divStyling}></div>
          <div style={divStyling}></div>
          <div style={divStyling}></div>
          <div style={divStyling}></div>
          <div style={divStyling}></div>
          <div style={divStyling}></div>
          <div style={divStyling}></div>
          <div style={divStyling}></div>
          <div style={divStyling}></div>
          <div style={divStyling}></div>
          <div style={divStyling}></div>
          <div style={divStyling}></div>
        </div>
      </div>
    </>
  );
};

export default ShimmerUIComponent;
