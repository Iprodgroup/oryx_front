import { useState } from 'react';
import styles from '@/styles/BuyItForMe.module.sass';

import Head from 'next/head';

import Steps from '@/blocks/buy-it-for-me/Steps/Steps';
import Info from '@/blocks/buy-it-for-me/Info/Info';
import Advantages from '@/blocks/buy-it-for-me/Advantages/Advantages';

type Purchase = {
  id: number;
  url: string;
  characteristics: string;
  name: string;
};

const BuyItForMe = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([
    { id: 1, url: '', characteristics: '', name: '' },
  ]);

  const addPurchase = () => {
    setPurchases((prev) => [
      ...prev,
      { id: prev.length + 1, url: '', characteristics: '', name: '' },
    ]);
  };

  const removePurchase = (id: number) => {
    setPurchases((prev) => prev.filter((purchase) => purchase.id !== id));
  };

  return (
    <>
      <Head>
        <title>Сервис &quot;купите вместо меня&quot; ORYX</title>
      </Head>

      <section>
        <div className={styles.wrapper}>
          <h1>ORYX осуществит покупку вместо Вас</h1>
          <Steps />
          <form className={styles.formik}>
            <div className={styles.top}>
              <ul>
                {purchases.map((purchase) => (
                  <li key={purchase.id}>
                    <input
                      type='text'
                      placeholder='Скопируйте ссылку из магазина и вставьте сюда'
                    />
                    <input type='text' placeholder='Характеристики' />
                    <input type='text' placeholder='Введите имя товара' />
                    {purchase.id !== 1 && (
                      <button
                        type='button'
                        onClick={() => removePurchase(purchase.id)}
                      >
                        ✕
                      </button>
                    )}
                  </li>
                ))}
              </ul>
              <button type='button' onClick={addPurchase}>
                <span>+</span> Добавить еще одну покупку
              </button>
            </div>
            <div className={styles.bottom}>
              <input type='number' placeholder='Номер телефона' />
              <button type='submit'>Отправить</button>
            </div>
          </form>
          <Info />
          <Advantages />
        </div>
      </section>
    </>
  );
};

export default BuyItForMe;
