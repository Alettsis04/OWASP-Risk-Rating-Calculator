import React from "react";

export const Ponderacion = ({ tittle, valor }) => {
  return (
    <div className="text-center">
      <p className="bg-light bg-gradient">
        <strong>{tittle}</strong>
        {valor}
      </p>
      {valor < 3 && <p className="bg-success">Bajo</p>}
      {valor >= 3 && valor < 6 && <p className="bg-warning">Medio</p>}
      {valor >= 6 && valor <= 9 && <p className="bg-danger">Alto</p>}
    </div>
  );
};
