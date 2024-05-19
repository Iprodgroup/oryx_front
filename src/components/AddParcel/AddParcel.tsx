import styles from './styles.module.sass';

import Link from 'next/link';

const AddParcel = () => {
  return (
    <Link href='/profile/parcels/create' className={styles.btn}>
      <span>+</span> Добавить посылку
    </Link>
  );
};

export default AddParcel;
