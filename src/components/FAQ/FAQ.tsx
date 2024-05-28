import { useState } from 'react';
import styles from './styles.module.sass';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { ID } from 'react-accessible-accordion/dist/types/components/ItemContext';
import useSWR from 'swr';
import classNames from 'classnames';

import { Question } from '@/types/question.interface';
import instance from '@/utils/axios';

const fetcher = (arg: string): Promise<{ questions: Question[] }> =>
  instance(arg).then((res) => res.data);

const FAQComponent = () => {
  const { data } = useSWR('/help', fetcher);
  const [isExpanded, setIsExpanded] = useState<ID[]>([]);

  return (
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
                'accordion__button',
                styles.accordion__button
              )}
            >
              <span>{question.question}</span>
              <span className={styles.icon}>
                {isExpanded[0] === question.id ? '-' : '+'}
              </span>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel
            dangerouslySetInnerHTML={{ __html: question.response }}
            className={classNames('accordion__panel', styles.accordion__panel)}
          ></AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQComponent;
