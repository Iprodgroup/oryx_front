import { useState } from 'react';
import styles from './styles.module.sass';

import Link from 'next/link';

import { User } from '@/types/user.interface';

interface Props {
  user: User;
  isParcels?: boolean;
}

const DeliveryMethod = ({ user, isParcels = false }: Props) => {
  const [deliveryMethod, setDeliveryMethod] = useState(
    user.delivery_method || 'pickup'
  );

  return (
    <>
      <label htmlFor='delivery_method' className={styles.label}>
        Метод доставки
        <select
          name='delivery_method'
          id='delivery_method'
          defaultValue={deliveryMethod}
          onChange={(event) =>
            setDeliveryMethod(
              event.target.value as 'pickup' | 'address' | 'pvz'
            )
          }
        >
          <option value='pickup'>Самовывоз со склада (Алматы)</option>
          <option value='address'>До адреса (службой СДЭК)</option>
          <option value='pvz'>Пункт выдачи СДЭК</option>
        </select>
      </label>
      {(deliveryMethod === 'address' || deliveryMethod === 'pvz') && (
        <input
          type='text'
          name='delivery_address'
          placeholder='Адрес'
          defaultValue={user.delivery_address}
          required
          className={styles.input}
        />
      )}
      {isParcels && (
        <Link href='/profile/settings' className={styles.link}>
          Изменить адрес по умолчанию
        </Link>
      )}
    </>
  );
};

export default DeliveryMethod;
