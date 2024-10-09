import styles from "./styles.module.sass";

import Image from "next/image";
import { useAmp } from "next/amp";
export const config = { amp: "hybrid" };

const Info = () => {
  const isAmp = useAmp();

  return (
    <ul className={styles.info}>
      <li>
        {isAmp ? (
          <amp-img src="/note.svg" alt="note" width={45} height={45} />
        ) : (
          <Image src="/note.svg" alt="note" width={45} height={45} />
        )}
        <b>Условия сервиса</b>
      </li>
      <li>
        <p>
          Скопируйте ссылку на товар из интернет-магазина и вставьте его на
          нашей странице «Купи вместо меня». Затем необходимо указать детали
          заказа (количество, цвет, размер и т. д.) и оплатить покупку. Мы
          попытаемся совершить покупку в течение 1 раб. дня. Для декларирования
          посылки основанием послужит инвойс, который выдает магазин. После
          совершения покупки, декларированная цена товара не подлежит изменению.
          В случае возникновения вопросов звоните пн - пт 11:30 - 15:30.
        </p>
      </li>
      <li>
        {isAmp ? (
          <amp-img src="/bag.svg" alt="bag" width={45} height={45} />
        ) : (
          <Image src="/bag.svg" alt="bag" width={45} height={45} />
        )}
        <b>Стоимость услуги</b>
      </li>
      <li>
        <p>
          Стоимость услуги составляет 7% от общей стоимости заказа (мин. 7$). В
          случае специальных магазинов, дополнительно 7% (мин. 7$) взимается за
          каждую ссылку.
        </p>
      </li>
      <li>
        {isAmp ? (
          <amp-img src="/starcart.svg" alt="starcart" width={45} height={45} />
        ) : (
          <Image src="/starcart.svg" alt="starcart" width={45} height={45} />
        )}
        <b>Специальные магазины</b>
      </li>
      <li>
        <p>
          Есть ряд магазинов, которые не доставляют на адреса складов. Для
          покупки из данных магазинов необходимо воспользоваться услугой
          транспортировки от нашего партнера.
        </p>
      </li>
    </ul>
  );
};

export default Info;
