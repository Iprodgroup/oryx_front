import {
  ChangeEvent,
  FormEvent,
  Fragment,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "@/styles/profile/ProfileParcels.module.sass";

import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useIsClient, useMediaQuery, useOnClickOutside } from "usehooks-ts";
import Image from "next/image";
import toast from "react-hot-toast";
import axios from "axios";

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

export const getServerSideProps = (async (context) => {
  const res = await instance.get<{ items: Parcel[] }>("/profile/parcels", {
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

  return { props: { parcels, recipients } };
}) satisfies GetServerSideProps<{ parcels: Parcel[]; recipients: Recipient[] }>;

const ProfileParcels = ({
  parcels,
  recipients,
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
      const res = await instance.post(
        `/parcels/${id}/pay`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      toast.success("Посылка успешно оплачена!");

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Ошибка при оплате посылки");
    }
  };

  return (
    isClient && (
      <ProfileLayout>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h1>Список ваших посылок</h1>
            <p>Вся информация о ваших посылках и их статусах</p>
            {!matches && (
              <>
                <AddParcel />
                <Switch />
              </>
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
                <div className={styles.card__fields}>
                  <label htmlFor="status">
                    <span>Статус</span>
                    <input
                      type="text"
                      id="status"
                      value={statuses[+isDisplay.data.status!].value}
                      disabled
                    />
                  </label>
                  <label htmlFor="recipient">
                    <span>Получатель</span>
                    <input
                      type="text"
                      id="recipient"
                      value={
                        recipients.find(
                          (recipient) =>
                            recipient.id === +isDisplay.data.recipient_id!
                        )?.fio
                      }
                      disabled
                    />
                  </label>
                  <label htmlFor="weight">
                    <span>Вес</span>
                    <input
                      type="text"
                      id="weight"
                      value={isDisplay.data.weight! || "Не указан"}
                      disabled
                    />
                  </label>
                  <label htmlFor="prod_price">
                    <span>Стоимость доставки</span>
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
                    <span>{isDisplay.data.payed === "1" ? "Да" : "Нет"}</span>
                  </strong>
                  <strong>Товары:</strong>
                  <ul>
                    {isDisplay.data.goods?.map((item) => (
                      <li key={item.id}>
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
                      <th>Дата добавления</th>
                      <th>Направление</th>
                      <th>Стоимость доставки</th>
                      {/* <th>Цена посылки</th> */}
                      <th></th>
                      <th>Статус оплаты</th>
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
                            {/* Дата добавления */}
                            <td>{formatDate(parcel.created_at)}</td>
                            {/* Направление */}
                            <td>
                              {+parcel.city_out === 1 ? "Нью-Йорк" : "Делавэр"}-{" "}
                              {parcel.city}
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
                              <button onClick={() => deleteParcel(parcel.id)}>
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
                            <td>
                              <button
                                disabled={+parcel.payed === 1}
                                onClick={() => payParcel(parcel.id)}
                                style={{
                                  color: "white",
                                  padding: "3px 5px",
                                  backgroundColor:
                                    +parcel.payed === 1 ? "green" : "#EB3738",
                                  borderRadius: "5px",
                                }}
                              >
                                {+parcel.payed === 1 ? "Оплачен" : "Оплатить"}
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
                                            &nbsp;&nbsp;Не указано
                                          </td>
                                          <td style={{ textAlign: "left" }}>
                                            <strong>Город:</strong>&nbsp;&nbsp;
                                            {isDisplay.data.city}
                                          </td>
                                          <td style={{ textAlign: "left" }}>
                                            <strong>Получатель:</strong>
                                            &nbsp;&nbsp;
                                            {isDisplay.data.user_fio}
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
              <AddParcel />
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
