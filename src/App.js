import React, { Component, Fragment } from "react";
import "./App.css";
import Mycars from "./components/Mycars";
// import Car from "./components/Cars";
class App extends Component {

  changeTitle = (e) => {
  };

  render() {
    return (
      <div className="App">
        <Mycars />
      </div>
    );
  }
}
export default App;
