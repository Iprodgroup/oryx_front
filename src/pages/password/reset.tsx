import styles from '@/styles/PasswordReset.module.sass';

const PasswordReset = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <h2>СБРОСИТЬ ПАРОЛЬ</h2>
        <form>
          <input type='email' placeholder='Электронная почта' />
          <button type='submit'>Отправить ссылку для сброса пароля</button>
        </form>
      </div>
    </section>
  );
};

export default PasswordReset;
