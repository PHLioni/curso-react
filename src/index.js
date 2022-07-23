import ReactDOM from "react-dom";
import React from "react";

import "./index.css";

import First from "./components/basics/First";
import ComParametro from "./components/basics/ComParamentro";

ReactDOM.render(
  <div>
    <First />
    <ComParametro titulo="Situação do aluno" aluno="Pedro" nota={9.5} />
  </div>,
  document.getElementById("root")
);
