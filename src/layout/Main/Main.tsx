import styled from '@emotion/styled';
import { getGuestData, getGuestUrlParam, getWelcomeMessage, Guest } from './Guests';
import mainImg from '@/assets/images/welcome.jpg';

const Main = () => {
  const guestParam: string = getGuestUrlParam();
  const guestData: Guest | boolean = getGuestData(guestParam);
  const welcomeMessage = getWelcomeMessage(guestData);

  return (
    <div>
      <MainImg src={mainImg} />
      <MainTitle>{welcomeMessage}</MainTitle>
      <SubTitle>You have been cordially invited to Alex & Jay's wedding!</SubTitle>
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
  text-align: center;
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #2f2120;
  line-height: 140%;
  white-space: pre-line;
  margin: 0px;
  text-align: center;
`;
