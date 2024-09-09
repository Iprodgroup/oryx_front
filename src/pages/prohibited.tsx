import styles from '@/styles/Prohibited.module.sass';

const Prohibited = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <h1>Перечень запрещенных к авиаперевозке грузов</h1>
        <div className={styles.body}>
          <strong>Запрещены к авиаперевозке:</strong>
          <p>
            Взрывоопасные, радиоактивные, горючие, инфекционные, ядовитые,
            опасные грузы, термометры, ртутные барометры и пр.
          </p>
          <p>
            Медицинские препараты, вакцины, лекарства (поскольку требуются
            соответствующие документы и определенный температурный режим);
          </p>
          <p>Растения и цветы;</p>
          <p>
            Оружие, включая макеты и пневматику, арбалеты, ножи и другое
            холодное оружие;
          </p>
          <p>Скоропортящиеся продукты;</p>
          <p>Грузы, нуждающиеся в особом температурном режиме;</p>
          <p>
            Другие грузы, запрещенные к транспортировке воздушным транспортом и
            способные принести при транспортировке вред;
          </p>
          <p>Любые животные, включая аквариумных рыбок;</p>
          <p>Реагенты, химикаты, тест-пробы;</p>
          <p>Клей;</p>
          <p>Хрупкие грузы;</p>
          <p>
            Коррозионные, хозяйственные, спиртосодержащие и прочие горючие
            жидкости, спирт, водка, отбеливающие материалы;
          </p>
          <p>Люстры, светильники, лампы (за исключением светодиодных);</p>
          <p>Кондиционеры и холодильники (из-за фреона);</p>
          <p>Аэрозоли, одеколоны, духи, дезодоранты, баллоны под давлением;</p>
          <p>Батарейки, UPS, источники бесперебойного питания, аккумуляторы;</p>
          <p>
            Ценные бумаги, деньги, драгоценные металлы, камни, а также изделия
            из них;
          </p>
          <p>
            Активные колонки, магнетроны, динамики и прочее оборудование, в
            котором содержатся магниты, герконы, намагниченные предметы;
          </p>
          <p>Масло, растворители, смазки;</p>
          <p>Автомобили;</p>
          <p>Лак, смола, краска;</p>
          <p>Пиротехника, петарды;</p>
          <p>Черная, красная и другая икра;</p>
          <p>Контрафактные, а также контрабандные грузы;</p>
          <p>Пчелы, пчелопакеты;</p>
          <p>Анаболики, а также другие сильнодействующие препараты;</p>
          <p>Аэрозоли и другие баллоны под давлением;</p>
          <p>Спички, зажигалки;</p>
          <p>Чернила, некоторые виды ручек;</p>
        </div>
      </div>
    </section>
  );
};

export default Prohibited;
