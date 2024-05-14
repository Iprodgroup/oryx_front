import styles from './styles.module.sass';

import { CustomArrowProps } from 'react-slick';
import classNames from 'classnames';

export function SampleNextArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <button
      className={classNames(className, styles.slider__next)}
      style={style}
      onClick={onClick}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 24 24'
        fill='white'
      >
        <path d='M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z' />
      </svg>
    </button>
  );
}

export function SamplePrevArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <button
      className={classNames(className, styles.slider__prev)}
      style={style}
      onClick={onClick}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 24 24'
        fill='white'
      >
        <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
      </svg>
    </button>
  );
}
