import React from "react";
import Selectores from "./Selectores";

const TablaBase = ({ title, temas, updateVal }) => {

  const change = (e) => {
    updateVal(temas.nombre, e.target.id, e.target.value);
  };

  return (
    <div className="col-auto text-center">
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            <th>{temas.uno.nombre}</th>
            <th>{temas.dos.nombre}</th>
            <th>{temas.tres.nombre}</th>
            <th>{temas.cuatro.nombre}</th>
          </tr>
        </thead>
        <tbody>
          <tr onChange={change}>
            <Selectores
              id={0}
              name={temas.uno.nombre}
              opciones={temas.uno.opciones}
              info={temas.uno.info}
            />
            <Selectores
              id={1}
              name={temas.dos.nombre}
              opciones={temas.dos.opciones}
              info={temas.uno.info}
            />
            <Selectores
              id={2}
              name={temas.tres.nombre}
              opciones={temas.tres.opciones}
              info={temas.uno.info}
            />
            <Selectores
              id={3}
              name={temas.cuatro.nombre}
              opciones={temas.cuatro.opciones}
              info={temas.uno.info}
            />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablaBase;
