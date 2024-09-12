import styles from './styles.module.sass';

import FAQComponent from '@/components/FAQ/FAQ';

const FAQ = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <h2>Частые вопросы</h2>
        <FAQComponent />
      </div>
    </section>
  );
};

export default FAQ;
