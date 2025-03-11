import { useState } from 'react';
import data from 'data.json';
import JSConfetti from 'js-confetti';
import { Paragraph } from '@/components/Text.tsx';

const RSVP = () => {
  const { emojis } = data;
  const jsConfetti = new JSConfetti();

  const yesClicked = () => {
    void jsConfetti.addConfetti({ emojis });
    setRSVPContent(
      <>
        <Paragraph>Nice</Paragraph>
      </>,
    );
  };

  const initRSVPContent = (
    <>
      <Paragraph>Are you coming to our wedding?</Paragraph>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={yesClicked} className="RSVPbutton ButtonYes">
          Yes
        </button>
        <button className="RSVPbutton ButtonNo">No</button>
      </div>
    </>
  );

  const [RSVPContent, setRSVPContent] = useState(initRSVPContent);

  return <> {RSVPContent}</>;
};

export default RSVP;
