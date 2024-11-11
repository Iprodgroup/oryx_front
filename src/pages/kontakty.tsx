import styles from "@/styles/Contacts.module.sass";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import Head from "next/head";
import Link from "next/link";

const Contacts = () => {
  // Проверяем, был ли выполнен рендер на клиенте
  const isClient = useIsClient();
  const matches = {
    768: useMediaQuery("(min-width: 768px)"),
  };

  // Статичный контент, который будет отображаться, если JS выключен
  const fallbackContent = (
    <>
      <h1>Контакты</h1>
      <p>Мы всегда рады вас видеть!</p>
      <ul>
        <li>
          <b>Адрес:</b>
          <p>
            Республика Казахстан, г.Алматы, улица Шевченко 118, БЦ Алтын
            Гасыр, кабинет 133
          </p>
        </li>
        <li>
          <b>Телефон:</b>
          <a href="tel:+77003232222">+7 700 323 22 22</a>
        </li>
        <li>
          <b>Email:</b>
          <a href="mailto:info@oryx.kz">info@oryx.kz</a>
        </li>
        <li>
          <b>Whatsapp</b>
          <a href="https://wa.me/77475155613" target="_blank">
            +7 747 515 5613
          </a>
        </li>
        <li>
          <b>Instagram</b>
          <a href="https://www.instagram.com/oryx.usa.kz/" target="_blank">
            @oryx.usa.kz
          </a>
        </li>
        <li>
          <b>Руководитель компании:</b>
          <strong>Бейсембаев Бауыржан</strong>
          <a href="mailto:b.beysembaev@oryx.kz">b.beysembaev@oryx.kz</a>
          <a href="tel:+77025917355">+7 702 591 73 55</a>
        </li>
      </ul>
    </>
  );

  return (
    <>
      <Head>
        <title>Контакты компании Oryx. Доставка товаров из США в Казахстан</title>
        <meta
          name="description"
          content="Адрес: 📍 Республика Казахстан, г.Алматы, улица Шевченко 118, БЦ Алтын Гасыр, кабинет 133📍
        📱 Телефон: +7 700 323 22 22 📱
        📧 Email: info@oryx.kz
        📧 Whatsapp +7 747 515 5613"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Контакты компании Oryx. Доставка товаров из США в Казахстан"
        />
        <meta
          property="og:description"
          content="Адрес: 📍 Республика Казахстан, г.Алматы, улица Шевченко 118, БЦ Алтын Гасыр, кабинет 133📍
        📱 Телефон: +7 700 323 22 22 📱
        📧 Email: info@oryx.kz
        📧 Whatsapp +7 747 515 5613"
        />
        <meta property="og:url" content="https://oryx.kz/kontakty" />
        <meta
          property="og:site_name"
          content="Контакты компании Oryx. Доставка товаров из США в Казахстан"
        />
        <meta property="og:image" content="https://oryx.kz/logo.svg" />
      </Head>

      {/* Контент будет отображаться только после проверки клиента */}
      <section>
        <link rel="canonical" href="https://oryx.kz/kontakty" />
        <div className={styles.wrapper}>
          <div className={styles.left}>
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
              / Контакты
            </div>
            {isClient ? (
              <>
                <h1>Контакты</h1>
                {!matches[768] && <span>Мы всегда рады вас видеть!</span>}
              </>
            ) : (
              fallbackContent
            )}

            <ul>
              <li>
                <b>Адрес:</b>
                <p>
                  Республика Казахстан, г.Алматы, улица Шевченко 118, БЦ Алтын
                  Гасыр, кабинет 133
                </p>
              </li>
              <li>
                <b>Телефон:</b>
                <a href="tel:+77003232222">+7 700 323 22 22</a>
              </li>
              <li>
                <b>Email:</b>
                <a href="mailto:info@oryx.kz">info@oryx.kz</a>
              </li>
              <li>
                <b>Whatsapp</b>
                <a href="https://wa.me/77475155613" target="_blank">
                  +7 747 515 5613
                </a>
              </li>
              <li>
                <b>Instagram</b>
                <a href="https://www.instagram.com/oryx.usa.kz/" target="_blank">
                  @oryx.usa.kz
                </a>
              </li>
              <li>
                <b>Руководитель компании:</b>
                <strong>Бейсембаев Бауыржан</strong>
                <a href="mailto:b.beysembaev@oryx.kz">b.beysembaev@oryx.kz</a>
                <a href="tel:+77025917355">+7 702 591 73 55</a>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <div
              style={{ position: "relative", overflow: "hidden" }}
              className={styles.map}
            >
              <a
                href="https://yandex.uz/maps/162/almaty/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#eee",
                  fontSize: 12,
                  position: "absolute",
                  top: 0,
                }}
              >
                Алматы
              </a>
              <a
                href="https://yandex.uz/maps/162/almaty/house/Y08YfwVlT0EPQFppfX53c3ViYw==/?indoorLevel=1&ll=76.925649%2C43.262917&utm_medium=mapframe&utm_source=maps&z=16.68"
                style={{
                  color: "#eee",
                  fontSize: 12,
                  position: "absolute",
                  top: 14,
                }}
              >
                Улица Мукагали Макатаева, 125 — Яндекс&nbsp;Карты
              </a>
              <iframe
                src="https://yandex.uz/map-widget/v1/?ll=76.918402%2C43.253252&mode=search&oid=169157235939&ol=biz&sctx=ZAAAAAgBEAAaKAoSCcueBDbnUVFAERGPxMvTp0RAEhIJ7gc8MIDw1j8RmdTQBmADxD8iBgABAgMEBSgKOABA31BIAWI9cmVsZXZfcmFua2luZ19oZWF2eV9yZWxldl90dXJrX2Zvcm11bGE9MS4wOmwzX3RyX2RjNTY5MjM3X2V4cGoCdXqdAc3MTD2gAQCoAQC9AaQmDTfCAQbjqbqU9gSCAk%2FRg9C70LjRhtC%2F8D4GsRlnoNmRmlMeaAHRB%2F0Ahr1cH07V0wbh9AAViAmjzru9pWaDw%3D%3D&z=14.92"
                frameBorder="0"
                className={styles.map__iframe}
                title="Контакты"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
