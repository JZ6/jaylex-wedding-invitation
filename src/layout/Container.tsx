import styled from '@emotion/styled';

const Container = styled.div`
  border: 30px solid transparent;
  border-image-source: url('background.png');
  border-image-slice: 30% 49%;
  border-image-width: 280px;
  background-color: #ffffff;
  width: 100vw;
  margin: 0 auto;

  padding-bottom: 50px;

  @media screen and (min-width: 500px) {
    width: 500px;
  }
`;
export default Container;
