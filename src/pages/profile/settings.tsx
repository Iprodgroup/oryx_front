import { FormEvent } from 'react';
import styles from '@/styles/profile/ProfileSettings.module.sass';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { InputMask } from '@react-input/mask';
import axios from 'axios';
import toast from 'react-hot-toast';

import { User } from '@/types/user.interface';
import { Recipient } from '@/types/recipient.interface';
import { formatPhoneNumber, unformatPhoneNumber } from '@/utils/phoneNumber';
import ProfileLayout from '@/components/ProfileLayout/ProfileLayout';
import CheckIcon from '@/components/icons/Check';
import AddRecipientModal from '@/components/modal/AddRecipientModal/AddRecipientModal';
import instance from '@/utils/axios';
import passToken from '@/utils/passToken';

export const getServerSideProps = (async (context) => {
  const res = await instance.get('/user', { ...passToken(context) });
  const res2 = await instance.get('/profile/settings', {
    ...passToken(context),
  });
  const user: User = res.data;
  const recipients: Recipient[] = res2.data.recipients;

  return { props: { user, recipients } };
}) satisfies GetServerSideProps<{ user: User; recipients: Recipient[] }>;

const ProfileSettings = ({
  user,
  recipients,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loadingToastId = toast.loading('Загрузка...');

    try {
      const formData = new FormData(event.currentTarget);
      const { surname, name, fname, email, phone, password } =
        Object.fromEntries(formData);

      await axios.post('/api/profile/settings', {
        surname,
        name,
        fname,
        email,
        phone: unformatPhoneNumber(phone.toString()),
        password,
      });

      toast.success('Данные обновлены');
    } catch (error) {
      toast.error('Ошибка при обновлении данных');
    } finally {
      toast.dismiss(loadingToastId);
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
            <InputMask
              mask='+7 (___) ___-__-__'
              replacement={{ _: /\d/ }}
              name='phone'
              placeholder='Номер телефона'
              defaultValue={formatPhoneNumber(user.phone)}
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
            {recipients.map((recipient) => (
              <li key={recipient.id}>
                <div className={styles.flx}>
                  <CheckIcon />
                  <span>Подтвержден</span>
                </div>
                <p>
                  {recipient.surname} {recipient.name} {recipient.fname}
                </p>
              </li>
            ))}
          </ul>
          <AddRecipientModal />
        </div>
      </div>
    </ProfileLayout>
  );
};

export default ProfileSettings;
