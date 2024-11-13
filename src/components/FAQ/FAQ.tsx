import { useState, useEffect } from "react";
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
  const [isJavaScriptEnabled, setIsJavaScriptEnabled] = useState(false);

  useEffect(() => {
    setIsJavaScriptEnabled(true); // Устанавливаем значение в true, если JS поддерживается
  }, []);

  return (
    <>
      {/* Статическая версия для случаев отключенного JavaScript */}
      {!isJavaScriptEnabled && (
        <noscript>
          <style jsx>{`
            .static-accordions {
              user-select: none;
              margin-top: 60px;
            }

            .static-accordion__item {
              margin-bottom: 10px;
            }

            .accordion-checkbox {
              display: none;
            }

            .static-accordion__title {
              background-color: white;
              font-size: clamp(1rem, 0.909rem + 0.45vw, 1.25rem);
              display: flex;
              align-items: center;
              justify-content: space-between;
              cursor: pointer;
              padding: 10px;
              font-weight: bold;
            }

            .static-accordion__panel {
              max-height: 0;
              overflow: hidden;
              transition: max-height 0.4s ease-out;
              padding: 0 10px;
              font-size: clamp(0.625rem, 0.489rem + 0.68vw, 1rem);
              text-align: start;
              border-top: 1px solid #ccc;
            }

            .accordion-checkbox:checked + .static-accordion__title + .static-accordion__panel {
              max-height: 100vh;
              padding-bottom: 10px;
            }
          `}</style>
          <div className="static-accordions">
            {/* Пример статической аккордеон-разметки */}
            {/* (Можно добавить статические вопросы сюда) */}
          </div>
        </noscript>
      )}

      {/* Основной аккордеон с использованием JavaScript */}
      {isJavaScriptEnabled && data && (
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
