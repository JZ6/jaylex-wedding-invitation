import styled from '@emotion/styled';
import mainImg from '@/assets/images/welcome.jpg';

const Main = () => {
  return (
    <div>
      <MainImg src={mainImg} />
      <MainTitle>Welcome</MainTitle>
      <SubTitle>You have been cordially invited to Jay & Alex's wedding!</SubTitle>
    </div>
  );
};

export default Main;

const MainImg = styled.img`
  border-radius: 200px 200px 0 0;
  width: 90%;
  max-width: 450px;
  padding-top: 20px;
`;

const MainTitle = styled.p`
  font-family: HSSanTokki20-Regular, serif;
  font-size: 2rem;
  color: #2f2120;
  line-height: 120%;
  white-space: pre-line;
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #2f2120;
  line-height: 140%;
  white-space: pre-line;
`;
