import styles from './styles.module.sass';

import classNames from 'classnames';

import { SampleNextArrow, SamplePrevArrow } from './arrows';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        className: classNames('center', styles.slider),
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 2,
        speed: 500,
        arrows: false,
      },
    },
  ],
};

export default settings;
