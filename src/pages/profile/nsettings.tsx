import styles from "@/styles/profile/ProfileNotifications.module.sass";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { Notification } from "@/types/notification.interface";
import ProfileLayout from "@/components/ProfileLayout/ProfileLayout";
import AddParcel from "@/components/AddParcel/AddParcel";
import instance from "@/utils/axios";
import passToken from "@/utils/passToken";
import formatDate from "@/utils/formatDate";
import Head from "next/head";
import Cookies from "js-cookie";

export const getServerSideProps = (async (context) => {
  const res = await instance.get("/profile/notifications", {
    ...passToken(context),
  });
  const notifications: Notification[] = res.data.notifications;

  return { props: { notifications } };
}) satisfies GetServerSideProps<{
  notifications: Notification[];
}>;

const ProfileNotifications = ({
  notifications,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const status = +router.query.status! || 0;
  const buttons = ["Все уведомления", "Непрочитанные", "В пути", "В стране"];

  const [hiddenNotifications, setHiddenNotifications] = useState<number[]>([]);

  const changeStatus = (index: number) => {
    router.replace({
      pathname: router.pathname,
      query: { ...router.query, status: index },
    });
  };

  const filterNotifications = () => {
    switch (status) {
      case 1:
        return notifications.filter(
          (notification) => notification.read === "0"
        );
      case 2:
        return notifications.filter(
          (notification) => notification.read === "1"
        );
      case 3:
        return notifications.filter(
          (notification) => notification.title === "В пути"
        );
      case 4:
        return notifications.filter(
          (notification) => notification.title === "В стране"
        );
      default:
        return notifications;
    }
  };

  const filteredNotifications = filterNotifications();

  const handleChangeStatus = async (id: number) => {
    const accessToken = Cookies.get("access_token");
    await instance.post(
      "/profile/change-status",
      { id: id },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    setHiddenNotifications((prev) => [...prev, id]);
  };

  return (
    <ProfileLayout>
      <Head>
        <title>Мои уведомления</title>
      </Head>
      <div className={styles.btn}>
        <AddParcel />
      </div>
      <h1 className={styles.title}>Мои уведомления</h1>
      <p className={styles.description}>Уведомления о действиях на сайте</p>
      <div className={styles.filter}>
        {buttons.map((button, index) => (
          <button
            key={index}
            className={status === index ? styles.active : ""}
            onClick={() => changeStatus(index)}
          >
            {button}
          </button>
        ))}
      </div>
      <ul>
        {filteredNotifications.map((notification) => (
          <li
            key={notification.id}
            className={`${styles.list} ${
              hiddenNotifications.includes(notification.id) ? styles.hidden : ""
            }`}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>{notification.title}</span>
              <div
                dangerouslySetInnerHTML={{ __html: notification.text }}
                style={{ margin: "30px" }}
              />
              <p>{formatDate(notification.updated_at)}</p>
            </div>
            <div>
              {status === 1 && notification.read === "0" && (
                <button
                  onClick={() => handleChangeStatus(notification.id)}
                  style={{
                    padding: "5px 10px",
                    border: "1px solid #EB3738",
                    borderRadius: "5px",
                    backgroundColor: "#EB3738",
                    color: "#fff",
                  }}
                >
                  Пометить как прочитанное
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </ProfileLayout>
  );
};

export default ProfileNotifications;
