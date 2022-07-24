import React from "react";

import "./index.css";

import First from "./components/basics/First";
import ComParametro from "./components/basics/ComParamentro";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div>
      <ComParametro titulo="Situação do aluno" aluno="Pedro" nota={9.5} />
      <First />
    </div>
  );
};
