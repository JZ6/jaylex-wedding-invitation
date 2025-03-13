import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import images from '@/layout/Gallery/Images.ts';

const PhotoGallery = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'contain',
    width: '100%',
    padding: '1px',
  };

  const options = {
    arrowPrev: true,
    arrowNext: true,
    // zoom: false,
    // close: false,
    // zoom: false,
    // close: false,
    // counter: false,
    // bgOpacity: 0.2,
    // padding: { top: 20, bottom: 40, left: 100, right: 100 },
  };

  return (
    <Gallery options={options}>
      <div
        style={{
          // display: 'grid',
          // gridTemplateColumns: 'repeat(1, 0fr)',
          // gridGap: 3,
          width: '100%',
        }}>
        {images.map((image, index) => {
          return (
            <Item
              key={index}
              cropped
              original={image.source}
              thumbnail={image.source}
              width={image.width}
              height={image.height}>
              {({ ref, open }) => (
                <img
                  style={smallItemStyles}
                  alt={image.alt}
                  src={image.source}
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open}
                />
              )}
            </Item>
          );
        })}
      </div>
    </Gallery>
  );
};

export default PhotoGallery;
