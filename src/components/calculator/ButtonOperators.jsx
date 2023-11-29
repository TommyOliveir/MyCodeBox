/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import { useContext } from "react";
import { CalcContext } from "./CalcContext";

const Button = styled.button`
  background: #dddddd;
  font-size: 20px;
  width: fit-content;
  padding: 1em 2em;
  margin: auto;
  border: #dddddd solid 2px;
  cursor: pointer;
`;

function ButtonOperators({ children }) {
  console.log("btn operator render");
  const { countDispatch } = useContext(CalcContext);
  return (
    <Button
      onClick={() => countDispatch({ type: "setOperator", payload: children })}
    >
      {children}
    </Button>
  );
}

ButtonOperators.propTypes = {
  children: PropTypes.node,
};

export default React.memo(ButtonOperators);
