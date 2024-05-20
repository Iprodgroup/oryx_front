import { useState } from 'react';
import styles from './styles.module.sass';

import { Modal } from 'react-responsive-modal';

const AddRecipientModal = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <button className={styles.btn} onClick={onOpenModal}>
        Добавить получателя
      </button>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{ modal: styles.modal, closeButton: styles.close__btn }}
      >
        <h2>Добавить получателя</h2>
        <p>
          Для того чтобы добавить получателя, обязательно заполните все поля
          помеченные *
        </p>
        <form>
          <input type='text' placeholder='Имя*' required />
          <input type='text' placeholder='Фамилия*' required />
          <input type='text' placeholder='Отчество' />
          <select name='country' defaultValue='kz'>
            <option value='kz'>Казахстан</option>
            <option value='ru'>Россия</option>
          </select>
          <input
            type='number'
            placeholder='Номер удостоверения личности*'
            required
          />
          <input type='text' placeholder='Кем выдано*' required />
          <input
            type='text'
            placeholder='Дата выдачи*'
            required
            className={styles.full}
          />
          <p className={styles.full}>
            Прикрепите скан или фото обеих сторон удостоверения личности
            отдельными файлами в формате jpg, png
          </p>
          <label htmlFor='a'>
            Прикрепить сторону А*
            <input type='file' id='a' />
          </label>
          <label htmlFor='b'>
            Прикрепить сторону Б*
            <input type='file' id='b' />
          </label>
          <input type='number' placeholder='+7 (...)*' required />
          <input type='text' placeholder='Город*' required />
          <input
            type='text'
            placeholder='Адрес*'
            required
            className={styles.full}
          />
          <div className={styles.btns}>
            <button type='submit'>Сохранить</button>
            <button type='reset'>Отмена</button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddRecipientModal;
