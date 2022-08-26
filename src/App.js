import React, { Component } from "react";
import "./App.css";
import Mycars from "./components/Mycars";
// import Car from "./components/Cars";
class App extends Component {
  state = {
    titre: "Mon Catalogue voitures",
  };
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <p>Annette</p>
        </header> */}

        <Mycars title={this.state.titre} />
      </div>
    );
  }
}
export default App;
