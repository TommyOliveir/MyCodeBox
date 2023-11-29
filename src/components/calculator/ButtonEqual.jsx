/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";
import React from "react";
import { useContext } from "react";
import { CalcContext } from "./CalcContext";

const Button = styled.button`
  background-color: #4d8ffe;
  padding: 10px;
  grid-column: 4;
  grid-row: 3/7;
  color: #fff;
  font-size: 20px;
  border: #216df0 solid 2px;
  cursor: pointer;
`;

function ButtonEqual() {
  const { countDispatch } = useContext(CalcContext);

  return <Button onClick={() => countDispatch({ type: "equals" })}>=</Button>;
}

export default React.memo(ButtonEqual);
