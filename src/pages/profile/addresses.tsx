import { useState } from "react";
import styles from "@/styles/profile/ProfileAddresses.module.sass";

import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

import { responsiveImg } from "@/utils/image";
import { User } from "@/types/user.interface";
import ProfileLayout from "@/components/ProfileLayout/ProfileLayout";
import AddParcel from "@/components/AddParcel/AddParcel";
import instance from "@/utils/axios";
import passToken from "@/utils/passToken";
import Switch from "@/components/Switch/Switch";
import CountrySelect from "@/components/CountrySelect/CountrySelect";

export const getServerSideProps = (async (context) => {
  const res = await instance.get("/user", { ...passToken(context) });
  const user: User = await res.data;

  return { props: { user } };
}) satisfies GetServerSideProps<{ user: User }>;

const ProfileAddresses = ({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [state, setState] = useState("delaware");
  const isClient = useIsClient();
  const matches = useMediaQuery("(min-width: 576px)");

  const fields = {
    address1:
      state === "delaware" ? "705 Carson drive" : "3047 Emmons Avenue Brooklyn",
    address2: user.id_orx,
    city: state === "delaware" ? "Bear" : "New York",
    state: state === "delaware" ? "DE" : "New York (NY)",
    zip: state === "delaware" ? 19701 : 11235,
    country: "USA (United States of America)",
    phone: 19176057707,
  };

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      toast("Скопировано");
    });
  };

  return (
    isClient && (
      <ProfileLayout>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            {matches ? (
              <div className={styles.head}>
                <Image src="/plane.svg" alt="plane" width={50} height={50} />
                <h1>Ваши персональные адреса</h1>
              </div>
            ) : (
              <div>
                <AddParcel />
                <Switch />
                <CountrySelect />
              </div>
            )}
            <div className={styles.switch}>
              {["delaware", "ny"].map((st, index) => (
                <button
                  key={index}
                  style={{
                    borderBottomColor: st === state ? "#E84438" : "#00000080",
                    opacity: st === state ? 1 : 0.7,
                  }}
                  onClick={() => setState(st)}
                >
                  Адрес в {st === "delaware" ? "Дэлавер" : "Нью-Йорке"}
                </button>
              ))}
            </div>
            <div className={styles.fields}>
              <label>
                Address 1:
                <input type="text" value={fields.address1} disabled />
                <button
                  className={styles.copy__btn}
                  onClick={() => copyToClipboard(fields.address1)}
                >
                  <Image src="/copy.svg" alt="copy" width={35} height={35} />
                </button>
              </label>
              <label>
                Address 2:
                <input
                  type="text"
                  value={fields.address2}
                  disabled
                  className={styles.id}
                />
                <button
                  className={styles.copy__btn}
                  onClick={() => copyToClipboard(fields.address2)}
                >
                  <Image src="/copy.svg" alt="copy" width={35} height={35} />
                </button>
              </label>
              <label>
                City:
                <input type="text" value={fields.city} disabled />
                <button
                  className={styles.copy__btn}
                  onClick={() => copyToClipboard(fields.city)}
                >
                  <Image src="/copy.svg" alt="copy" width={35} height={35} />
                </button>
              </label>
              <label>
                State:
                <input type="text" value={fields.state} disabled />
                <button
                  className={styles.copy__btn}
                  onClick={() => copyToClipboard(fields.state)}
                >
                  <Image src="/copy.svg" alt="copy" width={35} height={35} />
                </button>
              </label>
              <label>
                Zip code:
                <input type="number" value={fields.zip} disabled />
                <button
                  className={styles.copy__btn}
                  onClick={() => copyToClipboard(fields.zip.toString())}
                >
                  <Image src="/copy.svg" alt="copy" width={35} height={35} />
                </button>
              </label>
              <label>
                Country:
                <input type="text" value={fields.country} disabled />
                <button
                  className={styles.copy__btn}
                  onClick={() => copyToClipboard(fields.country)}
                >
                  <Image src="/copy.svg" alt="copy" width={35} height={35} />
                </button>
              </label>
              <label>
                Phone:
                <input type="number" value={fields.phone} disabled />
                <button
                  className={styles.copy__btn}
                  onClick={() => copyToClipboard(fields.phone.toString())}
                >
                  <Image src="/copy.svg" alt="copy" width={35} height={35} />
                </button>
              </label>
            </div>
            <p className={styles.schedule}>
              Посылки принимаются на склад только в рабочие дни и в рабочее
              время.
            </p>
          </div>
          <div className={styles.right}>
            {matches ? (
              <>
                <AddParcel />
                <p>
                  При оформлении заказа на американских сайтах обязательно
                  указывайте Address 2 - это ваш уникальный номер ID. По нему мы
                  узнаем, что это ваша посылка, когда посылка поступит на наш
                  склад. Посылки без ID будет отложены в неопознанные грузы
                </p>
                <Link href="/prohibited">
                  Смотреть список запрещенных товаров
                </Link>

                <Image src="/man.svg" alt="man" {...responsiveImg} />
              </>
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

export default ProfileAddresses;
