import { FormEvent } from 'react';
import styles from '@/styles/profile/ProfileSettings.module.sass';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import axios from 'axios';
import toast from 'react-hot-toast';

import { User } from '@/types/user.interface';
import ProfileLayout from '@/components/ProfileLayout/ProfileLayout';
import CheckIcon from '@/components/icons/Check';
import AddRecipientModal from '@/components/modal/AddRecipientModal/AddRecipientModal';
import instance from '@/utils/axios';
import passToken from '@/utils/passToken';

export const getServerSideProps = (async (context) => {
  const res = await instance.get('/user', { ...passToken(context) });
  const user: User = await res.data;

  return { props: { user } };
}) satisfies GetServerSideProps<{ user: User }>;

const ProfileSettings = ({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const [surname, name, fname, email, phone, password] = [
      'surname',
      'name',
      'fname',
      'email',
      'phone',
      'password',
    ].map((name) => formData.get(name));

    const loadingToastId = toast.loading('Загрузка...');

    const { status } = await axios.post('/api/profile/settings', {
      surname,
      name,
      fname,
      email,
      phone,
      password,
    });

    toast.dismiss(loadingToastId);

    if (status === 200) {
      toast.success('Данные обновлены');
    } else {
      toast.error('Что-то пошло не так');
    }
  };

  return (
    <ProfileLayout>
      <h1 className={styles.title}>Личные данные пользователя</h1>
      <p className={styles.description}>
        В данном разделе собрана вся ваша персональная информация
      </p>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.head}>
            <b>Мои данные</b>
            <span>ID: #{user.id}</span>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='surname'
              placeholder='Фамилия*'
              defaultValue={user.surname}
              required
            />
            <input
              type='text'
              name='name'
              placeholder='Имя*'
              defaultValue={user.name}
              required
            />
            <input
              type='text'
              name='fname'
              placeholder='Отчество'
              defaultValue={user.fname}
            />
            <input
              type='email'
              name='email'
              placeholder='Почта'
              defaultValue={user.email}
            />
            <input
              type='tel'
              name='phone'
              placeholder='Номер телефона'
              defaultValue={user.phone}
            />
            <input type='password' name='password' placeholder='Пароль' />
            <div className={styles.btns}>
              <button type='submit'>Сохранить изменения</button>
              <button type='reset'>Отменить изменения</button>
            </div>
          </form>
        </div>
        <div className={styles.card}>
          <b>Получатели</b>
          <p>Добавить получателя</p>
          <ul>
            <li>
              <div className={styles.flx}>
                <CheckIcon />
                <span>Подтвержден</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
                adipisci.
              </p>
            </li>
            <li>
              <div className={styles.flx}>
                <CheckIcon />
                <span>Подтвержден</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam, voluptatem.
              </p>
            </li>
            <li>
              <div className={styles.flx}>
                <CheckIcon />
                <span>Подтвержден</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, doloremque.
              </p>
            </li>
          </ul>
          <AddRecipientModal />
        </div>
      </div>
    </ProfileLayout>
  );
};

export default ProfileSettings;
