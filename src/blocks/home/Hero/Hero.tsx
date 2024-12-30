import styles from "./styles.module.sass";
import Link from "next/link";
import Image from "next/image";
import { responsiveImg } from "@/utils/image";
import { useIsClient, useMediaQuery } from "usehooks-ts";

const Hero = () => {
  const isClient = useIsClient();
  const matches = {
    768: useMediaQuery("(min-width: 768px)"),
  };

  return (
    <section className={styles.hero}>
      <noscript>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h1>
              Доставка <span>посылок</span> из США в <span>Казахстан</span>
            </h1>
            <p>
              Покупайте в любых интернет-магазинах Америки, а мы гарантируем
              быструю доставку. Регистрируйтесь сейчас и откройте себе доступ к
              лучшим товарам и акциям из США. Просто, Надежно и Удобно.
            </p>
            <Link href="/register" className={styles.redBtn}>
              Зарегистрируйтесь!
            </Link>
          </div>
          <div className={styles.right}>
            <Image
              src="/plane.png"
              alt="plane"
              width={540}
              height={300}
              priority
            />
          </div>
        </div>
      </noscript>

      {/* Версия с использованием JavaScript */}
      {isClient && (
        <div className={styles.wrapper}>
          {matches[768] ? (
            <>
              <div className={styles.left}>
                <h1>
                  Доставка <span>посылок</span> из США в <span>Казахстан</span>
                </h1>
                <p>
                  Покупайте в любых интернет-магазинах Америки, а мы гарантируем
                  быструю доставку. Регистрируйтесь сейчас и откройте себе
                  доступ к лучшим товарам и акциям из США. Просто, Надежно и
                  Удобно.
                </p>
                <Link href="/register" className={styles.redBtn}>
                  Зарегистрируйтесь!
                </Link>
              </div>
              <div className={styles.right}>
                <Image
                  src="/plane.png"
                  alt="plane"
                  {...responsiveImg}
                  priority
                />
              </div>
            </>
          ) : (
            <>
              <div className={styles.left}>
                <h1>
                  Доставка <span>посылок</span> из США в <span>Казахстан</span>
                </h1>
                <Image
                  src="/plane.png"
                  alt="plane"
                  {...responsiveImg}
                  priority
                />
              </div>
              <div className={styles.right}>
                <Link href="/register" className={styles.redBtn}>
                  Зарегистрируйтесь!
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default Hero;
