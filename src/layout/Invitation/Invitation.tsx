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
        href="https://www.addevent.com/event/Tc25153249+google"
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
