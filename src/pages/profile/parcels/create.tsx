import { ChangeEvent, FormEvent, useState } from 'react';
import styles from '@/styles/profile/CreateParcel.module.sass';

import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import toast from 'react-hot-toast';
import axios from 'axios';

import { Recipient } from '@/types/recipient.interface';
import ProfileLayout from '@/components/ProfileLayout/ProfileLayout';
import AddParcel from '@/components/AddParcel/AddParcel';
import instance from '@/utils/axios';
import passToken from '@/utils/passToken';
import cities from '@/utils/cities';

type Parcel = {
  id: number;
  name: string;
  currency: 'USD' | 'EUR';
  price: number;
};

export const getServerSideProps = (async (context) => {
  const res = await instance.get<{ recipients: Recipient[] }>(
    '/profile/settings',
    {
      ...passToken(context),
    }
  );
  const recipients = res.data.recipients;

  return { props: { recipients } };
}) satisfies GetServerSideProps<{ recipients: Recipient[] }>;

const CreateParcel = ({
  recipients,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [parcels, setParcels] = useState<Parcel[]>([
    { id: 1, name: '', currency: 'USD', price: 0 },
  ]);
  const router = useRouter();

  const total = parcels.reduce((acc, cur) => acc + cur.price, 0);

  const addParcel = () => {
    setParcels((prev) => [
      ...prev,
      { id: prev.length + 1, name: '', currency: 'USD', price: 0 },
    ]);
  };

  const removeParcel = (id: number) => {
    setParcels((prev) => prev.filter((parcel) => parcel.id !== id));
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    id: number,
    type: 'name' | 'price'
  ) => {
    const newArr = parcels.map((parcel) => {
      if (parcel.id === id) {
        if (type === 'name') {
          return { ...parcel, name: event.target.value };
        } else {
          return { ...parcel, price: +event.target.value };
        }
      } else {
        return parcel;
      }
    });

    setParcels(newArr);
  };

  const getObjectById = (id: number) =>
    parcels.find((parcel) => parcel.id === id);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loadingToastId = toast.loading('Загрузка...');

    try {
      const formData = new FormData(event.currentTarget);
      const postData = Object.fromEntries(formData);

      const goods: {
        name: Parcel['name'][];
        currency: Parcel['currency'][];
        price: Parcel['price'][];
      } = {
        name: [],
        currency: [],
        price: [],
      };

      parcels.forEach((parcel) => {
        goods.name.push(parcel.name);
        goods.currency.push(parcel.currency);
        goods.price.push(parcel.price);
      });

      await axios.post('/api/profile/add-parcel', {
        ...postData,
        goods,
      });

      router.push('/profile/parcels');
    } catch (error) {
      toast.error('Ошибка при добавлении посылки');
    } finally {
      toast.dismiss(loadingToastId);
    }
  };

  return (
    <ProfileLayout>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h1>Добавление посылки</h1>
          <form className={styles.card} onSubmit={handleSubmit}>
            <div className={styles.head}>
              <label htmlFor='departure'>
                Город отправки
                <select name='city_out' id='departure' defaultValue='2'>
                  <option value='1'>Адрес в Нью-Йорке</option>
                  <option value='2'>Адрес в Делавэр</option>
                </select>
              </label>
              <label htmlFor='delivery'>
                Город доставки
                <select name='city' id='delivery' defaultValue='Алматы'>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </label>
              <div className={styles.flex}>
                <label htmlFor='track'>
                  Номер трекинга
                  <input type='text' name='track' id='track' required />
                </label>
                <p>
                  Трекинг-номер – это номер, по которому отслеживается доставка
                  посылки в курьерской службе. Не путать с номером заказа.
                </p>
              </div>
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
                      value={getObjectById(parcel.id)?.name}
                      onChange={(event) =>
                        handleChange(event, parcel.id, 'name')
                      }
                      required
                    />
                  </label>
                  <select defaultValue='USD'>
                    <option value='USD'>$</option>
                    <option value='EUR'>€</option>
                  </select>
                  <label htmlFor='price'>
                    Стоимость
                    <input
                      type='number'
                      id='price'
                      placeholder='Введите сумму'
                      value={getObjectById(parcel.id)?.price || ''}
                      onChange={(event) =>
                        handleChange(event, parcel.id, 'price')
                      }
                      required
                    />
                  </label>
                  {parcel.id !== 1 && (
                    <button
                      type='button'
                      onClick={() => removeParcel(parcel.id)}
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
              Получатель{' '}
              <select name='recipient_id' required>
                {recipients.map((recipient) => (
                  <option key={recipient.id} value={recipient.id}>
                    {recipient.surname} {recipient.name} {recipient.fname}
                  </option>
                ))}
              </select>
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
