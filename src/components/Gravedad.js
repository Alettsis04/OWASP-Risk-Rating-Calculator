import React from "react";

export const Gravedad = ({ impacto, probabilidad }) => {
  return (
    <div className="m-0 row justify-content-center text-center bg-light bg-gradient">
      <table className="table" style={{ verticalAlign: "middle" }}>
        <thead>
          <tr>
            <th colSpan={5}>
              <strong>
                Gravedad general del riesgo = Probabilidad x Impacto
              </strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={4}>
              <strong>Impacto</strong>
            </td>
            <td className="text-danger">Alto</td>
            <td className="bg-warning">
              {probabilidad < 3 && impacto >= 6 && impacto <= 9 && (
                <i
                  className="fa-solid fa-people-robbery"
                  style={{ color: "white" }}
                ></i>
              )}
              Medio
            </td>
            <td className="bg-danger">
              {probabilidad >= 3 &&
                probabilidad < 6 &&
                impacto >= 6 &&
                impacto <= 9 && (
                  <i
                    className="fa-solid fa-people-robbery"
                    style={{ color: "white" }}
                  ></i>
                )}
              Alto
            </td>
            <td style={{ backgroundColor: "#f80000" }}>
              {probabilidad >= 6 &&
                probabilidad <= 9 &&
                impacto >= 6 &&
                impacto <= 9 && (
                  <i
                    className="fa-solid fa-people-robbery"
                    style={{ color: "white" }}
                  ></i>
                )}
              Crítico
            </td>
          </tr>
          <tr>
            <td className="text-warning">Medio</td>
            <td className="bg-success">
              {probabilidad < 3 && impacto >= 3 && impacto < 6 && (
                <i
                  className="fa-solid fa-people-robbery"
                  style={{ color: "white" }}
                ></i>
              )}
              Bajo
            </td>
            <td className="bg-warning">
              {probabilidad >= 3 &&
                probabilidad < 6 &&
                impacto >= 3 &&
                impacto < 6 && (
                  <i
                    className="fa-solid fa-people-robbery"
                    style={{ color: "white" }}
                  ></i>
                )}
              Medio
            </td>
            <td className="bg-danger">
              {probabilidad >= 6 &&
                probabilidad <= 9 &&
                impacto >= 3 &&
                impacto < 6 && (
                  <i
                    className="fa-solid fa-people-robbery"
                    style={{ color: "white" }}
                  ></i>
                )}
              Alto
            </td>
          </tr>
          <tr>
            <td className="text-success">Bajo</td>
            <td className="bg-info">
              {probabilidad < 3 && impacto < 3 && (
                <i
                  className="fa-solid fa-people-robbery"
                  style={{ color: "white" }}
                ></i>
              )}
              Genial
            </td>
            <td className="bg-success">
              {probabilidad >= 3 && probabilidad < 6 && impacto < 3 && (
                <i
                  className="fa-solid fa-people-robbery"
                  style={{ color: "white" }}
                ></i>
              )}
              Bajo
            </td>
            <td className="bg-warning">
              {probabilidad >= 6 && probabilidad <= 9 && impacto < 3 && (
                <i
                  className="fa-solid fa-people-robbery"
                  style={{ color: "white" }}
                ></i>
              )}
              Medio
            </td>
          </tr>
          <tr>
            <td></td>
            <td className="text-success">Bajo</td>
            <td className="text-warning">Medio</td>
            <td className="text-danger">Alto</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan={4}>
              <strong>Probabilidad</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
