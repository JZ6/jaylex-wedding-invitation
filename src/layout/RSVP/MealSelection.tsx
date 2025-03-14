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

// import { Paragraph } from '@/components/Text.tsx';
import beef from '@/assets/images/beef.jpg';
import salmon from '@/assets/images/salmon.jpg';
import RoundButton from '@/components/RoundButton.tsx';

function MealSelection() {
  const guestParam: string = getGuestUrlParam();
  const guestData: Guest | boolean = getGuestData(guestParam);
  const guestNames = getGuestNames(guestData);

  const [index, setIndex] = useState(0);
  const [curGuestIndex, setCurGuestIndex] = useState(0);
  const [selctionFinished, setSelctionFinished] = useState(false);

  const meals = ['Beef Short Ribs', 'Herb Marinated Salmon', 'Cheese Ravioli'];

  const mealSelectionClick = () => {
    setCurGuestIndex(curGuestIndex + 1);
    if (curGuestIndex > guestNames.length - 2) {
      setSelctionFinished(true);
    }

    const content = `🍽️ ${guestNames[curGuestIndex]} will have ${meals[index]}`;
    console.log(content);
    // sendDiscordMessage(content);
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
      <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <DishImg src={beef} alt="beef" />
          <Carousel.Caption>
            <DishTitle>Beef Short Ribs</DishTitle>
            <DishDescription>
              Kale
              <br />
              Red Currant Jus
              <br />
              Buttermilk Mash Potatoes
            </DishDescription>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <DishImg src={salmon} alt="salmon" />
          <Carousel.Caption>
            <DishTitle>Herb Marinated Salmon</DishTitle>
            <DishDescription>
              Nugget Potatoes
              <br />
              Grilled Artichokes
              <br />
              Dill Horseradish Sauce
            </DishDescription>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
      {x}
      <Carousel.Caption>
        <h3>Cheese Ravioli</h3>
        <p>Butternut Squash Cream, Brown Butter, Sage And Pine Nuts</p>
      </Carousel.Caption>
    </Carousel.Item> */}
      </Carousel>
      <RoundButton onClick={mealSelectionClick}>
        {guestNames[curGuestIndex]} will have this!
      </RoundButton>
    </>
  );

  return (
    <MealSelectionWrapper>
      {selctionFinished ? finishedComponent : selectionComponent}
    </MealSelectionWrapper>
  );
}

export default MealSelection;

const RSVPTitle = styled.p`
  font-family: HSSanTokki20-Regular, serif;
  font-size: 0.8rem;
  line-height: 120%;
  color: #133e87;
  white-space: pre-line;
  text-align: center;
  margin-bottom: 0;
`;

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

const MealSelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 90%;
`;

const DishImg = styled.img`
  border-radius: 36px;
  width: 100%;
  max-height: 360px;
`;
