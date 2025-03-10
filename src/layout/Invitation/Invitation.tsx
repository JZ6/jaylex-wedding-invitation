import styled from '@emotion/styled';
import Host from '../Contact/Host.tsx';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';

const Invitation = () => {
  return (
    <InvitationWrapper>
      <Paragraph>{'greeting.message'}</Paragraph>
      <Host />
      <Caption textAlign={'center'}>{'greeting.eventDetail'}</Caption>
      <RoundButton
        target="_blank"
        href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NGNybzY0ZzNiZjB0dWg0NHExZHIxYTBldTAgZmFtaWx5MTA3NjA1OTEwNzQ0OTM1MjE2ODhAZw&tmsrc=family10760591074493521688%40group.calendar.google.com"
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
  gap: 20px;
`;
