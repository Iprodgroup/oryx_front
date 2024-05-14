import styles from './styles.module.sass';

import FAQComponent from '@/components/FAQ/FAQ';

const FAQ = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <h1>Частые вопросы</h1>
        <FAQComponent />
      </div>
    </section>
  );
};

export default FAQ;
