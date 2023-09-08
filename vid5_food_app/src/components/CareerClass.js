import React from "react";

class CareerClassCompo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child-Constructor");
  }

  componentDidMount() {
    // API call here
    console.log("Child-componentDidMount");
  }

  render() {
    console.log("Child-render");
    return (
      <div>
        <h1>This is the first Class based component created </h1>
        <h2>PropsClass : {this.props.name} </h2>
        <h2>Count : {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count btn Class state
        </button>
      </div>
    );
  }
}

export default CareerClassCompo;
