import React, { Fragment } from "react";
const Car = ({ color, nom, year }) => {

    const colorInfo = color ? (`Couleur: ${color}`) : ('Couleur: Néant')


    if (nom) {
        return (
            <Fragment style={{ background: 'pink', width: '400px', padding: '10px', margin: '10px' }}>
                <tr>
                    <td>Marque: {nom}</td>
                    <td>Age: {year}</td>
                    <td>{colorInfo}</td>
                </tr>
            </Fragment>
        )
    } else {
        return null;
    }
}

export default Car;