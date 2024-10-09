import styles from "./styles.module.sass";

import Image from "next/image";
import { useAmp } from "next/amp";
export const config = { amp: "hybrid" };

const Advantages = () => {
  const isAmp = useAmp();
  return (
    <ul className={styles.advantages}>
      <li>
        {isAmp ? (
          <amp-img src="/card.svg" alt="card" width={60} height={60} />
        ) : (
          <Image src="/card.svg" alt="card" width={60} height={60} />
        )}
        <b>Покупки при отсутствии банковской карты</b>
      </li>
      <li>
        {isAmp ? (
          <amp-img src="/timer.svg" alt="timer" width={60} height={60} />
        ) : (
          <Image src="/timer.svg" alt="timer" width={60} height={60} />
        )}
        <b>Экономия времени</b>
      </li>
      <li>
        {isAmp ? (
          <amp-img src="/globecard.svg" alt="globecard" width={60} height={60} />
        ) : (
          <Image src="/globecard.svg" alt="globecard" width={60} height={60} />
        )}
        <b>Покупки в специальных магазинах через американскую карту</b>
      </li>
    </ul>
  );
};

export default Advantages;
