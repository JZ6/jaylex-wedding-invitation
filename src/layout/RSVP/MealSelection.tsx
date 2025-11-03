import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Carousel from 'react-bootstrap/Carousel';

import beef from '@/assets/images/beef.jpg';
import grouse from '@/assets/images/grouse.jpg';
import ravioli from '@/assets/images/ravioli.jpg';
import salmon from '@/assets/images/salmon.jpg';

import { getGuestData, getGuestNames, getGuestUrlParam, Guest } from '@/components/guests/Guests';
import { DishImg, SquareImg } from '@/components/Image.tsx';
import RoundButton from '@/components/RoundButton.tsx';
import { RSVPTitle } from '@/components/Text.tsx';
import { sendDiscordMessage } from '@/components/utils/discord';
import { RSVPWrapper } from '@/components/Wrapper.tsx';

function MealSelection() {
  const guestParam: string = getGuestUrlParam();
  const guestData: Guest | boolean = getGuestData(guestParam);
  const guestNames = getGuestNames(guestData);

  const isMultipleGuest = guestNames.length > 1;

  const [index, setIndex] = useState(0);
  const [curGuestIndex, setCurGuestIndex] = useState(0);
  const [selctionFinished, setSelctionFinished] = useState(false);
  const [showSwipeOverlay, setShowSwipeOverlay] = useState(true);

  // Hide the swipe overlay after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSwipeOverlay(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (guestNames.length === 0) {
    return <p>Invalid invitation, please reach out to Jay!</p>;
  }

  const meals = ['Beef Short Ribs', 'Cioppino', 'Chicken'];

  const mealSelectionClick = () => {
    setCurGuestIndex(curGuestIndex + 1);

    if (curGuestIndex > guestNames.length - 2) {
      setSelctionFinished(true);
    }

    const content = `🍽️ ${guestNames[curGuestIndex]} will have ${meals[index]}`;
    console.log(content);
    sendDiscordMessage(content);
  };

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const finishedComponent = (
    <>
      <RSVPTitle>Confirmed!</RSVPTitle>
      <SquareImg src={grouse} alt="grouse " />
      <RSVPTitle>See you soon!</RSVPTitle>
    </>
  );

  const selectionComponent = (
    <>
      <RSVPTitle>
        What would {isMultipleGuest ? guestNames[curGuestIndex] : 'you'} like for dinner?
      </RSVPTitle>
      <CarouselContainer>
        <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <DishImg src={beef} alt="Beef" />
            <Carousel.Caption>
              <DishTitle>Beef Short Ribs</DishTitle>
              <DishDescription>
                Aromatic Carrots
                <br />
                Pommes Purée
                <br />
                Red Wine Jus
              </DishDescription>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <DishImg src={salmon} alt="Fish" />
            <Carousel.Caption>
              <DishTitle>Pacific Lingcod Cioppino</DishTitle>
              <DishDescription>
                Shrimp
                <br />
                Mussels, Clams
                <br />
                Tomato-fennel broth
              </DishDescription>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <DishImg src={ravioli} alt="Chicken" />
            <Carousel.Caption>
              <DishTitle>Fraser Valley Chicken</DishTitle>
              <DishDescription>
                Charred Broccolini
                <br />
                Pommes Fondants
                <br />
                Truffle Beurre Blanc
              </DishDescription>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
        {showSwipeOverlay && (
          <SwipeOverlay>
            <SwipeIndicator>
              <SwipeArrows>← Swipe →</SwipeArrows>
              <SwipeText>And pick your fav!</SwipeText>
            </SwipeIndicator>
          </SwipeOverlay>
        )}
      </CarouselContainer>
      <RoundButton style={{ marginTop: '0.3rem' }} onClick={mealSelectionClick}>
        {isMultipleGuest ? guestNames[curGuestIndex] : 'I'} will have this!
      </RoundButton>
    </>
  );

  return <RSVPWrapper>{selctionFinished ? finishedComponent : selectionComponent}</RSVPWrapper>;
}

export default MealSelection;

const DishTitle = styled.p`
  font-size: 1.1rem;
  color: white;
  line-height: 120%;
  white-space: pre-line;
  text-align: center;
  margin-bottom: 0.3rem;
  border-radius: 0.5rem;
  backdrop-filter: blur(1px) brightness(50%);
`;

const DishDescription = styled.p`
  font-size: 0.9rem;
  color: white;
  line-height: 120%;
  white-space: pre-line;
  text-align: center;
  margin-bottom: 0;
  border-radius: 6px;
  backdrop-filter: blur(1px) brightness(50%);
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
`;

const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  20% {
    opacity: 1;
    transform: translateY(0);
  }
  80% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

const SwipeOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  z-index: 10;
  animation: ${fadeInOut} 3s ease-in-out forwards;
  border-radius: 36px;
`;

const SwipeIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-align: center;
`;

const SwipeArrows = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

const SwipeText = styled.div`
  font-size: 0.9rem;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  max-width: 200px;
`;
