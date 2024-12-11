import { FormEvent, useState } from "react";
import styles from "@/styles/BuyItForMe.module.sass";
import { InputMask } from "@react-input/mask";
import Head from "next/head";
import axios from "axios";
import toast from "react-hot-toast";

import { unformatPhoneNumber } from "@/utils/phoneNumber";
import Steps from "@/blocks/buy-it-for-me/Steps/Steps";
import Info from "@/blocks/buy-it-for-me/Info/Info";
import Advantages from "@/blocks/buy-it-for-me/Advantages/Advantages";
import Link from "next/link";

type Purchase = {
  id: number;
  url: string;
  characteristics: string;
  name: string;
};

const BuyItForMe = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([
    { id: 1, url: "", characteristics: "", name: "" },
  ]);

  const addPurchase = () => {
    setPurchases((prev) => [
      ...prev,
      { id: prev.length + 1, url: "", characteristics: "", name: "" },
    ]);
  };

  const removePurchase = (id: number) => {
    setPurchases((prev) => prev.filter((purchase) => purchase.id !== id));
  };

  const handleInputChange = (
    id: number,
    field: keyof Purchase,
    value: string
  ) => {
    setPurchases((prev) =>
      prev.map((purchase) =>
        purchase.id === id ? { ...purchase, [field]: value } : purchase
      )
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loadingToastId = toast.loading("Загрузка...");

    try {
      const formData = new FormData(event.currentTarget);

      let text = `PHONE: ${unformatPhoneNumber(
        formData.get("phone")?.toString()!
      )}`;

      purchases.forEach((purchase) => {
        text += `\n\nLINK: ${purchase.url}\nINFO: ${purchase.characteristics}\nNAME: ${purchase.name}`;
      });

      await axios.post("/api/send", {
        subject: "Купите вместо меня",
        text,
      });

      toast.success("Запрос отправлен");
    } catch (error) {
      toast.error("Ошибка при покупке");
    } finally {
      toast.dismiss(loadingToastId);
    }
  };

  return (
    <>
      <Head>
        <title>
          Сервис &quot;Купи вместо меня&quot; от Oryx. Доставка товаров из США в
          Казахстан
        </title>
        <meta
          name="description"
          content="Oryx покупает товары вместо Вас. Доставка до 10 рабочих дней. Минимальная комиссия за заказ. Экономия времени."
        />
        {/* <div dangerouslySetInnerHTML={{ __html: meta }} /> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content='Сервис "Купи вместо меня" от Oryx. Доставка товаров из США в Казахстан'
        />
        <meta
          property="og:description"
          content="Oryx покупает товары вместо Вас. Доставка до 10 рабочих дней. Минимальная комиссия за заказ. Экономия времени."
        />
        <meta property="og:url" content="https://oryx.kz/buy-me" />
        <meta
          property="og:site_name"
          content='Сервис "Купи вместо меня" от Oryx. Доставка товаров из США в Казахстан'
        />
        <meta property="og:image" content="https://oryx.kz/logo.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Главная",
                  item: "https://oryx.kz/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Купи вместо меня",
                  item: "https://oryx.kz/buy-me",
                },
              ],
            }),
          }}
        />
      </Head>
      <section>
        <link rel="canonical" href="https://oryx.kz/buy-me" />
        <div className={styles.wrapper}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              right: "7",
              gap: "10px",
              marginBottom: "20px",
              color: "#706e6e",
            }}
          >
            <Link href="/" style={{ textDecoration: "underline" }}>
              Главная
            </Link>
            / Купи вместо меня
          </div>
          <h1>ORYX осуществит покупку вместо Вас</h1>
          <Steps />
          <form className={styles.formik} onSubmit={handleSubmit}>
            <div className={styles.top}>
              <ul>
                {purchases.map((purchase) => (
                  <li key={purchase.id}>
                    <input
                      type="url"
                      placeholder="Скопируйте ссылку из магазина и вставьте сюда"
                      value={purchase.url}
                      onChange={(e) =>
                        handleInputChange(purchase.id, "url", e.target.value)
                      }
                      required
                    />
                    <input
                      type="text"
                      placeholder="Характеристики"
                      value={purchase.characteristics}
                      onChange={(e) =>
                        handleInputChange(
                          purchase.id,
                          "characteristics",
                          e.target.value
                        )
                      }
                      required
                    />
                    <input
                      type="text"
                      placeholder="Введите имя товара"
                      value={purchase.name}
                      onChange={(e) =>
                        handleInputChange(purchase.id, "name", e.target.value)
                      }
                      required
                    />
                    {purchase.id !== 1 ? (
                      <button
                        type="button"
                        onClick={() => removePurchase(purchase.id)}
                      >
                        ✕
                      </button>
                    ) : (
                      <div style={{ minWidth: 33, minHeight: 33 }}></div>
                    )}
                  </li>
                ))}
              </ul>
              <button type="button" onClick={addPurchase}>
                <span>+</span> Добавить еще одну покупку
              </button>
            </div>
            <div className={styles.bottom}>
              <InputMask
                mask="+7 (___) ___-__-__"
                replacement={{ _: /\d/ }}
                name="phone"
                placeholder="+7 (___) ___-__-__"
                required
              />
              <button type="submit">Отправить</button>
            </div>
          </form>
          <Info />
          <Advantages />
        </div>
      </section>
    </>
  );
};

export default BuyItForMe;
