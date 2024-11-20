import styles from "./styles.module.sass";

import Link from "next/link";

const AddBalance = () => {
  return (
    <Link href="https://cms.oryx.kz/pay" target="_blank" className={styles.btn}>
      Пополнить баланс
    </Link>
  );
};


export default AddBalance;