import styled from 'styled-components';

const FormContent = styled.div`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    & input {
      margin-bottom: 15px;
    }
  }
`;

export default FormContent;
