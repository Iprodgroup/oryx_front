import { useState } from 'react';
import styles from '@/styles/profile/CreateParcel.module.sass';

import Link from 'next/link';

import ProfileLayout from '@/components/ProfileLayout/ProfileLayout';
import AddParcel from '@/components/AddParcel/AddParcel';

type Parcel = {
  id: number;
  name: string;
  currency: 'usd' | 'eur';
  price: number;
};

const CreateParcel = () => {
  const [parcels, setParcels] = useState<Parcel[]>([
    { id: 1, name: '', currency: 'usd', price: 0 },
  ]);

  const total = parcels.reduce((acc, cur) => acc + cur.price, 0);

  const addParcel = () => {
    setParcels((prev) => [
      ...prev,
      { id: prev.length + 1, name: '', currency: 'usd', price: 0 },
    ]);
  };

  const remoevParcel = (id: number) => {
    setParcels((prev) => prev.filter((parcel) => parcel.id !== id));
  };

  return (
    <ProfileLayout>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h1>Добавление посылки</h1>
          <form className={styles.card}>
            <div className={styles.head}>
              <label htmlFor='track'>
                Номер трекинга
                <input type='number' id='track' />
              </label>
              <p>
                Трекинг-номер – это номер, по которому отслеживается доставка
                посылки в курьерской службе. Не путать с номером заказа.
              </p>
            </div>
            <ul>
              {parcels.map((parcel) => (
                <li key={parcel.id}>
                  <label htmlFor='declaration'>
                    Декларация
                    <input
                      type='text'
                      id='declaration'
                      placeholder='Наименование'
                    />
                  </label>
                  <select name='currency' defaultValue='usd'>
                    <option value='usd'>$</option>
                    <option value='eur'>€</option>
                  </select>
                  <label htmlFor='price'>
                    Стоимость
                    <input
                      type='number'
                      id='price'
                      placeholder='Введите сумму'
                    />
                  </label>
                  {parcel.id !== 1 && (
                    <button
                      type='button'
                      onClick={() => remoevParcel(parcel.id)}
                    >
                      ✕
                    </button>
                  )}
                </li>
              ))}
            </ul>
            <strong>Итого: {total}$</strong>
            <button
              type='button'
              onClick={addParcel}
              className={styles.product__btn}
            >
              Добавить еще один товар
            </button>
            <div className={styles.recipient}>
              Получатель <span>TEST TEST1 TEST2</span>
            </div>
            <div className={styles.btns}>
              <button type='submit'>Сохранить</button>
              <button type='reset'>Отменить</button>
            </div>
          </form>
        </div>
        <div className={styles.right}>
          <AddParcel />
          <p>
            ВНИМАНИЕ! *Во избежание проблем при таможенной очистке, просим
            вводить детальное описание наименования товара на русском
          </p>
          <Link href='/prohibited'>Смотреть список запрещенных товаров</Link>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default CreateParcel;
