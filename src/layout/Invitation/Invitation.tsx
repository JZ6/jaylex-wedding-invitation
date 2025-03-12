import styled from '@emotion/styled';
import RoundButton from '@/components/RoundButton.tsx';
import { PointTitle } from '@/components/Text.tsx';

const Invitation = () => {
  return (
    <InvitationWrapper>
      <PointTitle>
        Gondola Boarding @ 4:00PM
        <br />
        <br />
        Appretifs @ 4:30PM
      </PointTitle>
      {/* <Caption> */}
      At the Timber Room <br />
      On Grouse Mountain <br />
      The Peak of Vancouver
      {/* </Caption> */}
      <RoundButton
        target="_blank"
        href="https://www.addevent.com/event/Tc25153249+google"
        rel="noreferrer">
        Click me to add to your calendar!
      </RoundButton>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
