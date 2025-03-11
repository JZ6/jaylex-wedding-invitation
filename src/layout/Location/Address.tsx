import styled from '@emotion/styled';

import { Caption, PointTitle } from '@/components/Text.tsx';

const Address = () => {
  return (
    <WayWrapper>
      <Way key={'\uD83D\uDCCD Grouse'}>
        <PointTitle>{'\uD83D\uDCCD Instructions'}</PointTitle>
        <Caption>
          {'\uD83D\uDC49\uD83C\uDFFB Make sure to pick up your parking and gondola passes from '}
          <a href={'https://maps.app.goo.gl/HNiwjbC3sHBLpE9M6'}>guest services</a>
          {`, then put the parking passes in your car and come on up!`}
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
