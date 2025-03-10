import styled from '@emotion/styled';
import Address from './Address.tsx';
import { Caption, PointTitle } from '@/components/Text.tsx';

const Location = () => {
  return (
    <LocationWrapper>
      <PointTitle>{'Grouse Mountain'}</PointTitle>
      <Caption textAlign={'center'}>{'mapInfo.address2'}</Caption>
      <div>
        
        {
          '<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=6400 Nancy Greene Way, North Vancouver, BC V7R 4K9&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://embed-googlemap.com">embed google map</a></div><style>.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}</style></div>'
        }
      </div>
      {/* <MapButtons /> */}
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
