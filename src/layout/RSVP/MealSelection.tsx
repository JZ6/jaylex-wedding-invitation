import { useState } from 'react';
import styled from '@emotion/styled';
import Carousel from 'react-bootstrap/Carousel';
import {
  getGuestData,
  getGuestNames,
  getGuestUrlParam,
  Guest,
} from '../../components/guests/Guests';
import { sendDiscordMessage } from '../../components/utils/discord';

import beef from '@/assets/images/beef.jpg';
import salmon from '@/assets/images/salmon.jpg';
import { DishImg } from '@/components/Image.tsx';
import RoundButton from '@/components/RoundButton.tsx';
import { RSVPTitle } from '@/components/Text.tsx';
import { RSVPWrapper } from '@/components/Wrapper.tsx';

function MealSelection() {
  const guestParam: string = getGuestUrlParam();
  const guestData: Guest | boolean = getGuestData(guestParam);
  const guestNames = getGuestNames(guestData);

  const [index, setIndex] = useState(0);
  const [curGuestIndex, setCurGuestIndex] = useState(0);
  const [selctionFinished, setSelctionFinished] = useState(false);

  if (guestNames.length === 0) {
    return <p>Invalid invitation, please reach out to Jay!</p>;
  }

  const meals = ['Beef Short Ribs', 'Herb Marinated Salmon', 'Cheese Ravioli'];

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
      <RSVPTitle>Confirmed! </RSVPTitle>
      <DishImg src={salmon} alt="salmon" />
      <RSVPTitle>See you soon!</RSVPTitle>
    </>
  );

  const selectionComponent = (
    <>
      <RSVPTitle>What would {guestNames[curGuestIndex]} like for dinner?</RSVPTitle>
      <Carousel interval={null} data-bs-theme="dark" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <DishImg src={beef} alt="beef" />
          <Carousel.Caption>
            <DishTitle>Beef Short Ribs</DishTitle>
            <DishDescription>
              Buttermilk Mash Potatoes
              <br />
              Red Currant Jus
              <br />
              Kale
            </DishDescription>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <DishImg src={salmon} alt="salmon" />
          <Carousel.Caption>
            <DishTitle>Herb Marinated Salmon</DishTitle>
            <DishDescription>
              Dill Horseradish Sauce
              <br />
              Grilled Artichokes
              <br />
              Nugget Potatoes
            </DishDescription>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <DishImg src={salmon} alt="salmon" />
          <Carousel.Caption>
            <DishTitle>Cheese Ravioli</DishTitle>
            <DishDescription>
              Butternut Squash Cream
              <br />
              Sage And Pine Nuts
              <br />
              Brown Butter
            </DishDescription>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <RoundButton style={{ marginTop: '0.3rem' }} onClick={mealSelectionClick}>
        {guestNames[curGuestIndex]} will have this!
      </RoundButton>
    </>
  );

  return <RSVPWrapper>{selctionFinished ? finishedComponent : selectionComponent}</RSVPWrapper>;
}

export default MealSelection;

const DishTitle = styled.p`
  font-family: HSSanTokki20-Regular, serif;
  font-size: 1rem;
  color: #f5f5f5;
  line-height: 120%;
  white-space: pre-line;
  text-align: center;
  -webkit-text-stroke: 0.6px black;
  margin-bottom: 0.5rem;
`;

const DishDescription = styled.p`
  font-family: HSSanTokki20-Regular, serif;
  font-size: 0.8rem;
  color: #f5f5f5;
  line-height: 120%;
  white-space: pre-line;
  text-align: center;
  margin-bottom: 0;
  -webkit-text-stroke: 0.6px black;
`;
