import React from "react";

const Car = ({ children, color }) => {
  //   const colorInfo = color ? <p>Couleur: {color}</p> : <p>Couleur: Néant'</p>;
  return (
    <div
      style={{
        backgroundColor: "pink",
        width: "400px",
        padding: "10px",
        margin: "5px auto",
      }}
    >
      <p>Marque: {children}</p>
      <p>Couleur:{color} </p>
    </div>
  );
};

export default Car;
