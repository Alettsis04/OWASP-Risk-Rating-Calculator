import React, { useState } from "react";
import { Gravedad } from "./Gravedad";
import { Impactos } from "./Impactos";
import { Ponderacion } from "./Ponderacion";
import Probabilidad from "./Probabilidad";

const Gestion = () => {
  const [probabilidad, setProbabilidad] = useState(0.0);
  const [impacto, setImpacto] = useState(0.0);

  return (
    <div>
      <h1 className="text-danger bg-dark text-center">
        Metodología para calcular el Riesgo - OWASP
      </h1>
      <h2 className="text-danger bg-dark text-center">
        Alexis Armijos
      </h2>
      <Probabilidad setProbabilidad={setProbabilidad} />
      <Ponderacion tittle={"Probabilidad general: "} valor={probabilidad} />
      <Impactos setImpacto={setImpacto} />
      <Ponderacion tittle={"Impacto general: "} valor={impacto} />

      <Gravedad impacto={impacto} probabilidad={probabilidad} />
    </div>
  );
};

export default Gestion;
