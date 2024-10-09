import styles from "./styles.module.sass";

import Image from "next/image";
import { useAmp } from "next/amp";
export const config = { amp: "hybrid" };

const Advantages = () => {
  const isAmp = useAmp();

  return (
    <section className={styles.advantages}>
      <div className={styles.wrapper}>
        <ul>
          <li>
            {isAmp ? (
              <amp-img
                src="/document.svg"
                alt="document"
                width={55}
                height={63}
              />
            ) : (
              <Image
                src="/document.svg"
                alt="document"
                width={55}
                height={63}
              />
            )}
            <div>
              <b>Экономно</b>
              <p>Наши клиенты не платят налог с продаж</p>
            </div>
          </li>
          <li>
            {isAmp ? (
              <amp-img src="/box.svg" alt="box" width={55} height={63} />
            ) : (
              <Image src="/box.svg" alt="box" width={55} height={63} />
            )}

            <div>
              <b>Надежно</b>
              <p>Гарантируем сохранность товаров</p>
            </div>
          </li>
          <li>
            {isAmp ? (
              <amp-img src="/time.svg" alt="time" width={55} height={63} />
            ) : (
              <Image src="/time.svg" alt="time" width={55} height={63} />
            )}
            <div>
              <b>Быстро</b>
              <p>Из США в Казахстан от 7 дней</p>
            </div>
          </li>
          <li>
            {isAmp ? (
              <amp-img src="/cart2.svg" alt="cart2" width={55} height={63} />
            ) : (
              <Image src="/cart2.svg" alt="cart2" width={55} height={63} />
            )}
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
