import React from "react";
import PropTypes from "prop-types";
import { useReducer } from "react";

let initialState = {
  inputValue: "0",
  prevInputValue: "",
  operation: "",
  result: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "setNumber":
      if (action.payload === "0" && state.inputValue === "0") {
        return state;
      }
      if (action.payload === "." && state.inputValue.includes(".")) {
        return state;
      }
      return {
        ...state,
        inputValue: `${state.inputValue || ""}${action.payload}`,
      };
    case "setOperator":
      if (state.inputValue === null && state.prevInputValue === null) {
        return state;
      }
      return {
        ...state,
        prevInputValue: state.inputValue,
        inputValue: null,
        operation: action.payload,
      };
    case "clear":
      return {};
    case "equals":
      switch (state.operation) {
        case "+":
          return {
            ...state,
            result: Number(state.prevInputValue) + Number(state.inputValue),
          };
        case "-":
          return {
            ...state,
            result: Number(state.prevInputValue) - Number(state.inputValue),
          };
        case "x":
          return {
            ...state,
            result: Number(state.prevInputValue) * Number(state.inputValue),
          };
        case "%":
          return {
            ...state,
            result: Number(state.prevInputValue) / Number(state.inputValue),
          };
      }
      break
    default:
      return state;
  }
};



export const CalcContext = React.createContext();

const CalcContextProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CalcContext.Provider
      value={{
        countState: count.count,
        countDispatch: dispatch,
        input: count.inputValue,
        prevInput: count.prevInputValue,
        result: count.result,
      }}
    >
      {children}
    </CalcContext.Provider>
  );
};

CalcContextProvider.propTypes = {
  children: PropTypes.node,
};

export default CalcContextProvider;
