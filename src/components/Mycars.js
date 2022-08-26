import React, { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
  noCopy = () => {
    alert("Annette ne copie pas");
  };
  render() {
    console.log(this);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p onCopy={this.noCopy}>
          Quand la vie ne vaut plus la peine d'être vecue Quand la vie ne vaut
          plus la peine d'être vecue
        </p>
        <Car color="red">Ford</Car>
        <Car color="black">Mercedes</Car>
        <Car color="whithe">Peougeot</Car>
      </div>
    );
  }
}
export default Mycars;
