import styles from '@/styles/profile/ProfileNotifications.module.sass';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { Notification } from '@/types/notification.interface';
import ProfileLayout from '@/components/ProfileLayout/ProfileLayout';
import AddParcel from '@/components/AddParcel/AddParcel';
import instance from '@/utils/axios';
import passToken from '@/utils/passToken';
import formatDate from '@/utils/formatDate';

export const getServerSideProps = (async (context) => {
  const res = await instance.get('/profile/notifications', {
    ...passToken(context),
  });
  const notifications: Notification[] = await res.data.notifications;

  return { props: { notifications } };
}) satisfies GetServerSideProps<{ notifications: Notification[] }>;

const ProfileNotifications = ({
  notifications,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const status = +router.query.status! || 0;

  const buttons = ['Все уведомления', 'Непрочитанные', 'В пути', 'В стране'];

  const changeStatus = (index: number) => {
    router.replace({
      pathname: router.pathname,
      query: { ...router.query, status: index },
    });
  };

  const filterNotifications = () => {
    switch (status) {
      case 1:
        return notifications.filter(
          (notification) => notification.read === '0'
        );
      case 2:
        return notifications.filter(
          (notification) => notification.title === 'В пути'
        );
      case 3:
        return notifications.filter(
          (notification) => notification.title === 'В стране'
        );
      default:
        return notifications;
    }
  };

  const filteredNotifications = filterNotifications();

  return (
    <ProfileLayout>
      <div className={styles.btn}>
        <AddParcel />
      </div>
      <h1 className={styles.title}>Мои уведомления</h1>
      <p className={styles.description}>Уведомления о действиях на сайте</p>
      <div className={styles.filter}>
        {buttons.map((button, index) => (
          <button
            key={index}
            className={status === index ? styles.active : ''}
            onClick={() => changeStatus(index)}
          >
            {button}
          </button>
        ))}
      </div>
      <ul className={styles.list}>
        {filteredNotifications.map((notification) => (
          <li key={notification.id}>
            <span>{notification.title}</span>
            <p>{formatDate(notification.updated_at)}</p>
          </li>
        ))}
      </ul>
    </ProfileLayout>
  );
};

export default ProfileNotifications;
