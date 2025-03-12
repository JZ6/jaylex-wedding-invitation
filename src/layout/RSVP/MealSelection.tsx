import styled from '@emotion/styled';
import Carousel from 'react-bootstrap/Carousel';
// import { Paragraph } from '@/components/Text.tsx';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import image01 from '@/assets/images/01.jpg';
import image02 from '@/assets/images/02.jpg';
import image03 from '@/assets/images/03.jpg';

function UncontrolledExample() {
  const x = <img width={'100%'} src={image01} alt="Logo" />;
  return (
    <MealSelectionWrapper>
      <Carousel interval={null}>
        <Carousel.Item>
          {x}
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {x}
          <Carousel.Caption>
            {/* <h3>Second slide label</h3> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {x}
          <Carousel.Caption>
            {/* <h1>Third slide label</h1> */}
            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
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
