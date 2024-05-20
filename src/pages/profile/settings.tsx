import styles from '@/styles/profile/ProfileSettings.module.sass';

import ProfileLayout from '@/components/ProfileLayout/ProfileLayout';
import CheckIcon from '@/components/icons/Check';
import AddRecipientModal from '@/components/modal/AddRecipientModal/AddRecipientModal';

const ProfileSettings = () => {
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
            <span>ID: #15730</span>
          </div>
          <form>
            <input type='text' placeholder='Фамилия*' required />
            <input type='text' placeholder='Имя*' required />
            <input type='text' placeholder='Отчество' />
            <input type='email' placeholder='Почта' />
            <input type='number' placeholder='Номер телефона' />
            <input type='password' placeholder='Пароль' />
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
