import Carousel from 'react-bootstrap/Carousel';
import { Paragraph } from '@/components/Text.tsx';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import image01 from '@/assets/images/01.jpg';
import image02 from '@/assets/images/02.jpg';
import image03 from '@/assets/images/03.jpg';

function UncontrolledExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img width={250} height={250} src={image01} alt="Logo" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={250} height={250} src={image02} alt="Logo" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={250} height={250} src={image03} alt="Logo" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
