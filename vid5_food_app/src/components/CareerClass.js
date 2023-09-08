import React from "react";

class CareerClassCompo extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the first Class based component created </h1>
        <h2>Props: {this.props.name} </h2>
      </div>
    );
  }
}

export default CareerClassCompo;
