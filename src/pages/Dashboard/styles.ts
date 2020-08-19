import styled from 'styled-components';

export const FoodsContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 60px;
  margin-top: -140px;

  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
`;
