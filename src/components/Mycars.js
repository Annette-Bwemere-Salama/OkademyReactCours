import React, { Component, Fragment } from "react";
import Car from "./Cars";




export default class Mycars extends Component {

  // console.log(this);
  state = {
    voitures: [
      { name: 'ford', color: 'red', year: 2000 },
      { name: 'Mercedes', color: 'black', year: 2010 },
      { name: 'Peugeot', color: 'green', year: 2018 },

    ],

    titre: "Mon Catalogue voitures 2"
  }

  ajouterdixans = () => {
    const changeState = this.state.voitures.map((param) => {
      return param.year -= 10;
    })
    this.setState({
      changeState
    })
  }
  render() {
    const year = new Date().getFullYear();

    return (
      <Fragment>
        <h1>{this.state.titre} </h1>

        <button onClick={this.ajouterdixans}> + 10 ans</button>

        {/* <Car color={this.state.voitures[0].color} year={year - this.state.voitures[0].year + " ans"}>{this.state.voitures[0].name}</Car>
        <Car color={this.state.voitures[1].color} year={year - this.state.voitures[1].year + " ans"}>{this.state.voitures[1].name}</Car>
        
        <Car color={this.state.voitures[2].color} year={year - this.state.voitures[2].year + " ans"}>{this.state.voitures[2].name}</Car> */}
        <table className="carsTable">
          <tr>
            <th>Marque</th>
            <th>Age</th>
            <th>Couleur</th>

          </tr>
          {
            this.state.voitures.map((voiture, index) => {
              return (
                <Fragment key={index}>
                  <Car nom={voiture.name} color={voiture.color} year={year - voiture.year + " ans"} />
                </Fragment>

              )
            })
          }
        </table>
      </Fragment>
    );
  }
}
