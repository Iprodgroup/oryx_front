import styles from "./styles.module.sass";

import Link from "next/link";

const AddBalance = () => {
  return (
    <>
      <Link href="https://cms.oryx.kz/pay" target="_blank" className={styles.btn}>
        Пополнить баланс
      </Link>
      <form action="https://cms.oryx.kz/pay" method="GET">
        <label htmlFor="amount">Сумма:</label>
        <input type="number" name="amount" id="amount" min="0" step="0.01" required/>
        <button type="submit" style={{ marginTop: "10px", padding: "10px 20px", background: "#EB3738", color: "white" }}>Оплатить</button>
      </form>
    </>
    
  );
};


export default AddBalance;