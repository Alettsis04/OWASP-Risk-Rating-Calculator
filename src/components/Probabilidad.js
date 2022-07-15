import { useState } from "react";
import TablaBase from "./TablaBase";

const temas = {
  agentes: {
    nombre: "agentes",
    uno: {
      nombre: "Nivel de Habilidad",
      info: "¿Cuán hábil técnicamente consideraría el grupo esperado de agentes amenazantes?",
      opciones: [
        "0",
        "1 - Sin habilidades técnicas",
        "2",
        "3 - Algunas habilidades técnicas",
        "4",
        "5 - Usuario avanzado de informáticar",
        "6 - Habilidades de red y programación",
        "7",
        "8",
        "9 - Habilidades de penetración de seguridad",
      ],
    },
    dos: {
      nombre: "Motivo",
      info: "¿Qué tan motivado está este grupo de agentes de amenazas para encontrar y explotar esta vulnerabilidad?",
      opciones: [
        "0",
        "1 - Recompensa baja o nula",
        "2",
        "3",
        "4 - Posible recompensa",
        "5",
        "6",
        "7",
        "8",
        "9 - Recompensa alta",
      ],
    },
    tres: {
      nombre: "Oportunidad",
      info: "¿Qué recursos y oportunidades se requieren para que este grupo de agentes de amenazas encuentre y explote esta vulnerabilidad?",
      opciones: [
        "0 - Se requiere acceso completo o recursos costosos",
        "1",
        "2",
        "3",
        "4 - Acceso o recursos especiales requeridos",
        "5",
        "6",
        "7 - Se requiere algún acceso o recursos",
        "8",
        "9 - No se requiere acceso ni recursos",
      ],
    },
    cuatro: {
      nombre: "Tamaño",
      info: "¿Qué tan grande es este grupo de agentes amenazantes?",
      opciones: [
        "0",
        "1",
        "2 - Desarrolladores, administradores de sistemas",
        "3",
        "4 - Usuarios de la intranet",
        "5 - Socios",
        "6 - Usuarios autenticados",
        "7",
        "8",
        "9 - Usuarios de internet anónimos",
      ],
    },
  },
  vulnerabilidades: {
    nombre: "vulnerabilidades",
    uno: {
      nombre: "Facilidad de descubrimiento",
      info: "¿Qué tan fácil es para este grupo de agentes de amenazas descubrir esta vulnerabilidad?",
      opciones: [
        "0",
        "1 - Prácticamente imposible",
        "2",
        "3 - Difícil",
        "4",
        "5",
        "6",
        "7 - Fácil",
        "8",
        "9 - Herramientas automatizadas disponibles",
      ],
    },
    dos: {
      nombre: "Facilidad de explotación",
      info: "¿Qué tan fácil es para este grupo de agentes de amenazas explotar esta vulnerabilidad?",
      opciones: [
        "0",
        "1 - Teórica",
        "2",
        "3 - Difícil",
        "4",
        "5 - Fácil",
        "6",
        "7",
        "8",
        "9 - Herramientas automatizadas disponibles",
      ],
    },
    tres: {
      nombre: "Conciencia",
      info: "¿Qué tan conocida es esta vulnerabilidad para este grupo de agentes de amenazas?",
      opciones: [
        "0",
        "1 - Desconocida",
        "2",
        "3",
        "4 - Oculta",
        "5",
        "6 - Obvia",
        "7",
        "8",
        "9 - Conocimiento público",
      ],
    },
    cuatro: {
      nombre: "Detección de intrusos",
      info: "¿Qué probabilidad hay de que se detecte un exploit?",
      opciones: [
        "0",
        "1 - Detección activa en la aplicación",
        "2",
        "3 - Registrado y revisado",
        "4",
        "5",
        "6",
        "7",
        "8 - Registrado sin revisión",
        "9 - No registrado",
      ],
    },
  },
};

const Probabilidad = ({ setProbabilidad }) => {
  const [valAgentes, setValAgentes] = useState([0, 0, 0, 0]);
  const [valVulne, setValVulne] = useState([0, 0, 0, 0]);

  const updateVal = (tema, posicion, valor) => {
    let newData;
    switch (tema) {
      case "agentes":
        newData = valAgentes;
        newData[posicion] = valor;
        setValAgentes(newData);
        break;
      case "vulnerabilidades":
        newData = valVulne;
        newData[posicion] = valor;
        setValVulne(newData);
        break;
      default:
        break;
    }
    updateProbabilidad();
  };

  const updateProbabilidad = () => {
    let valProbabilidad =
      parseInt(valAgentes[0]) +
      parseInt(valAgentes[1]) +
      parseInt(valAgentes[2]) +
      parseInt(valAgentes[3]) +
      parseInt(valVulne[0]) +
      parseInt(valVulne[1]) +
      parseInt(valVulne[2]) +
      parseInt(valVulne[3]);

    valProbabilidad = valProbabilidad / 8;
    setProbabilidad(valProbabilidad);
  };

  return (
    <div>
      <h3 className="text-center text-warning bg-light">Probabilidad</h3>
      <div>
        <TablaBase
          title={"Factores de agentes de amenaza"}
          temas={temas.agentes}
          updateVal={updateVal}
        />
      </div>
      <div>
        <TablaBase
          title={"Factores de vulnerabilidad"}
          temas={temas.vulnerabilidades}
          updateVal={updateVal}
        />
      </div>
    </div>
  );
};

export default Probabilidad;
