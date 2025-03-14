import { useState } from 'react';
import data from 'data.json';
import JSConfetti from 'js-confetti';
import MealSelection from './MealSelection.tsx';
import { getGuestUrlParam } from '../../components/guests/Guests';
import { sendDiscordMessage } from '../../components/utils/discord';
import { Paragraph, RSVPTitle } from '@/components/Text.tsx';
import salmon from '@/assets/images/salmon.jpg';
import { DishImg } from '@/components/Image.tsx';

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
      <RSVPTitle>Are you coming to our wedding?</RSVPTitle>
      <DishImg src={salmon} alt="salmon" />
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={yesClicked} className="RSVPbutton ButtonYes">
          Yes
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
