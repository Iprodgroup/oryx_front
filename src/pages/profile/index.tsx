import styles from '@/styles/profile/Profile.module.sass';

import Link from 'next/link';

import ProfileLayout from '@/components/ProfileLayout/ProfileLayout';

const Profile = () => {
  return (
    <ProfileLayout>
      <div className={styles.cards}>
        <div className={styles.card}>
          <b>irina admin</b>
          <ul>
            <li>
              <span>ID:</span> #15730
            </li>
            <li>
              <span>Email:</span> erke-naz342@mail.ru
            </li>
            <li>
              <span>Телефон:</span> +5 (555) 555-55-55
            </li>
          </ul>
          <Link href='/profile/settings'>Посмотреть все данные</Link>
          <strong>VIP</strong>
        </div>
        <div className={styles.card}>
          <b>Мои посылки</b>
          <p>Просмотр статуса и добавление новых посылок</p>
          <p>Активных посылок (2)</p>
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
