import { FormEvent, useRef } from "react";
import styles from "./styles.module.sass";

import { useIsClient, useMediaQuery } from "usehooks-ts";
import { InputMask } from "@react-input/mask";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";

import useAuth from "@/hooks/useAuth";

const Footer = () => {
  const isClient = useIsClient();
  const isAuthenticated = useAuth();
  const formRef = useRef<HTMLFormElement>(null);

  const matches = {
    768: useMediaQuery("(min-width: 768px)"),
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loadingToastId = toast.loading("Загрузка...");

    try {
      const formData = new FormData(event.currentTarget);
      const { name, phem } = Object.fromEntries(formData);

      let text = `Name: ${name}\n\nPhone: ${phem}`;

      await axios.post("/api/send", {
        subject: "Заявка с сайта",
        text,
      });

      toast.success("Заявка отправлена");
      formRef.current?.reset();
    } catch (error) {
      toast.error("Ошибка при отправлении заявки");
    } finally {
      toast.dismiss(loadingToastId);
    }
  };

  // Статичный контент (будет рендериться всегда)
  const staticContent = (
    <div className={styles.top}>
      <div className={styles.left}>
        <a href="tel:+77003232222">
          <Image src="/call.svg" alt="call" width={30} height={30} />
          +7 700 323 22 22
        </a>
        <a href="tel:+77475155613">+7 747 515 56 13</a>
        <a href="https://www.instagram.com/oryx.usa.kz/" target="_blank">
          <Image src="/instagram.svg" alt="instagram" width={24} height={24} />
          @oryx.usa.kz
        </a>
      </div>
      <div className={styles.right}>
        {isAuthenticated ? (
          <Link href="/profile">Личный кабинет</Link>
        ) : (
          <>
            <Link href="/login">Войти в личный кабинет</Link>
            <Link href="/register">Регистрация в ЛК</Link>
          </>
        )}
      </div>
    </div>
  );

  // Динамичный контент (который рендерится только на клиенте)
  const dynamicContent = isClient && (
    <div className={styles.middle}>
      <form onSubmit={handleSubmit} ref={formRef}>
        <input type="text" name="name" placeholder="Имя" required />
        <div className={styles.pn}>
          <InputMask
            mask="+7 (___) ___-__-__"
            replacement={{ _: /\d/ }}
            name="phem"
            placeholder="Введите номер телефона"
            required
          />
          <button type="submit">Отправить</button>
        </div>
      </form>
    </div>
  );

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        {staticContent} {/* Статичный контент */}
        {dynamicContent} {/* Динамичный контент, рендерится только на клиенте */}

        <div className={styles.bottom}>
          <Link href="/">
            <Image
              src="/logo-footer.svg"
              alt="logo-footer"
              width={140}
              height={60}
              priority
            />
          </Link>
          <nav>
            <ul>
              <li>
                <Link href="/o-kompanii">О компании</Link>
              </li>
              <li>
                <Link href="/populyarnye-magaziny">Популярные магазины в США</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/kontakty">Контакты</Link>
              </li>
              <li>
                <Link href="/sitemap">Карта сайта</Link>
              </li>
              <li>
                <Link href="/usloviya-servisa">Помощь в работе с сервисом</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/politika-konfidentsialnosti">Политика конфиденциальности</Link>
              </li>
              <li>
                <Link href="/obshchie-usloviya">Общие условия</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
