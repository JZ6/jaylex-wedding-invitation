import { useState } from 'react';
import data from 'data.json';
import JSConfetti from 'js-confetti';

import MealSelection from './MealSelection.tsx';
import ringsquare from '@/assets/images/ringsquare.jpg';

import { getGuestUrlParam } from '@/components/guests/Guests';
import { SquareImg } from '@/components/Image.tsx';
import { Paragraph, RSVPTitle } from '@/components/Text.tsx';
import { sendDiscordMessage } from '@/components/utils/discord';
import { RSVPWrapper } from '@/components/Wrapper.tsx';

const RSVP = () => {
  const { emojis } = data;
  const jsConfetti = new JSConfetti();

  const yesClicked = () => {
    void jsConfetti.addConfetti({ emojis });
    setRSVPContent(<MealSelection />);
  };

  const noClicked = () => {
    setRSVPContent(<Paragraph>Too bad!</Paragraph>);
    const guestParam: string = getGuestUrlParam();
    sendDiscordMessage(guestParam + ' is not coming');
  };

  const initRSVPContent = (
    <RSVPWrapper>
      <RSVPTitle>Will you be attending our wedding?</RSVPTitle>
      <SquareImg src={ringsquare} alt="ringsquare" />
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={yesClicked} className="RSVPbutton ButtonYes">
          Yes!
        </button>
        <button onClick={noClicked} className="RSVPbutton ButtonNo">
          No
        </button>
      </div>
    </RSVPWrapper>
  );

  const [RSVPContent, setRSVPContent] = useState(initRSVPContent);

  return <> {RSVPContent}</>;
};

export default RSVP;
