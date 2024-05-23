import styles from '@/styles/profile/Transactions.module.sass';

import ProfileLayout from '@/components/ProfileLayout/ProfileLayout';

const Transactions = () => {
  return (
    <ProfileLayout>
      <h1 className={styles.title}>Транзакции</h1>
      <p className={styles.description}>Список проведенных транзакций</p>
      <div className={styles.filter}>
        <button className={styles.active}>Все</button>
        <button>Приход</button>
        <button>Расход</button>
      </div>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <td>Сумма ($)</td>
              <td>Тип</td>
              <td>Дата</td>
              <td>Комментарии</td>
              <td>Подтвержден</td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </ProfileLayout>
  );
};

export default Transactions;
