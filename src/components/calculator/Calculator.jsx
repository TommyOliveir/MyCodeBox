/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import ButtonDigit from "./ButtonDigit";
import InputCalc from "./InputCalc";
import ButtonOperators from "./ButtonOperators";
import ButtonEqual from "./ButtonEqual";
import { useContext } from "react";
import { CalcContext } from "./CalcContext";

const StyledCalcContainer = styled.div`
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 6;
  gap: 40px;
  width: fit-content;
  margin: auto;
  box-shadow: 0px 0px 6px -1px #000000;
`;

const GridItem = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
`;

function Calculator() {
  const { result, countDispatch, prevInput, input } =
    useContext(CalcContext);
  console.log("type", typeof input);
  return (
    <StyledCalcContainer>
      <InputCalc>
        {!result && input} {result ? result : ""}
      </InputCalc>
      <ButtonOperators>+</ButtonOperators>
      <ButtonOperators>-</ButtonOperators>
      <ButtonOperators>x</ButtonOperators>
      <ButtonOperators>%</ButtonOperators>
      <ButtonDigit>7</ButtonDigit>
      <ButtonDigit>8</ButtonDigit>
      <ButtonDigit>9</ButtonDigit>
      <ButtonDigit>4</ButtonDigit>
      <ButtonDigit>5</ButtonDigit>
      <ButtonDigit>6</ButtonDigit>
      <ButtonDigit>1</ButtonDigit>
      <ButtonDigit>2</ButtonDigit>
      <ButtonDigit>3</ButtonDigit>
      <ButtonDigit>0</ButtonDigit>
      <ButtonDigit>.</ButtonDigit>
      <ButtonEqual> </ButtonEqual>
      <button onClick={() => countDispatch({ type: "clear" })}>C</button>
      {/* Add more items as needed */}
      {/* {prevInput} {result} */}
    </StyledCalcContainer>
  );
}

export default Calculator;
