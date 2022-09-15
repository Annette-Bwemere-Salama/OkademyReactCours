import React from "react";
const Car = ({ color, nom, year }) => {

    const colorInfo = color ? (<p>Couleur: {color}</p>) : (<p>Couleur: Néant</p>)


    if (nom) {
        return (
            <div style={{ background: 'pink', width: '400px', padding: '10px', margin: '10px' }}>
                <p>Marque: {nom}</p>
                <p>Age: {year}</p>
                {colorInfo}

            </div>
        )
    } else {
        return null;
    }
}

export default Car;