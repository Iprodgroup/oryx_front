import styles from '@/styles/profile/Profile.module.sass';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Link from 'next/link';

import { User } from '@/types/user.interface';
import ProfileLayout from '@/components/ProfileLayout/ProfileLayout';
import instance from '@/utils/axios';
import passToken from '@/utils/passToken';

export const getServerSideProps = (async (context) => {
  const res = await instance.get('/user', { ...passToken(context) });
  const user: User = await res.data;

  return { props: { user } };
}) satisfies GetServerSideProps<{ user: User }>;

const Profile = ({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <ProfileLayout>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          {user.fio && <b>{user.fio}</b>}
          <ul>
            <li>
              <span>ID:</span> #{user.id}
            </li>
            <li>
              <span>Email:</span> {user.email}
            </li>
            <li>
              <span>Телефон:</span> +{user.phone}
            </li>
          </ul>
          <Link href='/profile/settings'>Посмотреть все данные</Link>
          {user.email === 'erke-naz342@mail.ru' && <strong>VIP</strong>}
        </div>
        <div className={styles.card}>
          <b>Мои посылки</b>
          <p>Просмотр статуса и добавление новых посылок</p>
          <p>Активных посылок ({user.parcelActiveCount})</p>
          <Link href='/profile/parcels'>Узнать подробнее</Link>
        </div>
        <div className={styles.card}>
          <b>Транзакции</b>
          <p>История совершенных транзакций</p>
          <Link href='/profile/transactions'>Узнать подробнее</Link>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Profile;
