/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import { useContext } from "react";
import { CalcContext } from "./CalcContext";

const Button = styled.button`
  background: #f9f9f9;
  font-size: 20px;
  width: fit-content;
  padding: 1em 2em;
  margin: auto;
  border: #dddddd solid 2px;
  cursor: pointer;
  &:hover {
    background: yellow;
  }
`;

function ButtonDigit({ children }) {
  const { countDispatch } = useContext(CalcContext);

  console.log("btn calc render");
  function handleClick() {
    countDispatch({ type: "setNumber", payload: children });
  }

  return <Button onClick={handleClick}>{children}</Button>;
}

ButtonDigit.propTypes = {
  children: PropTypes.node,
};

export default React.memo(ButtonDigit);
