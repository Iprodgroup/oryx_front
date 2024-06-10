import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styles from '@/styles/profile/ProfileParcels.module.sass';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import axios from 'axios';

import { ArrowDownIcon, ArrowRightIcon } from '@/components/icons/arrows';
import { Parcel } from '@/types/parcel.interface';
import ProfileLayout from '@/components/ProfileLayout/ProfileLayout';
import AddParcel from '@/components/AddParcel/AddParcel';
import TrashIcon from '@/components/icons/Trash';
import PenIcon from '@/components/icons/Pen';
import instance from '@/utils/axios';
import passToken from '@/utils/passToken';
import statuses from '@/utils/statuses';
import formatDate from '@/utils/formatDate';

export const getServerSideProps = (async (context) => {
  const res = await instance.get<{ items: Parcel[] }>('/profile/parcels', {
    ...passToken(context),
    params: {
      status: context.query.status,
    },
  });
  const parcels = res.data.items;

  return { props: { parcels } };
}) satisfies GetServerSideProps<{ parcels: Parcel[] }>;

const ProfileParcels = ({
  parcels,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [isDisplay, setIsDisplay] = useState<{
    state: boolean;
    data: Partial<Parcel>;
  }>({
    state: false,
    data: {},
  });
  const [search, setSearch] = useState('');

  const router = useRouter();

  const toggleDisplay = (data: Parcel) => {
    setIsDisplay((prev) => ({ state: !prev.state, data }));
  };

  const changeStatus = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === '') {
      const { status, ...restQuery } = router.query;

      router.replace({
        pathname: router.pathname,
        query: restQuery,
      });

      return;
    }

    router.replace({
      pathname: router.pathname,
      query: { ...router.query, status: event.target.value },
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // @ts-ignore
    setSearch(event.target[0].value);
  };

  const deleteParcel = async (id: number) => {
    const loadingToastId = toast.loading('Загрузка...');

    try {
      await axios.delete(`/api/profile/delete-parcel/${id}`);

      toast.success('Посылка удалена');

      router.replace(router.asPath);
    } catch (error) {
      toast.error('Ошибка при удалении посылки');
    } finally {
      toast.dismiss(loadingToastId);
    }
  };

  useEffect(() => {
    setIsDisplay({ state: false, data: {} });
  }, [router]);

  return (
    <ProfileLayout>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h1>Список ваших посылок</h1>
          <p>Вся информация о ваших посылках и их статусах</p>
          <form className={styles.formik} onSubmit={handleSubmit}>
            <input type='search' placeholder='Поиск по треку' />
            <select
              name='status'
              defaultValue={router.query.status}
              onChange={changeStatus}
            >
              <option value=''>Все</option>
              {statuses.map((status) => (
                <option key={status.key} value={status.key}>
                  {status.value}
                </option>
              ))}
            </select>
            <button type='submit'>Поиск</button>
            <button type='reset'>Очистить</button>
          </form>
          <div className={styles.data}>
            <table>
              <tbody>
                <tr>
                  <th>Трек-код</th>
                  <th>Статус</th>
                  <th>Стоимость доставки</th>
                  <th>Дата добавления</th>
                  <th>Направление</th>
                  <th></th>
                </tr>
                {parcels
                  .filter((parcel) => parcel.track.includes(search))
                  .map((parcel) => (
                    <tr key={parcel.id}>
                      <td>{parcel.track}</td>
                      <td>{statuses[+parcel.status].value}</td>
                      {+parcel.prod_price > 0 ? (
                        <td>{parcel.prod_price}$</td>
                      ) : (
                        <td>Не указано</td>
                      )}
                      <td>{formatDate(parcel.created_at)}</td>
                      <td>
                        {+parcel.city_out === 1 ? 'Нью-Йорк' : 'Делавэр'} -{' '}
                        {parcel.city}
                      </td>
                      <td>
                        <button onClick={() => deleteParcel(parcel.id)}>
                          <TrashIcon />
                        </button>
                        <button>
                          <PenIcon />
                        </button>
                        <button onClick={() => toggleDisplay(parcel)}>
                          {isDisplay.state &&
                          isDisplay.data.id === parcel.id ? (
                            <ArrowDownIcon />
                          ) : (
                            <ArrowRightIcon />
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {isDisplay.state && (
              <div className={styles.bottom}>
                <table>
                  <tbody>
                    <tr>
                      <th>Наименование товара</th>
                      {isDisplay.data.goods?.map((item) => (
                        <td key={item.id}>{item.name}</td>
                      ))}
                    </tr>
                    <tr>
                      <th>Стоимость</th>
                      {isDisplay.data.goods?.map((item) => (
                        <td key={item.id}>{item.price}$</td>
                      ))}
                    </tr>
                    {/* <tr>
                      <th>Получатель</th>
                      {isDisplay.data.goods?.map((item) => (
                        <td key={item.id}>{isDisplay.data.recipient_id}</td>
                      ))}
                    </tr> */}
                    <tr>
                      <th>Город</th>
                      {isDisplay.data.goods?.map((item) => (
                        <td key={item.id}>{isDisplay.data.city}</td>
                      ))}
                    </tr>
                    {/* <tr>
                      <th>Адрес</th>
                      <td>TEST</td>
                    </tr>
                    <tr>
                      <th>Телефон</th>
                      <td>TEST</td>
                    </tr>
                    <tr>
                      <th>Оплата</th>
                      <td>TEST</td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
        <div className={styles.right}>
          <AddParcel />
        </div>
      </div>
    </ProfileLayout>
  );
};

export default ProfileParcels;
