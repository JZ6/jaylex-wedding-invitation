import styled from '@emotion/styled';
import rate from '@/assets/images/rate.png';
import { Caption } from '@/components/Text.tsx';
import { RateImg } from '@/components/Image.tsx';

const Address = () => {
  return (
    <WayWrapper>
      <Way key={'\uD83D\uDCCD Grouse'}>
        <Caption>
          {'\uD83D\uDC49\uD83C\uDFFB We suggest staying the night before at the '}
          <a
            href={
              'https://seasidehotelvancouver.ihotelier.com/book/accommodations?adults=&children=&datein=02/06/2026&dateout=02/07/2026&rate=wedding15'
            }>
            Seaside Hotel North Vancouver
          </a>
        </Caption>
        <Caption>
          {'Use the rate access code "wedding15" to get a 15% discount on your stay!'}
          <RateImg src={rate} alt="rate" />
        </Caption>
        <Caption>
          {`\uD83D\uDC49\uD83C\uDFFB On Saturday, make sure to take an Uber/Taxi to Grouse mountain before 3pm so you can arrive at our wedding on top of the mountain before the Hors d'oeuvres run out!`}
        </Caption>
        <Caption>
          {
            '\uD83D\uDC49\uD83C\uDFFB When you arrive at the base of the mountain, you can pick up your parking and gondola passes from '
          }
          <a href={'https://maps.app.goo.gl/HNiwjbC3sHBLpE9M6'}>guest services</a>
          {` and come on up!`}
        </Caption>
      </Way>
    </WayWrapper>
  );
};

export default Address;

const WayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 0px 0px 0px;
  gap: 20px;
`;

const Way = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
