import styled from '@emotion/styled';
import RoundButton from '@/components/RoundButton.tsx';
// import { Caption, Paragraph, Heading2 } from '@/components/Text.tsx';

const Invitation = () => {
  return (
    <InvitationWrapper>
      At the Timber room <br />
      On Grouse Mountain <br />
      The peak of Vancouver
      <RoundButton
        target="_blank"
        href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NGNybzY0ZzNiZjB0dWg0NHExZHIxYTBldTAgZmFtaWx5MTA3NjA1OTEwNzQ0OTM1MjE2ODhAZw&tmsrc=family10760591074493521688%40group.calendar.google.com"
        rel="noreferrer">
        Click here to add to your calendar!
      </RoundButton>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
