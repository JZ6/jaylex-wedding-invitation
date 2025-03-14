import styled from '@emotion/styled';
import Carousel from 'react-bootstrap/Carousel';

import { SetStateAction, useState } from 'react';
// import { Paragraph } from '@/components/Text.tsx';
import {
  getGuestData,
  getGuestNames,
  getGuestUrlParam,
  Guest,
} from '../../components/guests/Guests';
import beef from '@/assets/images/beef.jpg';
import salmon from '@/assets/images/salmon.jpg';
import RoundButton from '@/components/RoundButton.tsx';

function MealSelection() {
  const guestParam: string = getGuestUrlParam();
  const guestData: Guest | boolean = getGuestData(guestParam);
  const guestNames = getGuestNames(guestData);

  const [curGuestIndex, setCurGuestIndex] = useState(0);
  // const [message, setMessage] = useState<string>('');

  const [index, setIndex] = useState(0);

  const mealSelectionClick = () => {
    setCurGuestIndex(curGuestIndex + 1);
    console.log(index);
  };

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <MealSelectionWrapper>
      <p style={{ fontSize: '0.8rem', marginBottom: '0' }}>
        What would {guestNames[curGuestIndex]} like for dinner?
      </p>
      <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <DishImg src={beef} alt="beef" />
          <Carousel.Caption>
            <DishTitle>Beef Short Ribs</DishTitle>
            <DishDescription style={{ color: '#F5F5F5' }}>
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
            <DishDescription style={{ color: '#F5F5F5' }}>
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
      <RoundButton style={{ background: '#4caf4fc2' }} onClick={mealSelectionClick}>
        {guestNames[curGuestIndex]} will have this!
      </RoundButton>
    </MealSelectionWrapper>
  );
}

export default MealSelection;

const DishTitle = styled.p`
  font-family: HSSanTokki20-Regular, serif;
  font-size: 1rem;
  color: #f5f5f5;
  line-height: 120%;
  white-space: pre-line;
  text-align: center;
  -webkit-text-stroke: 0.03rem black;
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
  -webkit-text-stroke: 0.03rem black;
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
