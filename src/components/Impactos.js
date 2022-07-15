import React, { useState } from "react";
import { Ponderacion } from "./Ponderacion";
import TablaBase from "./TablaBase";

const temas = {
  tecnico: {
    nombre: "tecnico",
    uno: {
      nombre: "Pérdida de Confidencialidad",
      info: "¿Cuántos datos podrían divulgarse y qué tan confidenciales son?",
      opciones: [
        "0",
        "1",
        "2 - Mínima (Data no crítica)",
        "3",
        "4 - Mínima (Data crítica)",
        "5",
        "6 - Considerable(Data no crítica)",
        "7 - Considerable (Data crítica)",
        "8",
        "9 - Corrupción de datos total",
      ],
    },
    dos: {
      nombre: "Pérdida de Integridad",
      info: "¿Cuántos datos podrían corromperse y qué tan dañados están?",
      opciones: [
        "0",
        "1 - Mínima (Data no crítica)",
        "2",
        "3 - Mínima (Data crítica)",
        "4",
        "5 - Considerable(Data no crítica)",
        "6",
        "7 - Considerable (Data crítica)",
        "8",
        "9 - Corrupción de datos total",
      ],
    },
    tres: {
      nombre: "Pérdida de Disponibilidad",
      info: "¿Cuánto servicio podría perderse y cuán vital es?",
      opciones: [
        "0",
        "1 - Mínima (Servicios no críticos)",
        "2",
        "3 - Mínima (Servicios críticos)",
        "4",
        "5 - Considerable (Servicios no críticos)",
        "6",
        "7 - Considerable (Servicios críticos)",
        "8",
        "9 - Pérdida total de los servicios",
      ],
    },
    cuatro: {
      nombre: "Pérdida de Auditabilidad",
      info: "¿Son las acciones de los agentes amenazantes rastreables a un individuo?",
      opciones: [
        "0",
        "1 - Totalmente auditable",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7 - Posiblemente auditable",
        "8",
        "9 - No auditable",
      ],
    },
  },
  negocio: {
    nombre: "negocio",
    uno: {
      nombre: "Daño económico",
      info: "¿Cuánto daño financiero resultará de un exploit?",
      opciones: [
        "0",
        "1 - Menor que el costo de la solución total",
        "2",
        "3 - Efecto menor en el costo anual",
        "4",
        "5",
        "6",
        "7 - Efecto significante en el costo anual",
        "8",
        "9 - Efecto devastador (bancarrota)",
      ],
    },
    dos: {
      nombre: "Daño en la imagen",
      info: "¿Un exploit resultaría en un daño a la reputación que perjudicaría al negocio?",
      opciones: [
        "0",
        "1 - Daño mínimo",
        "2",
        "3",
        "4 - Perdida de grandes cuentas",
        "5 - Pérdida de credibilidad a gran escala",
        "6",
        "7",
        "8",
        "9 - Daño total de imagen",
      ],
    },
    tres: {
      nombre: "No cumplimiento",
      info: "¿Cuánta exposición introduce el incumplimiento?",
      opciones: [
        "0",
        "1",
        "2 - Mínimo",
        "3",
        "4",
        "5 - Medio",
        "6",
        "7 - Alto",
        "8",
        "9",
      ],
    },
    cuatro: {
      nombre: "Violación a la privacidad",
      info: "¿Cuánta información de identificación personal podría divulgarse?",
      opciones: [
        "0",
        "1",
        "2",
        "3 - Una persona",
        "4",
        "5 - Cientos de personas",
        "6",
        "7 - Miles de personas",
        "8",
        "9 - Millones de personas",
      ],
    },
  },
};

export const Impactos = ({ setImpacto }) => {
  const [valTecnico, setValTecnico] = useState([0, 0, 0, 0]);
  const [ponTecnico, setPonTecnico] = useState(0.0);
  const [valNegocio, setValNegocio] = useState([0, 0, 0, 0]);
  const [ponNegocio, setPonNegocio] = useState(0.0);

  const updateVal = (tema, posicion, valor) => {
    let newData;
    switch (tema) {
      case "tecnico":
        newData = valTecnico;
        newData[posicion] = valor;
        setValTecnico(newData);
        updateTecnico();
        break;
      case "negocio":
        newData = valNegocio;
        newData[posicion] = valor;
        setValNegocio(newData);
        updateNegocio();
        break;
      default:
        break;
    }
  };

  const updateTecnico = () => {
    let valTec =
      parseInt(valTecnico[0]) +
      parseInt(valTecnico[1]) +
      parseInt(valTecnico[2]) +
      parseInt(valTecnico[3]);

    valTec = valTec / 4;
    setPonTecnico(valTec);
    updateImpacto();
  };

  const updateNegocio = () => {
    let valNeg =
      parseInt(valNegocio[0]) +
      parseInt(valNegocio[1]) +
      parseInt(valNegocio[2]) +
      parseInt(valNegocio[3]);

    valNeg = valNeg / 4;
    setPonNegocio(valNeg);
    updateImpacto();
  };

  const updateImpacto = () => {
    let valImpact =
      parseInt(valTecnico[0]) +
      parseInt(valTecnico[1]) +
      parseInt(valTecnico[2]) +
      parseInt(valTecnico[3]) +
      parseInt(valNegocio[0]) +
      parseInt(valNegocio[1]) +
      parseInt(valNegocio[2]) +
      parseInt(valNegocio[3]);

    valImpact = valImpact / 8;
    setImpacto(valImpact);
  };

  return (
    <div>
      <h3 className="text-center text-warning bg-light">Impactos</h3>
      <div>
        <TablaBase
          title={"Factores de Impacto técnico"}
          temas={temas.tecnico}
          updateVal={updateVal}
        />
        <Ponderacion tittle={"Impacto técnico general: "} valor={ponTecnico} />
      </div>
      <div className="justify-content-center">
        <TablaBase
          title={"Factores de Impacto del negocio"}
          temas={temas.negocio}
          updateVal={updateVal}
        />
        <Ponderacion
          tittle={"Impacto del negocio general: "}
          valor={ponNegocio}
        />
      </div>
    </div>
  );
};
