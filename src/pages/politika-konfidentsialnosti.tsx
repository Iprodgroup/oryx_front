import styles from "@/styles/PrivacyPolicy.module.sass";

import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Политика конфиденциальности компании Oryx</title>
        <meta
          name="description"
          content="Ознакомьтесь с политикой конфиденциальности компании Oryx. Узнайте, как мы собираем, используем и защищаем ваши персональные данные при доставке товаров из США в Казахстан."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PrivacyPolicy",
              name: "Политика конфиденциальности - Oryx",
              description:
                "Ознакомьтесь с политикой конфиденциальности компании Oryx. Узнайте, как мы собираем, используем и защищаем ваши персональные данные при доставке товаров из США в Казахстан.",
              url: "https://oryx.kz/politika-konfidentsialnosti",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://oryx.kz/politika-konfidentsialnosti",
              },
              inLanguage: "ru",
              provider: {
                "@type": "Organization",
                name: "Oryx",
                url: "https://oryx.kz",
                logo: "https://oryx.kz/logo.svg",
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    telephone: "+7 700 323 22 22",
                    contactType: "customer service",
                    areaServed: "KZ",
                    availableLanguage: ["Russian"],
                  },
                ],
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "KZ",
                  addressLocality: "Алматы",
                  streetAddress:
                    "улица Шевченко 118, БЦ Алтын Гасыр, кабинет 133",
                },
                sameAs: ["https://www.instagram.com/oryx.usa.kz/"],
              },
            }),
          }}
        />
      </Head>

      <section>
        <link
          rel="canonical"
          href="https://oryx.kz/politika-konfidentsialnosti"
        />
        <div className={styles.wrapper}>
          <h1>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ ПЕРСОНАЛЬНЫХ ДАННЫХ</h1>
          <p className={styles.description}>
            Настоящая Политика конфиденциальности (далее - Политика)
            распространяется на всех посетителей сайта и пользователей наших
            услуг (далее - Все, Пользователь или Ваш). Настоящая Политика
            регулирует способы сбора, хранения, обработки и использования
            информации, полученной во время пользования сайтом www.oryx.com
            (далее - Сайт). Политика распространяется на веб-сайты, товары,
            услуги и любые другие версии программного обеспечения компании ТОО
            «Орикс Азия» (далее - Компания). Политика устанавливает ваши права и
            обязанности, как Пользователя Сайта. Если Вы не согласны с
            условиями, установленными политикой конфиденциальности, вы не можете
            пользоваться услугами, предоставляемыми Сайтом.
          </p>
          <ul>
            <li>
              <b>1. Персональные данные</b>
              <p>
                Вы можете посещать сайт без регистрации, но чтобы
                воспользоваться услугами Компании, необходимо
                зарегистрироваться. Персональные данные начинают обрабатываться
                лишь с момента их предоставления. При регистрации Вы обязаны
                указать свое имя, адрес, адрес электронной почты и контактные
                данные. Мы также можем собирать информацию другими способами во
                время пользования сайтом. Наши сервера получают и собирают такие
                данные, как Ваш IP-адрес, название браузера, тип компьютера,
                технические данные о Пользователе и средства связи с нашим
                сайтом, вид операционной системы, имя провайдера Интернет-услуг
                и другие подобные сведения. Мы получаем информацию о Ваших
                действиях на Сайте, сведения из поступивших на Вас жалоб от
                других посетителей или из Ваших звонков в наш центр поддержки
                клиентов. Эти данные помогают нам понять линию поведения
                посетителей и их предпочтения, делать сайт более комфортным для
                использования и более точно предлагать услуги пользователям.
              </p>
            </li>
            <li>
              <b>2. Конфиденциальность сведений о лицах, не достигших 18 лет</b>
              <p>
                Мы не обрабатываем данные, не допускаем регистрации и не
                предоставляем услуги лицам, не достигшим 18 лет. Исключение -
                лица, которые были объявлены полностью дееспособными в
                предусмотренном законодательством порядке. Компания не имеет
                возможности проверять достоверность вводимых данных, поэтому мы
                не несем ответственности за последствия использования сайта и
                услуг лицами, не достигшими 18 лет.
              </p>
              <p>Использование полученной информации</p>
              <p>
                Мы вправе использовать предоставленные Вами сведения с целью:
              </p>
              <ul className={styles.list}>
                <li>удовлетворения Ваших запросов и реализации услуг;</li>
                <li>
                  рекомендации услуг и товаров, которые могут быть вам
                  интересны;
                </li>
                <li>оказания помощи в использовании сайта;</li>
                <li>регулирования Вашего Oryx счета</li>
                <li>
                  Внесения изменений в структуру сайта для более комфортного его
                  использования
                </li>
                <li>Защиты сайта и других пользователей.</li>
              </ul>
              <p>
                Способы хранения персональных данных пользователей и их
                безопасность
              </p>
              <p>
                Компания применяет соответствующие технические и физические меры
                для защиты персональных данных от незаконного использования,
                изменения или разглашения. Все предоставленные Вами сведения
                хранятся на безопасных серверах. Каждую страницу, на которой
                хранятся Ваши персональные данные, Компания защищает паролями.
                Компания никогда не попросит Вас сообщить свой пароль по
                телефону или электронной почте. Компания не предоставляет
                персональные данные третьи лицам без согласия Пользователя за
                исключением случаев, предусмотренных законодательством. Данные
                могут быть предоставлены связанным с нами лицам, если они
                необходимы для оказания или улучшения качества услуг. Для
                осуществление некоторых сделок от Вашего имени таких, как
                группировка и складирование заказов, доставка почтовых
                отправлений, отправление писем, анализ базы данных, удаление
                повторяющейся информации, осуществление расчетов банковскими
                картами, клиринг, Компания нанимает другие компании и/или
                частных лиц. Третьи лица получают доступ к необходимой для
                осуществления оговоренной деятельности информации и не имеют
                права использовать эти данные в других целях.
              </p>
            </li>
            <li>
              <b>3. Как oryx использует файлы cookie</b>
              <p>
                Oryx имеет право использовать файлы cookie с целью сделать
                работу с сайтом значительно более удобной для пользователя.
                Файлы cookie - это небольшие текстовые файлы, в которых хранятся
                сведения об активности пользователя. Существует два типа cookie
                файлов - сессионные или временные и постоянные. Сессионные
                cookie хранятся во временной памяти и удаляются, как только
                пользователь закрывает окно браузера. Постоянные cookie хранятся
                на жестком диске компьютера и передаются на сервер каждый раз,
                как пользователь посещает веб-сайт. В настройках браузера
                пользователи могут по своему усмотрению регулировать
                использование и сохранение cookie файлов. Многие браузеры имеют
                функцию отключения cookie или удаления файлов при закрытии
                браузера. Однако использование cookie при повторном посещении
                сайта помогает компании эффективнее выстроить работу с
                пользователем. С помощью файлов cookie Компания в автоматическом
                режиме сохраняет информацию о Вашей активности на oryx.com:
                переход по ссылкам, обзор страницы, поиск информации на сайте
                Компании и др.
              </p>
            </li>
            <li>
              <b>4. Разрешение конфликтов</b>
              <p>
                Зайдя на Сайт или воспользовавшись услугами Компании, вы по
                умолчанию принимаете условие, что все вопросы, связанные с его
                использованием, регулируются законодательством Республики
                Казахстан. В случае возникновения спорных моментов, они будут
                урегулированы путем переговоров между сторонами конфликта. Если
                соглашение не будет достигнуто, вопрос подлежит рассмотрению в
                порядке, установленном законом РК.
              </p>
            </li>
            <li>
              <b>5. Изменение политики конфиденциальности </b>
              <p>
                Компания имеет право вносить изменения в настоящую Политику
                Конфиденциальности. В случае каких-либо поправок мы вышлем Вам
                уведомление на адрес электронной почты, указанный при
                регистрации. Пользование услугами Компании после внесения
                изменений будет рассматриваться как то, что Пользователь
                принимаете новую Политику.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
