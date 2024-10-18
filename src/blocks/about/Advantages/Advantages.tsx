import styles from "./styles.module.sass";

import Image from "next/image";


const Advantages = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <ul>
          <li>
            
              <Image src="/world.svg" alt="world" width={50} height={50} />
            <p>Предоставляем американский адрес для самостоятельных покупок</p>
          </li>
          <li>
           
              <Image src="/socket.svg" alt="socket" width={50} height={50} />
            <p>Помогаем выкупить товары с любого онлайн-магазина США</p>
          </li>
          <li>
              <Image src="/cubs.svg" alt="cubs" width={50} height={50} />

            <p>Доставляем посылки по всему миру</p>
          </li>
          <li>
           
              <Image
                src="/mailphone.svg"
                alt="mailphone"
                width={50}
                height={50}
              />
            <p>Находимся на связи в формате 24/7</p>
          </li>
          <li>
            
              <Image
                src="/user-review.svg"
                alt="user-review"
                width={50}
                height={50}
              />
            <p>Гарантируем персональный подход!</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantages;
