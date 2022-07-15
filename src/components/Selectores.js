import React from "react";

const Selectores = ({ opciones, info, change, name, id }) => {
  return (
    <td>
      <select className="form-select" title={info} name={name} id={id}>
        {opciones.map((el) => (
          <option key={el} value={el.substring(0, 1)} onChange={change}>
            {el}
          </option>
        ))}
      </select>
    </td>
  );
};

export default Selectores;
