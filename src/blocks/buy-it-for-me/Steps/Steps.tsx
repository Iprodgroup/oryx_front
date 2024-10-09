import styles from "./styles.module.sass";

import Image from "next/image";
import { useAmp } from "next/amp";

import { responsiveImg } from "@/utils/image";
export const config = { amp: "hybrid" };

const Steps = () => {
  const isAmp = useAmp();

  return (
    <ul className={styles.steps}>
      <li className={styles.item}>
        <div className={styles.img}>
          <span className={styles.num}>1</span>
          {isAmp ? (
            <amp-img src="/website.svg" alt="website" width={50} height={50} />
          ) : (
            <Image src="/website.svg" alt="website" width={50} height={50} />
          )}
        </div>
        <span>Отправьте нам ссылку</span>
      </li>
      <li>
        {isAmp ? (
          <amp-img
            src="/arrow-right-long.svg"
            alt="arrow-right-long"
            width={50}
            height={50}
          />
        ) : (
          <Image
            src="/arrow-right-long.svg"
            alt="arrow-right-long"
            width={50}
            height={50}
          />
        )}
      </li>
      <li className={styles.item}>
        <div className={styles.img}>
          <span className={styles.num}>2</span>
          {isAmp ? (
            <amp-img src="/bags.svg" alt="bags" width={50} height={50} />
          ) : (
            <Image src="/bags.svg" alt="bags" width={50} height={50} />
          )}
        </div>
        <span>Мы осуществляем покупку</span>
      </li>
      <li>
        {isAmp ? (
          <amp-img
            src="/arrow-right-long.svg"
            alt="arrow-right-long"
            {...responsiveImg}
          />
        ) : (
          <Image
            src="/arrow-right-long.svg"
            alt="arrow-right-long"
            {...responsiveImg}
          />
        )}
      </li>
      <li className={styles.item}>
        <div className={styles.img}>
          <span className={styles.num}>3</span>
          {isAmp ? (
            <amp-img src="/globe.svg" alt="globe" width={50} height={45} />
          ) : (
            <Image src="/globe.svg" alt="globe" width={50} height={45} />
          )}
        </div>
        <span>Получи посылку в Казахстане</span>
      </li>
    </ul>
  );
};

export default Steps;
