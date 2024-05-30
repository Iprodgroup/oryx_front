import styles from '@/styles/Contacts.module.sass';

import { useIsClient, useMediaQuery } from 'usehooks-ts';
import Head from 'next/head';

const Contacts = () => {
  const isClient = useIsClient();
  const matches = {
    768: useMediaQuery('(min-width: 768px)'),
  };

  return (
    isClient && (
      <>
        <Head>
          <title>
            Контакты компании по доставке товаров из США в Казахстан
          </title>
        </Head>

        <section>
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <h2>Контакты</h2>
              {!matches[768] && <span>Мы всегда рады вас видеть!</span>}
              <ul>
                <li>
                  <b>Адрес:</b>
                  <p>
                    Республика Казахстан, г.Алматы, ул.Макатаева, д.125, офис 5,
                    вход в здание с торца
                  </p>
                </li>
                <li>
                  <b>Телефон:</b>
                  <a href='tel:+77003232222'>+7 700 323 22 22</a>
                </li>
                <li>
                  <b>Email:</b>
                  <a href='mailto:ofis@orix.kz'>ofis@orix.kz</a>
                </li>
                <li>
                  <b>Whatsapp</b>
                  <a href='https://wa.me/77475155613' target='_blank'>
                    +7 747 515 5613
                  </a>
                </li>
                <li>
                  <b>Instagram</b>
                  <a
                    href='https://www.instagram.com/oryx.usa.kz/'
                    target='_blank'
                  >
                    @oryx.usa.kz
                  </a>
                </li>
                <li>
                  <b>Руководитель компании:</b>
                  <strong>Бейсембаев Бауыржан</strong>
                  <a href='mailto:b.beysembaev@oryx.kz'>b.beysembaev@oryx.kz</a>
                  <a href='tel:+77025917355'>+7 702 591 73 55</a>
                </li>
              </ul>
            </div>
            <div className={styles.right}>
              <div
                style={{ position: 'relative', overflow: 'hidden' }}
                className={styles.map}
              >
                <a
                  href='https://yandex.uz/maps/162/almaty/?utm_medium=mapframe&utm_source=maps'
                  style={{
                    color: '#eee',
                    fontSize: 12,
                    position: 'absolute',
                    top: 0,
                  }}
                >
                  Алматы
                </a>
                <a
                  href='https://yandex.uz/maps/162/almaty/house/Y08YfwVlT0EPQFppfX53c3ViYw==/?indoorLevel=1&ll=76.925649%2C43.262917&utm_medium=mapframe&utm_source=maps&z=16.68'
                  style={{
                    color: '#eee',
                    fontSize: 12,
                    position: 'absolute',
                    top: 14,
                  }}
                >
                  Улица Мукагали Макатаева, 125 — Яндекс&nbsp;Карты
                </a>
                <iframe
                  src='https://yandex.uz/map-widget/v1/?indoorLevel=1&ll=76.925649%2C43.262917&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg2NzMwMDE5NhJV0prQsNC30LDSm9GB0YLQsNC9LCDQkNC70LzQsNGC0YssINCc0rHSm9Cw0pPQsNC70Lgg0JzQsNKb0LDRgtCw0LXQsiDQutOp0YjQtdGB0ZYsIDEyNSIKDe7ZmUIVOg0tQg%2C%2C&z=16.68'
                  allowFullScreen
                  style={{ position: 'relative' }}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    )
  );
};

export default Contacts;
