import { FormEvent, useState } from 'react';
import styles from '@/styles/BuyItForMe.module.sass';

import { InputMask } from '@react-input/mask';
import Head from 'next/head';
import axios from 'axios';
import toast from 'react-hot-toast';

import { unformatPhoneNumber } from '@/utils/phoneNumber';
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

  const handleInputChange = (
    id: number,
    field: keyof Purchase,
    value: string
  ) => {
    setPurchases((prev) =>
      prev.map((purchase) =>
        purchase.id === id ? { ...purchase, [field]: value } : purchase
      )
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loadingToastId = toast.loading('Загрузка...');

    try {
      const formData = new FormData(event.currentTarget);

      let text = `PHONE: ${unformatPhoneNumber(
        formData.get('phone')?.toString()!
      )}`;

      purchases.forEach((purchase) => {
        text += `\n\nLINK: ${purchase.url}\nINFO: ${purchase.characteristics}\nNAME: ${purchase.name}`;
      });

      await axios.post('/api/send', {
        subject: 'Купите вместо меня',
        text,
      });

      toast.success('Запрос отправлен');
    } catch (error) {
      toast.error('Ошибка при покупке');
    } finally {
      toast.dismiss(loadingToastId);
    }
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
          <form className={styles.formik} onSubmit={handleSubmit}>
            <div className={styles.top}>
              <ul>
                {purchases.map((purchase) => (
                  <li key={purchase.id}>
                    <input
                      type='url'
                      placeholder='Скопируйте ссылку из магазина и вставьте сюда'
                      value={purchase.url}
                      onChange={(e) =>
                        handleInputChange(purchase.id, 'url', e.target.value)
                      }
                      required
                    />
                    <input
                      type='text'
                      placeholder='Характеристики'
                      value={purchase.characteristics}
                      onChange={(e) =>
                        handleInputChange(
                          purchase.id,
                          'characteristics',
                          e.target.value
                        )
                      }
                      required
                    />
                    <input
                      type='text'
                      placeholder='Введите имя товара'
                      value={purchase.name}
                      onChange={(e) =>
                        handleInputChange(purchase.id, 'name', e.target.value)
                      }
                      required
                    />
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
              <InputMask
                mask='+7 (___) ___-__-__'
                replacement={{ _: /\d/ }}
                name='phone'
                placeholder='+7 (___) ___-__-__'
                required
              />
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
