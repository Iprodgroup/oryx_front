import styles from "./styles.module.sass";

import Image from "next/image";
import { responsiveImg } from "@/utils/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <link rel="canonical" href="https://oryx.kz/o-kompanii" />
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div>
          <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
          color: "#706e6e",
        }}
      >
        <Link href="/" style={{ textDecoration: "underline" }}>
          Главная
        </Link>
        / О нас
      </div>
          <Image src="/hero-about.svg" alt="about" {...responsiveImg} />
          </div>
          
        </div>
        <div className={styles.right}>
          <h1>О Нас</h1>
          <p>
            ORYX – это надежный мейлфорвардер, имеющий собственный
            автоматизированный склад в безналоговом штате Америки. Покупка и
            доставка из США любых товаров – наша основная деятельность. Мы
            сотрудничаем с лучшими перевозчиками долго и плодотворно благодаря
            этому готовы предложить доступную стоимость доставки.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
