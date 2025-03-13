import styled from '@emotion/styled';
import Carousel from 'react-bootstrap/Carousel';
// import { Paragraph } from '@/components/Text.tsx';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import beef from '@/assets/images/beef.webp';
import salmon from '@/assets/images/salmon.jpg';
// import image03 from '@/assets/images/beef.jpg';

function UncontrolledExample() {
  const x = (
    <img width="100%" style={{ opacity: 1, maxHeight: '600px' }} src={salmon} alt="salmon" />
  );
  return (
    <MealSelectionWrapper>
      <Carousel interval={null}>
        <Carousel.Item>
          {x}
          <Carousel.Caption>
            <h3>Beef Short Rib</h3>
            <p>Buttermilk Mash Potatoes, Kale, Red Currant Jus</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {x}
          <Carousel.Caption>
            <h3>Herb Marinated BC Sockeye Salmon Filet</h3>
            <p>Grilled Artichokes, Nugget Potatoes, Dill Horseradish Sauce</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {x}
          <Carousel.Caption>
            <h3>Cheese Ravioli</h3>
            <p>Butternut Squash Cream, Brown Butter, Sage And Pine Nuts</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </MealSelectionWrapper>
  );
}

export default UncontrolledExample;

const MealSelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 90%;
`;
