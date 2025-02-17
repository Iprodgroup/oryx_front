import styles from "./styles.module.sass";

import Image from "next/image";

const Advantages = () => {
  return (
    <ul className={styles.advantages}>
      <li>
        <Image src="/card.svg" alt="card" width={60} height={60} />
        <b>Покупки при отсутствии банковской карты</b>
      </li>
      <li>
        <Image src="/timer.svg" alt="timer" width={60} height={60} />
        <b>Экономия времени</b>
      </li>
      <li>
        <Image src="/globecard.svg" alt="globecard" width={60} height={60} />
        <b>Покупки в специальных магазинах через американскую карту</b>
      </li>
    </ul>
  );
};

export default Advantages;
