import styles from './styles.module.sass';

import { useRouter } from 'next/router';
import classNames from 'classnames';

const Switch = () => {
  const router = useRouter();

  const profileParcels = '/profile/parcels';
  const profileAddresses = '/profile/addresses';

  const isActive = (path: string) => router.pathname === path;

  return (
    <div className={styles.switch}>
      <button
        className={classNames(styles.button, {
          [styles.active]: isActive(profileParcels),
        })}
        onClick={() => router.replace(profileParcels)}
      >
        Мои посылки
      </button>
      <button
        className={classNames(styles.button, {
          [styles.active]: isActive(profileAddresses),
        })}
        onClick={() => router.replace(profileAddresses)}
      >
        Мои адреса
      </button>
    </div>
  );
};

export default Switch;
