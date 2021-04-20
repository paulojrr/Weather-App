import styled, { css } from 'styled-components';

const Input = styled.input`
  width: 300px;
  margin-right: 20px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #fff;

  ${(props) =>
    props.hasError &&
    css`
      border-color: red;
    `}
`;

export default Input;
