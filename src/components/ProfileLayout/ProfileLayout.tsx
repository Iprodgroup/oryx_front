import styles from "./styles.module.sass";
import { useRouter } from "next/router";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import Link from "next/link";
import { useState, useEffect, PropsWithChildren, FC } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import instance from "@/utils/axios";

const ProfileLayout: FC<PropsWithChildren> = ({ children }) => {
  const isClient = useIsClient();
  const router = useRouter();
  const matches = useMediaQuery("(min-width: 576px)");

  // State for storing unread count
  const [unreadCount, setUnreadCount] = useState<number | null>(null);

  useEffect(() => {
    const body = document.body;
    body.style.backgroundColor = "#F4F5FE";

    return () => {
      body.removeAttribute("style");
    };
  }, []);

  useEffect(() => {
    const fetchUnreadCount = async () => {
      try {
        const token = Cookies.get("access_token");
        const response = await instance.get("/profile/unotifications", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUnreadCount(response.data.unread_count);
      } catch (error) {
        console.error("Error fetching unread count:", error);
      }
    };

    fetchUnreadCount();
  }, []);

  return (
    isClient && (
      <>
        {!matches && router.pathname !== "/profile" ? (
          <></>
        ) : (
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link href="/profile/addresses">Мои адреса</Link>
              </li>
              <li>
                <Link href="/profile/parcels">Мои посылки</Link>
              </li>
              <li>
                <Link href="/profile/settings">Личные данные</Link>
              </li>
              <li>
                <Link href="/profile/nsettings">
                  Настройка уведомлений
                  {unreadCount !== null && unreadCount > 0 && (
                    <span
                      style={{
                        marginLeft: "5px",
                        color: "red",
                        backgroundColor: "white",
                        padding: "8px 8px",
                        borderRadius: "50px",
                        fontWeight: "bold",
                        display:
                          unreadCount === 0 || unreadCount === null
                            ? "none"
                            : "inline",
                      }}
                    >
                      {unreadCount}
                    </span>
                  )}
                </Link>
              </li>
              {/* <li style={{backgroundColor: 'white', color: "#000", padding: "3px 8px", borderRadius: "5px"}}>
               1 USD = {exchangeRate ? `${exchangeRate} KZT` : 'Загрузка...'}
              </li> */}
            </ul>
          </nav>
        )}
        <section>
          <div className={styles.container}>{children}</div>
        </section>
      </>
    )
  );
};

export default ProfileLayout;
