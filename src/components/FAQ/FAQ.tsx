import { useState } from "react";
import styles from "./styles.module.sass";
import "./static.module.sass";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { ID } from "react-accessible-accordion/dist/types/components/ItemContext";
import useSWR from "swr";
import classNames from "classnames";

import { Question } from "@/types/question.interface";
import instance from "@/utils/axios";

const fetcher = (arg: string): Promise<{ questions: Question[] }> =>
  instance(arg).then((res) => res.data);

const FAQComponent = () => {
  const { data } = useSWR("/help", fetcher);
  const [isExpanded, setIsExpanded] = useState<ID[]>([]);

  return (
    <>
      {/* Статическая версия для случаев отключенного JavaScript */}
      <noscript>
        <div className="static-accordions">
          <div className="static-accordion__item">
            <input
              type="checkbox"
              id="faq1"
              className="static-accordion__checkbox"
            />
            <label htmlFor="faq1" className="static-accordion__title">
              Сколько времени занимает доставка?
            </label>
            <div className="static-accordion__panel">
              <p>
                Доставка в Казахстан в среднем занимает 7-10 дней с момента
                отправки посылки с нашего склада в США. Иногда из-за задержек
                рейсов, праздничных дней в США, загруженности курьерских служб в
                дни крупных распродаж в США срок может увеличиться. При любых
                изменениях сроков мы пришлем уведомление с объяснением причины.
                Задержки случаются редко, тем не менее рекомендуем позаботиться
                о временном запасе, если нужно получить посылку к определенному
                дню. Постарайтесь просто сделать заказ немного раньше.
              </p>
            </div>
          </div>

          <div className="static-accordion__item">
            <input
              type="checkbox"
              id="faq2"
              className="static-accordion__checkbox"
            />
            <label htmlFor="faq2" className="static-accordion__title">
              Как мне оплатить доставку?
            </label>
            <div className="static-accordion__panel">
              <p>
                Оплатить доставку из США нужно банковской картой или наличными
                после прибытия посылки в Казахстан. Обратите внимание, что нам
                оплачивается только доставка от нашего склада в США до
                Казахстана. Если магазин включает в покупку стоимость доставки
                до нашего склада в США, то она оплачивается вами самостоятельно
                вместе с самим товаром.
              </p>
            </div>
          </div>

          <div className="static-accordion__item">
            <input
              type="checkbox"
              id="faq3"
              className="static-accordion__checkbox"
            />
            <label htmlFor="faq3" className="static-accordion__title">
              В каких магазинах США можно делать покупки?
            </label>
            <div className="static-accordion__panel">
              <p>
                Покупать можно в любых магазинах, которые делают доставку в США.
                Полный список проверенных магазинов доступен на сайте в разделе
                «Популярные магазины в США».
              </p>
            </div>
          </div>

          <div className="static-accordion__item">
            <input
              type="checkbox"
              id="faq4"
              className="static-accordion__checkbox"
            />
            <label htmlFor="faq4" className="static-accordion__title">
              Как рассчитать стоимость доставки?
            </label>
            <div className="static-accordion__panel">
              <p>
                Стоимость доставки из США в Казахстан зависит от веса посылки -
                13 долларов за килограмм с округлением до 100 грамм. Например,
                если вес посылки составляет 200 грамм, то стоимость доставки
                составит 2,6 доллара (0,2 кг × 13). Точную стоимость доставки вы
                узнаете после прибытия посылки в Казахстан. Рассчитать примерную
                стоимость можно с помощью калькулятора на сайте. Обратите
                внимание, что стоимость доставки может быть рассчитана по
                объемному весу, если он превышает фактический. Объемный вес
                рассчитывается по формуле: Длина (см) × Ширина (см) × Высота
                (см) / 5000. Стоимость доставки одного смартфона рассчитывается
                по факту количества купленных смартфонов и составляет 35
                долларов за один смартфон.
              </p>
            </div>
          </div>

          <div className="static-accordion__item">
            <input
              type="checkbox"
              id="faq5"
              className="static-accordion__checkbox"
            />
            <label htmlFor="faq5" className="static-accordion__title">
              Какие товары нельзя заказывать?
            </label>
            <div className="static-accordion__panel">
              <p>
                Мы не сможем привезти товары, которые законодательно выведены из
                товарооборота. Например, огнестрельное или пневматическое
                оружие, взрывчатые вещества боевого назначения, ядохимикаты,
                наркотические вещества, деньги, животных, продукцию с
                воспламеняющимися или взрывчатыми веществами и жидкостями,
                автомобильное масло, баллоны под давлением. Если нужно привезти
                специфический товар, то лучше свяжитесь с нами перед заказом на
                его доставку.
              </p>
            </div>
          </div>

          <div className="static-accordion__item">
            <input
              type="checkbox"
              id="faq6"
              className="static-accordion__checkbox"
            />
            <label htmlFor="faq6" className="static-accordion__title">
              Как вернуть приобретенный товар?
            </label>
            <div className="static-accordion__panel">
              <p>
                Возврат товара осуществляется на условиях магазина, у которого
                был приобретен товар. Мы можем помочь с возвратом посылки до
                момента ее отправления из США в Казахстан.
              </p>
            </div>
          </div>

          <div className="static-accordion__item">
            <input
              type="checkbox"
              id="faq7"
              className="static-accordion__checkbox"
            />
            <label htmlFor="faq7" className="static-accordion__title">
              Что делать, если неправильно указал адрес доставки?
            </label>
            <div className="static-accordion__panel">
              <p>
                Если вы указали неверный адрес или допустили ошибку при указании
                адреса нашего склада в США, то вы можете самостоятельно
                связаться с магазином для изменения данных или обратиться за
                помощью к нам. Если после изменения данных на верные потребуется
                платная пересылка вашего заказа, то эти расходы оплачиваются
                вами самостоятельно.
              </p>
            </div>
          </div>

          <div className="static-accordion__item">
            <input
              type="checkbox"
              id="faq8"
              className="static-accordion__checkbox"
            />
            <label htmlFor="faq8" className="static-accordion__title">
              Буду ли я оплачивать налог при покупке?
            </label>
            <div className="static-accordion__panel">
              <p>
                Клиенты ORYX не платят американский налог с продаж – аналог
                нашего НДС, так как у нас есть склад, который расположен в
                безналоговом штате. Для освобождения от налога, вам нужно
                выбрать в кабинете адрес в штате Делавер (DE). С нами вы
                экономите дополнительные 5-9% от стоимости каждой покупки.
              </p>
            </div>
          </div>

          <div className="static-accordion__item">
            <input
              type="checkbox"
              id="faq9"
              className="static-accordion__checkbox"
            />
            <label htmlFor="faq9" className="static-accordion__title">
              Какие таможенные лимиты?
            </label>
            <div className="static-accordion__panel">
              <p>
                При покупке товаров за рубежом, необходимо помнить о таможенной
                пошлине. С 1 января 2020 года были сняты ограничение по ввозу
                товаров для личного пользования в адрес одного физлица. При
                каждом отправлении можно будет ввозить без уплаты таможенных
                пошлин товары, стоимость которых не превышает 1000 евро и/или
                вес которых не превышает 31 кг, лимит продлен до 1 октября 2023
                года. При превышении установленных норм необходимо будет
                уплатить таможенный платеж по ставке 15% от превышенной
                стоимости, например, сумма заказа составляет 1400 евро,
                таможенная пошлина будет считать на разницу, т.е. от 400 евро.
                Очевидно, что выгоднее заказывать товары по отдельности, чем
                делать большой заказ и переплачивать на таможне.
              </p>
            </div>
          </div>
        </div>
      </noscript>

      {/* Основной аккордеон с использованием JavaScript */}
      {data && (
        <Accordion
          allowZeroExpanded
          className={styles.accordions}
          onChange={(args) => setIsExpanded(args)}
        >
          {data.questions.map((question) => (
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
      )}
    </>
  );
};

export default FAQComponent;
