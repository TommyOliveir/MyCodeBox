import styled from "styled-components";
import PropTypes from "prop-types";

const Input = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  grid-column: span 4;
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  box-shadow: inset 0px 0px 6px -1px #000000;
  height: 40px;
`;

function InputCalc({children}) {
  return <Input>{children}</Input>;
}


InputCalc.propTypes = {
  children: PropTypes.node,
};
export default InputCalc;
