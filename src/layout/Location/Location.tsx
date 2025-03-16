import styled from '@emotion/styled';
import Address from './Address.tsx';

import RoundButton from '@/components/RoundButton.tsx';
import { createHtmlDiv, PointTitle } from '@/components/Text.tsx';

const Location = () => {
  const embeddedMap =
    '<div class="mapouter"><div class="gmap_canvas" ><iframe class="gmap_iframe" width="100%" style="border-radius:36px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=360&amp;height=360&amp;hl=en&amp;q=Grouse Mountain Resort Guest Services, Nancy Greene Way, North Vancouver, BC, Canada&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://embed-googlemap.com">google maps embed</a></div><style>.mapouter{position:relative;text-align:right;width:100%;aspect-ratio: 1 / 1 ;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;aspect-ratio: 1 / 1 ;}.gmap_iframe {aspect-ratio: 1 / 1 !important;}</style></div>';

  return (
    <LocationWrapper>
      <PointTitle>Grouse Mountain</PointTitle>
      {createHtmlDiv(embeddedMap)}
      <RoundButton
        target="_blank"
        href="https://maps.app.goo.gl/LB1NFgubGfVbKLxv6"
        rel="noreferrer">
        Click me for navigation!
      </RoundButton>
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
