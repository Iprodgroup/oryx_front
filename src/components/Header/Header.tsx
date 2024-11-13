import { useEffect, useState } from "react";
import styles from "./styles.module.sass";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import Link from "next/link";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import Drawer from "../drawer/Drawer/Drawer";
import LogoIcon from "../icons/Logo";
import { usePathname } from "next/navigation";
import instance from "@/utils/axios";
import Cookies from "js-cookie";

const Header = () => {
  const isClient = useIsClient();
  const isAuthenticated = useAuth();
  const url = usePathname();

  const matches = {
    576: useMediaQuery("(min-width: 576px)"),
    1200: useMediaQuery("(min-width: 1200px)"),
  };

  const [balance, setBalance] = useState<number | null>(null);

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
    if (balance === 0.0) return "gray";
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
        <Link href="/profile" className={styles.profile__btn}>
          <Image src="/lock-red.svg" alt="lock-red" width={16} height={16} /> Личный
          кабинет
        </Link>
      );
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        {/* Статичные элементы, отображаемые при отключенном JavaScript */}
        <noscript>
          <div className={styles.left}>
            <Link href="/">
              <Image src="/logo.svg" alt="logo" width={170} height={70} priority />
            </Link>
          </div>
          <div className={styles.center}>
            <nav>
              <ul>
                <li><Link href="/o-kompanii">О нас</Link></li>
                <li><Link href="/populyarnye-magaziny">Популярные магазины</Link></li>
                <li><Link href="/buy-me">Купи вместо меня</Link></li>
                <li><Link href="/kontakty">Контакты</Link></li>
                <li><Link href="/#calculator">Калькулятор</Link></li>
                <li><Link href="/faq">Q&A</Link></li>
                <li><Link href="/login" className={styles.login__btn}>
                    <Image src="/login.svg" alt="login" width={16} height={20} /> Вход
                  </Link></li>
                  <li>
                  <Link href="/register" className={styles.register__btn}>
                    Регистрация
                  </Link>
                  </li>
              </ul>
            </nav>
          </div>
        </noscript>

        {/* Клиентские элементы, отображаемые при включенном JavaScript */}
        {isClient && (
          <>
            <div className={styles.left}>
              <Link href="/">
                {matches[576] ? (
                  <Image src="/logo.svg" alt="logo" width={170} height={70} priority />
                ) : (
                  <LogoIcon />
                )}
              </Link>
            </div>
            {matches[1200] && (
              <div className={styles.center}>
                <nav>
                  <ul>
                    <li><Link href="/o-kompanii">О нас</Link></li>
                    <li><Link href="/populyarnye-magaziny">Популярные магазины</Link></li>
                    <li><Link href="/buy-me">Купи вместо меня</Link></li>
                    <li><Link href="/kontakty">Контакты</Link></li>
                    <li><Link href="/#calculator">Калькулятор</Link></li>
                    <li><Link href="/faq">Q&A</Link></li>
                    
                  
                  </ul>
                </nav>
              </div>
            )}
            <div className={styles.right}>
              {isAuthenticated ? (
                <>
                  {whatUrl()}
                  <Link href="/logout" className={styles.register__btn}>
                    Выход
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/login" className={styles.login__btn}>
                    <Image src="/login.svg" alt="login" width={16} height={20} /> Вход
                  </Link>
                  <Link href="/register" className={styles.register__btn}>
                    Регистрация
                  </Link>
                </>
              )}
              {!matches[1200] && <Drawer />}
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
