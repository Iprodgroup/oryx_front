import styles from './styles.module.sass';

import Image from 'next/image';

const Advantages = () => {
  return (
    <section className={styles.advantages}>
      <div className={styles.wrapper}>
        <ul>
          <li>
            <Image src='/document.svg' alt='' width={55} height={63} />
            <div>
              <b>Экономно</b>
              <p>Наши клиенты не платят налог с продаж</p>
            </div>
          </li>
          <li>
            <Image src='/box.svg' alt='' width={55} height={63} />
            <div>
              <b>Надежно</b>
              <p>Гарантируем сохранность товаров</p>
            </div>
          </li>
          <li>
            <Image src='/time.svg' alt='' width={55} height={63} />
            <div>
              <b>Быстро</b>
              <p>Из США в Казахстан от 7 дней</p>
            </div>
          </li>
          <li>
            <Image src='/cart2.svg' alt='' width={55} height={63} />
            <div>
              <b>Просто</b>
              <p>Покупка в США в 3 простых шага</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantages;
