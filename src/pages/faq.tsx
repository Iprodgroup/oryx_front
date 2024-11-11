import Head from "next/head";
import styles from "@/components/FAQ/styles.module.sass";

import FAQComponent from "@/components/FAQ/FAQ";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { ID } from "react-accessible-accordion/dist/types/components/ItemContext";
import { useState } from "react";
import useSWR from "swr";
import { Question } from "@/types/question.interface";
import instance from "@/utils/axios";
import classNames from "classnames";

const fetcher = (arg: string): Promise<{ questions: Question[] }> =>
  instance(arg).then((res) => res.data);

const FAQ = () => {
  const [isExpanded, setIsExpanded] = useState<ID[]>([]);
  const { data } = useSWR("/help", fetcher);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько времени занимает доставка?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Доставка в Казахстан в среднем занимает 7-10 дней с момента отправки посылки с нашего склада в США. Иногда из-за задержек рейсов, праздничных дней в США, загруженности курьерских служб в дни крупных распродаж в США срок может увеличиться. При любых изменениях сроков мы пришлем уведомление с объяснением причины. Задержки случаются редко, тем не менее рекомендуем позаботиться о временном запасе, если нужно получить посылку к определенному дню. Постарайтесь просто сделать заказ немного раньше.",
        },
      },
      {
        "@type": "Question",
        name: "Как мне оплатить доставку?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Оплатить доставку из США нужно банковской картой или наличными после прибытия посылки в Казахстан. Обратите внимание, что нам оплачивается только доставка от нашего склада в США до Казахстана. Если магазин включает в покупку стоимость доставки до нашего склада в США, то она оплачивается вами самостоятельно вместе с самим товаром.",
        },
      },
      {
        "@type": "Question",
        name: "В каких магазинах США можно делать покупки?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Покупать можно в любых магазинах, которые делают доставку в США. Полный список проверенных магазинов доступен на сайте в разделе «Популярные магазины в США».",
        },
      },
      {
        "@type": "Question",
        name: "Как рассчитать стоимость доставки?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Стоимость доставки из США в Казахстан зависит от веса посылки - 13 долларов за килограмм с округлением до 100 грамм. Например, если вес посылки составляет 200 грамм, то стоимость доставки составит 2,6 доллара (0,2 кг × 13). Точную стоимость доставки вы узнаете после прибытия посылки в Казахстан. Рассчитать примерную стоимость можно с помощью калькулятора на сайте. Обратите внимание, что стоимость доставки может быть рассчитана по объемному весу, если он превышает фактический. Объемный вес рассчитывается по формуле: Длина (см) × Ширина (см) × Высота (см) / 5000. Стоимость доставки одного смартфона рассчитывается по факту количества купленных смартфонов и составляет 35 долларов за один смартфон",
        },
      },
      {
        "@type": "Question",
        name: "Какие товары нельзя заказывать?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Мы не сможем привезти товары, которые законодательно выведены из товарооборота. Например, огнестрельное или пневматическое оружие, взрывчатые вещества боевого назначения, ядохимикаты, наркотические вещества, деньги, животных, продукцию с воспламеняющимися или взрывчатыми веществами и жидкостями, автомобильное масло, баллоны под давлением. Если нужно привезти специфический товар, то лучше свяжитесь с нами перед заказом на его доставку.",
        },
      },
      {
        "@type": "Question",
        name: "Как вернуть приобретенный товар?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Возврат товара осуществляется на условиях магазина, у которого был приобретен товар. Мы можем помочь с возвратом посылки до момента ее отправления из США в Казахстан.",
        },
      },
      {
        "@type": "Question",
        name: "Что делать, если неправильно указал адрес доставки?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Если вы указали неверный адрес или допустили ошибку при указании адреса нашего склада в США, то вы можете самостоятельно связаться с магазином для изменения данных или обратиться за помощью к нам. Если после изменения данных на верные потребуется платная пересылка вашего заказа, то эти расходы оплачиваются вами самостоятельно.",
        },
      },
      {
        "@type": "Question",
        name: "Буду ли я оплачивать налог при покупке?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Клиенты ORYX не платят американский налог с продаж – аналог нашего НДС, так как у нас есть склад, который расположен в безналоговом штате. Для освобождения от налога, вам нужно выбрать в кабинете адрес в штате Делавер (DE). С нами вы экономите дополнительные 5-9% от стоимости каждой покупки.",
        },
      },
      {
        "@type": "Question",
        name: "Какие таможенные лимиты?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "При покупке товаров за рубежом, необходимо помнить о таможенной пошлине. С 1 января 2020 года были сняты ограничение по ввозу товаров для личного пользования в адрес одного физлица. При каждом отправлении можно будет ввозить без уплаты таможенных пошлин товары, стоимость которых не превышает 1000 евро и/или вес которых не превышает 31 кг, лимит продлен до 1 октября 2023 года. При превышении установленных норм необходимо будет уплатить таможенный платеж по ставке 15% от превышенной стоимости,например, сумма заказа составляет 1400 евро, таможенная пошлина будет считать на разницу, т.е. от 400 евро. Очевидно, что выгоднее заказывать товары по отдельности, чем делать большой заказ и переплачивать на таможне.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Ответы на вопросы о доставке товаров из США в Казахстан | Oryx</title>
        <meta
          name="description"
          content="Как заказать и получить товары из США в Казахстан? Ответы на вопросы о стоимости доставки, сроках, таможенном оформлении."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ответы на вопросы о доставке товаров из США в Казахстан | Oryx"
        />
        <meta
          property="og:description"
          content="Как заказать и получить товары из США в Казахстан? Ответы на вопросы о стоимости доставки, сроках, таможенном оформлении."
        />
        <meta property="og:url" content="https://oryx.kz/faq" />
        <meta
          property="og:site_name"
          content="Ответы на вопросы о доставке товаров из США в Казахстан | Oryx"
        />
        <meta property="og:image" content="https://oryx.kz/logo.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </Head>
      <section>
        <link rel="canonical" href="https://oryx.kz/faq" />
        <div className={styles.wrapper} style={{ marginTop: "50px" }}>
          <h1 style={{ textAlign: "center" }}>Частые вопросы</h1>
          <div style={{ width: "80%", margin: "0 auto" }}>
            <Accordion
              allowZeroExpanded
              className={styles.accordions}
              onChange={(args) => setIsExpanded(args)}
            >
              {data?.questions.map((question) => (
                <AccordionItem key={question.id} uuid={question.id}>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className={classNames(
                        "accordion__button",
                        styles.accordion__button
                      )}
                    >
                      <span>{question.question}</span>
                      <span className={styles.icon}>
                        {isExpanded[0] === question.id ? "-" : "+"}
                      </span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel
                    dangerouslySetInnerHTML={{ __html: question.response }}
                    className={classNames(
                      "accordion__panel",
                      styles.accordion__panel
                    )}
                  ></AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

// Получение данных на сервере во время генерации страницы
export async function getStaticProps() {
  const data = await fetcher("/help");

  return {
    props: {
      initialData: data,
    },
    revalidate: 60, // Период обновления данных через 60 секунд (для ISR)
  };
}

export default FAQ;