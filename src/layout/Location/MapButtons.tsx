import styled from '@emotion/styled';
// import data from 'data.json';
import Button from '@/components/Button.tsx';

const MapButtons = () => {
  // const { naverMap, kakaoMap } = data.mapInfo;

  return (
    <MapButtonWrapper>
      <Button onClick={() => console.log(1)}>Google Maps</Button>
    </MapButtonWrapper>
  );
};

export default MapButtons;

const MapButtonWrapper = styled.div`
  margin: 8px;
  display: flex;
  gap: 8px;
  justify-content: center;
`;
