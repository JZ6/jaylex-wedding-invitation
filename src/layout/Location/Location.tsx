import styled from '@emotion/styled';
import Address from './Address.tsx';

import RoundButton from '@/components/RoundButton.tsx';
import { Caption, createHtmlDiv, PointTitle } from '@/components/Text.tsx';

const Location = () => {
  const embeddedMap =
    '<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe"width="100%" style="border-radius:18px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=180&amp;hl=en&amp;q=Grouse Mountain Resort Guest Services&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://embed-googlemap.com">embed google map</a></div><style>.mapouter{position:relative;text-align:right;width:100%;height:180px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:180px;}.gmap_iframe {height:180px!important;}</style></div>';

  return (
    <LocationWrapper>
      <PointTitle>{'Grouse Mountain'}</PointTitle>
      {createHtmlDiv(embeddedMap)}
      <Caption textAlign={'center'}>
        <RoundButton
          target="_blank"
          href="https://maps.app.goo.gl/LB1NFgubGfVbKLxv6"
          rel="noreferrer">
          Click me to navigate!
        </RoundButton>
      </Caption>
      <Address />
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
