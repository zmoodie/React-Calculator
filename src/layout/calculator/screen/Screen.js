import React from "react";

import ResultsScreen from "./resultsScreen/ResultsScreen";
import ComputationScreen from "./computationScreen/ComputationScreen";

const Screen = props => (
  <section className="screen">
    <ResultsScreen>{props.result}</ResultsScreen>
    <ComputationScreen>{props.equation}</ComputationScreen>
  </section>
);

export default Screen;
