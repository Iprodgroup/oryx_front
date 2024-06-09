import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from 'react';
import styles from './styles.module.sass';

import { Modal } from 'react-responsive-modal';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import axios from 'axios';

const AddRecipientModal = () => {
  const [open, setOpen] = useState(false);
  const [file1, setFile1] = useState<string | null>(null);
  const [file2, setFile2] = useState<string | null>(null);

  const router = useRouter();

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    setFile: Dispatch<SetStateAction<string | null>>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        setFile(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loadingToastId = toast.loading('Загрузка...');

    try {
      const formData = new FormData(event.currentTarget);
      const postData = Object.fromEntries(formData);

      await axios.post('/api/profile/add-recipient', {
        ...postData,
        file1,
        file2,
      });

      toast.success('Получатель добавлен');

      onCloseModal();

      router.replace(router.asPath);
    } catch (error) {
      toast.error('Ошибка при добавлении получателя');
    } finally {
      toast.dismiss(loadingToastId);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <input type='text' name='name' placeholder='Имя*' required />
          <input type='text' name='surname' placeholder='Фамилия*' required />
          <input type='text' name='fname' placeholder='Отчество' />
          <select name='country' defaultValue='kz'>
            <option value='Казахстан'>Казахстан</option>
            <option value='Россия'>Россия</option>
          </select>
          <input
            type='number'
            name='pnum'
            placeholder='Номер удостоверения личности*'
            required
          />
          <input type='text' name='pby' placeholder='Кем выдано*' required />
          <input
            type='text'
            name='pdate'
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
            <input
              type='file'
              name='file1'
              id='a'
              onChange={(event) => handleChange(event, setFile1)}
            />
          </label>
          <label htmlFor='b'>
            Прикрепить сторону Б*
            <input
              type='file'
              name='file2'
              id='b'
              onChange={(event) => handleChange(event, setFile2)}
            />
          </label>
          <input type='number' name='phone' placeholder='+7 (...)*' required />
          <input type='text' name='city' placeholder='Город*' required />
          <input
            type='text'
            name='address'
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
