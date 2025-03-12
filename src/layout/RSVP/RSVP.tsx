import { useState } from 'react';
import data from 'data.json';
import JSConfetti from 'js-confetti';
import MealSelection from './MealSelection.tsx';
import { Paragraph } from '@/components/Text.tsx';

const RSVP = () => {
  const { emojis } = data;
  const jsConfetti = new JSConfetti();

  const yesClicked = () => {
    void jsConfetti.addConfetti({ emojis });
    setRSVPContent(MealSelection);
  };

  const noClicked = () => {
    setRSVPContent(<Paragraph>Too bad!</Paragraph>);
  };

  const initRSVPContent = (
    <>
      <Paragraph>Are you coming to our wedding?</Paragraph>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={yesClicked} className="RSVPbutton ButtonYes">
          Yes
        </button>
        <button onClick={noClicked} className="RSVPbutton ButtonNo">
          No
        </button>
      </div>
    </>
  );

  const [RSVPContent, setRSVPContent] = useState(initRSVPContent);

  return <> {RSVPContent}</>;
};

export default RSVP;
