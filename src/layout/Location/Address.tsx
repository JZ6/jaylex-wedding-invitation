import styled from '@emotion/styled';

import { Caption } from '@/components/Text.tsx';

const Address = () => {
  return (
    <WayWrapper>
      <Way key={'\uD83D\uDCCD Grouse'}>
        <Caption>
          {'\uD83D\uDC49\uD83C\uDFFB We suggest staying at the '}
          <a href={'https://maps.app.goo.gl/qS1sz2e11FvxzWwe6'}>Seaside Hotel North Vancouver</a>
          {`, the night before, then take an Uber/Taxi to grouse at 3pm!`}
        </Caption>
        <Caption>
          {'\uD83D\uDC49\uD83C\uDFFB Make sure to pick up your parking and gondola passes from '}
          <a href={'https://maps.app.goo.gl/HNiwjbC3sHBLpE9M6'}>guest services</a>
          {`, then put the parking passes in your car if you have one and come on up!`}
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
