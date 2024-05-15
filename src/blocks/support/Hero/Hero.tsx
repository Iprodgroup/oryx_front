import styles from './styles.module.sass';

import Image from 'next/image';

import { responsiveImg } from '@/utils/image';

const Hero = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Image src='/hero-support.svg' alt='' {...responsiveImg} />
        </div>
        <div className={styles.right}>
          <h2>Условия сервиса и стоимость</h2>
          <p>
            Компания ORYX – является мэйлфорвард сервисом, который предоставляет
            каждому клиенту бесплатный адрес в США в безналоговом штате для
            приема, хранения и дальнейшей отправки Ваших покупок. Для нас нет
            невыполнимых задач в сфере шопинга и доставки из США! Сделать фото,
            проверить размеры, вернуть товар в магазин или поменять его? Легко!
            Стоимость таких спецзапросов определяется отдельно и зависит от их
            сложности. По всем вопросам обращайтесь к менеджерам, которые с
            радостью Вас проконсультируют.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
