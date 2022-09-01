import React, { Component } from "react";
import "./App.css";
import Mycars from "./components/Mycars";
// import Car from "./components/Cars";
class App extends Component {
  state = {
    titre: "Mon Catalogue voitures",
  };

  changeTitle = (e) => {
    // console.log(e.target);

    this.setState({
      titre: "Mon nouveau titre",
    });
  };

  changeViaParam = (titre) => {
    this.setState({
      titre: titre,
    });
  };

  changeViaBind = (param) => {
    this.setState({
      titre: param
    })
  }

  changeViaInput = (e) => {
    console.log(e.target);
  };

  render() {
    return (
      <div className="App">
        <Mycars title={this.state.titre} />

        <button onClick={this.changeTitle}>Changer le nom en dure</button>
        <button onClick={() => this.changeViaParam("Titre via un parametre")}>
          Annette est dur
        </button>
        <button onClick={this.changeViaBind.bind(this, "Titre via un bind")}> via bind</button>
        <input
          type="text"
          onChange={this.changeViaInput}
          value={this.state.titre}
        />
      </div>
    );
  }
}
export default App;
