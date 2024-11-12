/* eslint-disable @next/next/no-html-link-for-pages */
import { useState, useEffect } from "react";
import styles from "./styles.module.sass";
import { useMediaQuery } from "usehooks-ts";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import Drawer from "../drawer/Drawer/Drawer";
import LogoIcon from "../icons/Logo";
import { usePathname } from "next/navigation";
import instance from "@/utils/axios";
import Cookies from "js-cookie";

const Header = () => {
  const isAuthenticated = useAuth();
  const url = usePathname();

  // Состояния для баланса
  const [balance, setBalance] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false); // флаг для client-side рендеринга
  const [matches, setMatches] = useState({
    576: false,
    1200: false,
  });

  useEffect(() => {
    setIsClient(true); // Устанавливаем флаг для client-side рендеринга
  }, []);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const token = Cookies.get("access_token");

        if (token) {
          const response = await instance.get("/profile/balance", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setBalance(response.data.balance);
        } else {
          console.error("Токен не найден");
        }
      } catch (error) {
        console.error("Ошибка запроса баланса:", error);
      }
    };

    if (url === "/profile" && isAuthenticated) {
      fetchBalance();
    }
  }, [url, isAuthenticated]);

  const colorBalance = () => {
    if (balance === null) return "gray";
    if (balance < 0) return "red";
    if (balance === 0.00) return "gray";
    if (balance > 0) return "green";
  };

  const whatUrl = () => {
    if (url === "/profile") {
      return (
        <div className={styles.balance}>
          <div className={styles.balance__value}>
            <b style={{ color: colorBalance() }}>
              {balance !== null ? balance : "Загрузка..."}
            </b>
            <b style={{ fontSize: "10px", marginLeft: "3px" }}>₸</b>
          </div>
        </div>
      );
    } else {
      return (
        <a href="/profile" className={styles.profile__btn}>
          <Image src="/lock-red.svg" alt="lock-red" width={16} height={16} /> Личный
          кабинет
        </a>
      );
    }
  };

  // Проверка медиазапросов только на клиенте
  useEffect(() => {
    const handleResize = () => {
      setMatches({
        576: window.innerWidth >= 576,
        1200: window.innerWidth >= 1200,
      });
    };

    if (isClient) {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isClient]);

  // Статичный контент, который рендерится без JavaScript
  const staticContent = (
    <>
      <div className={styles.left}>
        <a href="/">
          {matches[576] ? (
            <Image
              src="/logo.svg"
              alt="logo"
              width={170}
              height={70}
              priority
            />
          ) : (
            <LogoIcon />
          )}
        </a>
      </div>
      <div className={styles.center}>
        <nav>
          <ul>
            <li>
              <a href="/o-kompanii">О нас</a>
            </li>
            <li>
              <a href="/populyarnye-magaziny">Популярные магазины</a>
            </li>
            <li>
              <a href="/buy-me">Купи вместо меня</a>
            </li>
            <li>
              <a href="/kontakty">Контакты</a>
            </li>
            <li>
              <a href="/#calculator">Калькулятор</a>
            </li>
            <li>
              <a href="/faq">Q&A</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        {/* Статичный контент */}
        {staticContent}

        {/* Динамический контент, который рендерится только на клиенте */}
        {isClient && (
          <div className={styles.right}>
            {isAuthenticated ? (
              <>
                {whatUrl()}
                <a href="/logout" className={styles.register__btn}>
                  Выход
                </a>
              </>
            ) : (
              <>
                <a href="/login" className={styles.login__btn}>
                  <Image src="/login.svg" alt="login" width={16} height={20} /> Вход
                </a>
                <a href="/register" className={styles.register__btn}>
                  Регистрация
                </a>
              </>
            )}
            {!matches[1200] && <Drawer />}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
