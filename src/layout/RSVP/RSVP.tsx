import { useState } from 'react';
import data from 'data.json';
import JSConfetti from 'js-confetti';

import MealSelection from './MealSelection.tsx';
import grouse from '@/assets/images/grouse.jpg';
import ringsquare from '@/assets/images/ringsquare.jpg';

import { getGuestData, getGuestNames, getGuestUrlParam, Guest } from '@/components/guests/Guests';
import { SquareImg } from '@/components/Image.tsx';
import { RSVPTitle } from '@/components/Text.tsx';
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
    setRSVPContent(
      <RSVPWrapper>
        <RSVPTitle>Too bad!</RSVPTitle>
        <SquareImg src={grouse} alt="grouse " />
        <RSVPTitle>Message us if you change your mind!</RSVPTitle>
      </RSVPWrapper>,
    );
    const guestParam: string = getGuestUrlParam();
    sendDiscordMessage(guestParam + ' is not coming');
  };

  const guestParam: string = getGuestUrlParam();
  const guestData: Guest | boolean = getGuestData(guestParam);
  const guestNames = getGuestNames(guestData);

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

  if (guestNames.length === 0) {
    return <p>Invalid invitation, please reach out to Jay!</p>;
  }

  return <> {RSVPContent}</>;
};

export default RSVP;
