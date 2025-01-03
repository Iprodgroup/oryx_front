import styles from "./styles.module.sass";

import Link from "next/link";

const AddParcel = () => {
  return (
    <Link href="/profile/parcels/create" className={styles.btn}>
      <span>+</span>
      <p>Добавить посылку</p>
    </Link>
  );
};

export default AddParcel;
