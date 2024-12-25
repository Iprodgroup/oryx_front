import {
  ChangeEvent,
  FormEvent,
  Fragment,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "@/styles/profile/ProfileParcels.module.sass";
import { confirmAlert } from "react-confirm-alert";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useIsClient, useMediaQuery, useOnClickOutside } from "usehooks-ts";
import Image from "next/image";
import toast from "react-hot-toast";
import axios from "axios";
import "react-confirm-alert/src/react-confirm-alert.css";

import { ArrowDownIcon, ArrowRightIcon } from "@/components/icons/arrows";
import { Parcel } from "@/types/parcel.interface";
import { Recipient } from "@/types/recipient.interface";
import { responsiveImg } from "@/utils/image";
import ProfileLayout from "@/components/ProfileLayout/ProfileLayout";
import AddParcel from "@/components/AddParcel/AddParcel";
import TrashIcon from "@/components/icons/Trash";
import PenIcon from "@/components/icons/Pen";
import instance from "@/utils/axios";
import passToken from "@/utils/passToken";
import statuses from "@/utils/statuses";
import formatDate from "@/utils/formatDate";
import Switch from "@/components/Switch/Switch";
import Cookies from "js-cookie";
import AddBalance from "@/components/AddBalance/AddBalance";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps<{
  parcels: Parcel[];
  recipients: Recipient[];
  user_id: number;
  total_unpaid_price: number;
}> = async (context) => {
  const res = await instance.get<{
    user_id: number;
    total_unpaid_price: number;
    items: Parcel[];
  }>("/profile/parcels", {
    ...passToken(context),
    params: {
      status: context.query.status,
    },
  });
  const res2 = await instance.get<{ recipients: Recipient[] }>(
    "/profile/settings",
    {
      ...passToken(context),
    }
  );

  const parcels = res.data.items;
  const recipients = res2.data.recipients;
  const user_id = res.data.user_id;
  const total_unpaid_price = res.data.total_unpaid_price;
  return { props: { parcels, recipients, user_id, total_unpaid_price } };
};

const ProfileParcels = ({
  parcels,
  recipients,
  user_id,
  total_unpaid_price,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [isDisplay, setIsDisplay] = useState<{
    state: boolean;
    data: Partial<Parcel>;
  }>({
    state: false,
    data: {},
  });
  const [search, setSearch] = useState("");
  const isClient = useIsClient();
  const matches = useMediaQuery("(min-width: 576px)");
  const ref = useRef(null);

  const router = useRouter();
  const onDisplay = (data: Parcel) => {
    if (isDisplay.state && isDisplay.data.id === data.id) {
      setIsDisplay({ state: false, data: {} });
    } else {
      setIsDisplay({ state: true, data: data });
    }
  };

  const offDisplay = () => {
    setIsDisplay({ state: false, data: {} });
  };

  useOnClickOutside(ref, offDisplay);

  const changeStatus = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "") {
      const { status, ...restQuery } = router.query;

      router.replace({
        pathname: router.pathname,
        query: restQuery,
      });

      return;
    }

    router.replace({
      pathname: router.pathname,
      query: { ...router.query, status: event.target.value },
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // @ts-ignore
    setSearch(event.target[0].value);
  };

  const deleteParcel = async (id: number) => {
    const loadingToastId = toast.loading("Загрузка...");

    try {
      await axios.delete(`/api/profile/delete-parcel/${id}`);

      toast.success("Посылка удалена");

      router.replace(router.asPath);
    } catch (error) {
      toast.error("Ошибка при удалении посылки");
    } finally {
      toast.dismiss(loadingToastId);
    }
  };

  useEffect(() => {
    offDisplay();
  }, [router]);

  const payParcel = async (id: number) => {
    try {
      const accessToken = Cookies.get("access_token");
      await instance.post(
        `/parcels/${id}/pay`,
        {
          // type: 1,
          // outgo: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      toast.success("Посылка успешно оплачена! Страница буде перезагружена.");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.loading(
        "Производится оплата посылки. Страница будет перезагрежена."
      );
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };

  const confirmPayParcel = (id: number) => {
    confirmAlert({
      title: "Подтверждение оплаты",
      message: "Вы уверены, что хотите оплатить эту посылку?",
      buttons: [
        {
          label: "Да",
          onClick: () => payParcel(id),
        },
        {
          label: "Нет",
          onClick: () => toast("Оплата отменена"),
        },
      ],
    });
  };

  return (
    isClient && (
      <ProfileLayout>
        <Head>
          <title>Мои посылки</title>
        </Head>

        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h1>Список ваших посылок</h1>
            <p>Вся информация о ваших посылках и их статусах</p>
            {!matches && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <AddParcel />
                <AddBalance user_id={user_id} />
                <Switch />
              </div>
            )}
            <form className={styles.formik} onSubmit={handleSubmit}>
              {matches ? (
                <input type="search" placeholder="Поиск по треку" />
              ) : (
                <label htmlFor="track">
                  Поиск по трек-номеру
                  <input type="text" id="track" placeholder="Трек-номер" />
                  <button type="submit" className={styles.search__btn}>
                    <Image
                      src="/search.svg"
                      alt="search"
                      width={24}
                      height={24}
                    />
                  </button>
                </label>
              )}
              {matches && (
                <select
                  name="status"
                  defaultValue={router.query.status}
                  onChange={changeStatus}
                >
                  <option value="">Все</option>
                  {statuses.map((status) => (
                    <option key={status.key} value={status.key}>
                      {status.value}
                    </option>
                  ))}
                </select>
              )}
              <button type="submit">Поиск</button>
              <button type="reset">Очистить</button>
            </form>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontSize: "1.2em",
                  fontWeight: "bold",
                  backgroundColor: "#ffffff",
                  padding: "12px",
                  borderRadius: "25px 25px 25px 0",
                  color: total_unpaid_price === 0 ? "green" : "#ff0000",
                  marginLeft: "10px",
                  margin: "10px",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    color: "black",
                    marginRight: "6px",
                  }}
                >
                  Общая сумма к оплате:
                </span>
                {total_unpaid_price}$
              </span>
            </div>
            {!matches && isDisplay.state ? (
              <div className={styles.card}>
                <b>Трек-номер</b>
                <div className={styles.card__head}>
                  <button
                    onClick={() => setIsDisplay({ state: false, data: {} })}
                  >
                    <Image
                      src="/arrow-left.svg"
                      alt="arrow-left"
                      width={16}
                      height={16}
                    />
                  </button>
                  <span>{isDisplay.data.track}</span>

                  <Image src="/warn.svg" alt="warn" width={24} height={24} />
                </div>
                <div
                  className={styles.card__fields}
                  style={{ fontWeight: "600", color: "#000" }}
                >
                  <label htmlFor="status">
                    <b style={{ fontWeight: "600", color: "#000" }}>Статус</b>
                    <input
                      type="text"
                      id="status"
                      value={statuses[+isDisplay.data.status!].value}
                      disabled
                    />
                  </label>
                  <label htmlFor="recipient">
                    <b style={{ fontWeight: "600", color: "#000" }}>
                      Получатель
                    </b>
                    <input
                      type="text"
                      id="recipient"
                      value={isDisplay.data.recipient_fio}
                      disabled
                    />
                  </label>
                  <label htmlFor="weight">
                    <b style={{ fontWeight: "600", color: "#000" }}>Вес</b>
                    <input
                      type="text"
                      id="weight"
                      value={isDisplay.data.weight! || "Не указан"}
                      disabled
                    />
                  </label>
                  <label htmlFor="prod_price">
                    <b style={{ fontWeight: "600", color: "#000" }}>
                      Стоимость доставки
                    </b>
                    <input
                      type="text"
                      id="prod_price"
                      value={
                        +isDisplay.data.prod_price! > 0
                          ? isDisplay.data.prod_price
                          : "Не указан"
                      }
                      disabled
                    />
                  </label>
                </div>
                <div className={styles.card__info}>
                  <strong>
                    Оплачен:
                    <span style={{ fontWeight: "600", marginLeft: "10px" }}>
                      {isDisplay.data.payed === "1" ? "Да" : "Нет"}
                    </span>
                  </strong>
                  <strong>Товары:</strong>
                  <ul>
                    {isDisplay.data.goods?.map((item) => (
                      <li
                        key={item.id}
                        style={{ fontWeight: "600", marginLeft: "10px" }}
                      >
                        {item.name} {item.price}
                        {item.currency === "USD" || item.currency === "$"
                          ? "$"
                          : "€"}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div ref={ref} className={styles.data}>
                <table>
                  <tbody>
                    <tr>
                      <th>Трек-код</th>
                      <th>Статус</th>
                      {matches && (
                        <>
                          <th>Дата добавления</th>
                          <th>Направление</th>
                          <th>Стоимость доставки</th>
                          {/* <th>Цена посылки</th> */}
                          <th></th>
                        </>
                      )}

                      <th
                        style={{
                          fontWeight: "400",
                        }}
                      >
                        Оплата
                      </th>
                    </tr>
                    {/* Трек-код */}
                    {parcels
                      .filter((parcel) => parcel.track.includes(search))
                      .map((parcel) => (
                        <Fragment key={parcel.id}>
                          {/* Статус */}
                          <tr>
                            <td>{parcel.track}</td>
                            <td>
                              <b>
                                {statuses[+parcel.status] ? (
                                  <b>{statuses[+parcel.status].value}</b>
                                ) : (
                                  <b>Статус неизвестен</b>
                                )}
                              </b>
                              <button onClick={() => onDisplay(parcel)}>
                                {isDisplay.state &&
                                isDisplay.data.id === parcel.id ? (
                                  <ArrowDownIcon />
                                ) : (
                                  <ArrowRightIcon />
                                )}
                              </button>
                            </td>
                            {matches && (
                              <>
                                <td>{formatDate(parcel.created_at)}</td>
                                {/* Направление */}
                                <td>
                                  {+parcel.city_out === 1
                                    ? "Нью-Йорк"
                                    : "Делавэр"}
                                  - {parcel.city}
                                </td>
                                {/* стоимость доставки */}
                                {+parcel.prod_price > 0 ? (
                                  <td>{parcel.prod_price}₸</td>
                                ) : (
                                  <td>Не указано</td>
                                )}
                                {/* Цена посылки */}
                                {/* <td>Цена посылки</td> */}
                                <td>
                                  <button
                                    onClick={() => deleteParcel(parcel.id)}
                                  >
                                    <TrashIcon />
                                  </button>
                                  <button>
                                    <PenIcon />
                                  </button>
                                  <button onClick={() => onDisplay(parcel)}>
                                    {isDisplay.state &&
                                    isDisplay.data.id === parcel.id ? (
                                      <ArrowDownIcon />
                                    ) : (
                                      <ArrowRightIcon />
                                    )}
                                  </button>
                                </td>
                              </>
                            )}
                            {/* Дата добавления */}
                            <td
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <button
                                disabled={+parcel.payed === 1}
                                onClick={() => confirmPayParcel(parcel.id)}
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  color: "white",
                                  fontWeight: "500",
                                  backgroundColor:
                                    +parcel.payed === 1 ? "green" : "#EB3738",
                                  borderRadius: "50%",
                                  border: "none",
                                  boxShadow:
                                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                                  transition: "all 0.2s ease-in-out",
                                  cursor: "pointer",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  userSelect: "none",
                                }}
                                onMouseOver={(e) => {
                                  e.currentTarget.style.boxShadow =
                                    "0 6px 8px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.15)";
                                }}
                                onMouseOut={(e) => {
                                  e.currentTarget.style.boxShadow =
                                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)";
                                }}
                                title={
                                  +parcel.payed === 1
                                    ? "Посылка оплачена"
                                    : "Оплатить посылку"
                                }
                              >
                                $
                              </button>
                            </td>
                          </tr>
                          {matches &&
                            isDisplay.state &&
                            isDisplay.data.id === parcel.id && (
                              <tr style={{ textAlign: "left" }}>
                                <td colSpan={6}>
                                  <table>
                                    <tbody>
                                      {isDisplay.data.goods?.map((item) => (
                                        <div
                                          key={item.id}
                                          style={{
                                            display: "flex",
                                            flexDirection: "column",
                                          }}
                                        >
                                          <td style={{ textAlign: "left" }}>
                                            <strong>
                                              Наименование товара:
                                            </strong>
                                            &nbsp;&nbsp;{item.name}
                                          </td>
                                          <td style={{ textAlign: "left" }}>
                                            <strong>Цена посылки:</strong>
                                            &nbsp;&nbsp;{item.price}$
                                          </td>
                                          <td style={{ textAlign: "left" }}>
                                            <strong>Доп. услуга:</strong>
                                            &nbsp;&nbsp;
                                            {item.additional_function ||
                                              "Не указано"}
                                          </td>
                                          <td style={{ textAlign: "left" }}>
                                            <strong>Город:</strong>&nbsp;&nbsp;
                                            {isDisplay.data.city}
                                          </td>
                                          <td style={{ textAlign: "left" }}>
                                            <strong>Получатель:</strong>
                                            &nbsp;&nbsp;
                                            {isDisplay.data.recipient_fio}
                                          </td>
                                        </div>
                                      ))}
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            )}
                        </Fragment>
                      ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <div className={styles.right}>
            {matches ? (
              <div className={styles.paba}>
                <AddParcel />
                <AddBalance user_id={user_id} />
              </div>
            ) : (
              <Image
                src="/man.svg"
                alt="man"
                {...responsiveImg}
                style={{
                  width: "100%",
                  maxHeight: "400px",
                }}
                priority
              />
            )}
          </div>
        </div>
      </ProfileLayout>
    )
  );
};

export default ProfileParcels;
