import { useState } from 'react';
import styles from '@/styles/profile/ProfileAddresses.module.sass';

import Image from 'next/image';
import Link from 'next/link';

import { responsiveImg } from '@/utils/image';
import ProfileLayout from '@/components/ProfileLayout/ProfileLayout';
import AddParcel from '@/components/AddParcel/AddParcel';

const ProfileAddresses = () => {
  const [state, setState] = useState('delaware');

  return (
    <ProfileLayout>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.head}>
            <Image src='/plane.svg' alt='' width={50} height={50} />
            <h1>Ваши персональные адреса</h1>
          </div>
          <div className={styles.switch}>
            {['delaware', 'ny'].map((st, index) => (
              <button
                key={index}
                style={{
                  borderBottomColor: st === state ? '#E84438' : '#00000080',
                }}
                onClick={() => setState(st)}
              >
                Адрес в {st === 'delaware' ? 'Дэлавер' : 'Нью-Йорке'}
              </button>
            ))}
          </div>
          <div className={styles.fields}>
            <label>
              Address 1:
              <input
                type='text'
                value={
                  state === 'delaware'
                    ? '705 Carson drive'
                    : '3047 Emmons Avenue Brooklyn'
                }
                disabled
              />
            </label>
            <label>
              Address 2:
              <input type='text' value='ORX15730' disabled />
            </label>
            <label>
              City:
              <input
                type='text'
                value={state === 'delaware' ? 'Bear' : 'New York'}
                disabled
              />
            </label>
            <label>
              State:
              <input
                type='text'
                value={state === 'delaware' ? 'DE' : 'New York (NY)'}
                disabled
              />
            </label>
            <label>
              Zip code:
              <input
                type='number'
                value={state === 'delaware' ? 19701 : 11235}
                disabled
              />
            </label>
            <label>
              Country:
              <input
                type='text'
                value='USA (United States of America)'
                disabled
              />
            </label>
            <label>
              Phone:
              <input type='number' value={19176057707} disabled />
            </label>
          </div>
          <p className={styles.schedule}>
            09:00 - 17:00 понедельник-пятница, по времени Делавэра
          </p>
        </div>
        <div className={styles.right}>
          <AddParcel />
          <p>
            При оформлении заказа на американских сайтах обязательно указывайте
            Address 2 - это ваш уникальный номер ID. По нему мы узнаем, что это
            ваша посылка, когда посылка поступит на наш склад. Посылки без ID
            будет отложены в неопознанные грузы
          </p>
          <Link href='/prohibited'>Смотреть список запрещенных товаров</Link>
          <Image src='/man.svg' alt='' {...responsiveImg} />
        </div>
      </div>
    </ProfileLayout>
  );
};

export default ProfileAddresses;
