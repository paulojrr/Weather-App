import styled from 'styled-components';

const CardWrapper = styled.section`
  display: grid;
  grid-row-start: 1;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 30px;
  grid-auto-flow: row;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default CardWrapper;
