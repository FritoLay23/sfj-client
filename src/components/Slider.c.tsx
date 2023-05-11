import { useState } from 'react';
import Pagination from './Pagination.c';
const SliderData = [
  'about-1.jpg',
  'about-2.jpg',
  'about-3.jpg',
  'artesano.png',
  'alex.JPG'
];
// Path to images

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return (
      <div className="slider">
        <h1>There is no images to show</h1>
      </div>
    );
  }
  return (
    <div className="container_slider">
      <div className="slider">
        {length > 0 && (
          <div className="slide">
            <img
              src={'/public/IMG/' + SliderData[current]}
              alt="travel image"
              className="slide_image"
            />
          </div>
        )}
      </div>
      <div className="pagination">
        {current !== 0 ? (
          <Pagination
            img={'/public/IMG/' + SliderData[current - 1]}
            onClick={prevSlide}
          />
        ) : null}
        <Pagination img={'/public/IMG/' + SliderData[current]} />
        {current !== length - 1 ? (
          <Pagination
            img={'/public/IMG/' + SliderData[current + 1]}
            onClick={nextSlide}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Slider;