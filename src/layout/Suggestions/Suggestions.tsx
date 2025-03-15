import styled from '@emotion/styled';

import { Caption, PointTitle } from '@/components/Text.tsx';

const Suggestions = () => {
  return (
    <SuggestionsWrapper>
      <PointTitle>Why not have some fun since you are already coming to Vancouver?</PointTitle>
      <Caption>{`\uD83D\uDCCD Stanley Park is a must-see! It's also where we took our engagment pictures!`}</Caption>
      <Caption>
        {
          '\uD83D\uDCCD If you enjoy skiing, the world famous Whistler resort is only a short drive away.'
        }
      </Caption>
      <Caption>{'\uD83D\uDCCD Oh yeah, you are also already halfway to Hawaii...'}</Caption>
    </SuggestionsWrapper>
  );
};

export default Suggestions;

const SuggestionsWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  min-height: 100px;
`;
