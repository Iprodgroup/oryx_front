import { ChangeEvent, useState } from 'react';
import styles from './styles.module.sass';

import Image from 'next/image';

import { responsiveImg } from '@/utils/image';

const Calculator = () => {
  const [result, setResult] = useState<number>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setResult(+value * 13);
  };

  return (
    <section className={styles.calculator} id='calculator'>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2>Калькулятор стоимости доставки</h2>
          <div className={styles.calc}>
            <select name='country' defaultValue='usa'>
              <option value='' disabled>
                Выбрать страну
              </option>
              <option value='usa'>США</option>
              <option value='eu'>Европа</option>
            </select>
            <input type='number' placeholder='Вес' onChange={handleChange} />
            <strong>Итог: {result} $</strong>
          </div>
          <b>Срок доставки От 7 до 14 дней</b>
          <hr />
          <p>
            * Стоимость доставки – 13 долларов за килограмм. Чтобы вы не
            переплачивали, мы округляем расчет веса до 100 грамм. В списке можно
            выбрать популярные товары и узнать примерную стоимость их доставки,
            а на калькуляторе рассчитать точно по весу.
          </p>
        </div>
        <div className={styles.right}>
          <Image src='/calculator.png' alt='' {...responsiveImg} />
        </div>
      </div>
    </section>
  );
};

export default Calculator;
