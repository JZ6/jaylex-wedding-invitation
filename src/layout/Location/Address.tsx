import styled from '@emotion/styled';

import RoundButton from '@/components/RoundButton.tsx';
import { Caption, PointTitle } from '@/components/Text.tsx';

const Address = () => {
  return (
    <WayWrapper>
      <Way key={'\uD83D\uDCCD Grouse'}>
        <PointTitle>{'\uD83D\uDCCD Grouse Mountain'}</PointTitle>
        <Caption>
          {'\uD83D\uDC49\uD83C\uDFFB '}
          <RoundButton
            target="_blank"
            href="https://maps.app.goo.gl/LB1NFgubGfVbKLxv6"
            rel="noreferrer">
            Directions
          </RoundButton>
        </Caption>
        <Caption>
          {'\uD83D\uDC49\uD83C\uDFFB After parking, go to '}
          <a href={'https://maps.app.goo.gl/HNiwjbC3sHBLpE9M6'}>guest services</a>
          {' to pick up your gondola ticket and come on up!'}
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
  margin: 20px 0px;
  gap: 20px;
`;

const Way = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
