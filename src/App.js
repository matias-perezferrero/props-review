import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      greeting: "Whaddup people"
    };
  }

  handleHello = () => {
    console.log(this.state.greeting);
  };

  addToCart = () => {
    console.log("howdy");
  };

  render() {
    return (
      <div className="App">
        <Dashboard function={this.handleHello} />
        <Dashboard function={this.addToCart} />
      </div>
    );
  }
}

export default App;
