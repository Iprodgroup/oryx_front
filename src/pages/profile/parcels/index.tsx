import { useState } from 'react';
import styles from '@/styles/profile/ProfileParcels.module.sass';

import { ArrowDownIcon, ArrowRightIcon } from '@/components/icons/arrows';
import ProfileLayout from '@/components/ProfileLayout/ProfileLayout';
import AddParcel from '@/components/AddParcel/AddParcel';
import TrashIcon from '@/components/icons/Trash';
import PenIcon from '@/components/icons/Pen';

const ProfileParcels = () => {
  const [isDisplay, setIsDisplay] = useState(true);

  const toggleDisplay = () => {
    setIsDisplay((prev) => !prev);
  };

  return (
    <ProfileLayout>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h1>Список ваших посылок</h1>
          <p>Вся информация о ваших посылках и их статусах</p>
          <form className={styles.formik}>
            <input type='search' placeholder='Поиск по треку' />
            <select name='status' defaultValue=''>
              <option value='' disabled>
                Статус посылки
              </option>
              <option value='1'>Статус 1</option>
              <option value='2'>Статус 2</option>
              <option value='3'>Статус 3</option>
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
                  <th>Наименование</th>
                  <th>Стоимость</th>
                  <th>Дата добавления</th>
                  <th>Направление</th>
                  <th></th>
                </tr>
                <tr>
                  <td>TEST</td>
                  <td>TEST</td>
                  <td>TEST</td>
                  <td>TEST</td>
                  <td>TEST</td>
                  <td>TEST</td>
                  <td>
                    <button>
                      <TrashIcon />
                    </button>
                    <button>
                      <PenIcon />
                    </button>
                    <button onClick={toggleDisplay}>
                      {isDisplay ? <ArrowDownIcon /> : <ArrowRightIcon />}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            {isDisplay && (
              <div className={styles.bottom}>
                <table>
                  <tbody>
                    <tr>
                      <th>Наименование товара</th>
                      <td>TEST</td>
                    </tr>
                    <tr>
                      <th>Стоимость</th>
                      <td>TEST</td>
                    </tr>
                    <tr>
                      <th>Получатель</th>
                      <td>TEST</td>
                    </tr>
                    <tr>
                      <th>Город</th>
                      <td>TEST</td>
                    </tr>
                    <tr>
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
                    </tr>
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
