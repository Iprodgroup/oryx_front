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
                    Республика Казахстан, г.Алматы, улица Шевченко 118, БЦ Алтын
                    Гасыр, кабинет 133
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
                  src='https://yandex.uz/map-widget/v1/?ll=76.918402%2C43.253252&mode=search&oid=169157235939&ol=biz&sctx=ZAAAAAgBEAAaKAoSCcueBDbnUVFAERGPxMvTp0RAEhIJ7gc8MIDw1j8RmdTQBmADxD8iBgABAgMEBSgKOABA31BIAWI9cmVsZXZfcmFua2luZ19oZWF2eV9yZWxldl90dXJrX2Zvcm11bGE9MS4wOmwzX3RyX2RjNTY5MjM3X2V4cGoCdXqdAc3MTD2gAQCoAQC9AaQmDTfCAQbjqbqU9gSCAk%2FRg9C70LjRhtCwINCo0LXQstGH0LXQvdC60L4gMTE4LCDQkdCmINCQ0LvRgtGL0L0g0JPQsNGB0YvRgCwg0LrQsNCx0LjQvdC10YIgMTMzigIAkgIFMTAzMzWaAgxkZXNrdG9wLW1hcHM%3D&sll=76.918402%2C43.253252&sspn=0.089607%2C0.037893&text=%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE%20118%2C%20%D0%91%D0%A6%20%D0%90%D0%BB%D1%82%D1%8B%D0%BD%20%D0%93%D0%B0%D1%81%D1%8B%D1%80%2C%20%D0%BA%D0%B0%D0%B1%D0%B8%D0%BD%D0%B5%D1%82%20133&z=14'
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
