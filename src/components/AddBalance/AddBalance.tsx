export {};

declare global {
  interface Window {
    halyk: any;
  }
}

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box } from "@mui/material";
import styles from "./styles.module.sass";
import Modal from "@mui/material/Modal";
import { FormEvent, useState } from "react";
import axios from "axios";
import generateInvoiceId from "@/utils/generateInvoiceId";
import Link from "next/link";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface AddBalanceProps {
  user_id: number;
}

const AddBalance = ({ user_id }: AddBalanceProps) => {
  const [open, setOpen] = useState(false);
  const [fields, setFields] = useState({
    amount: 0,
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fields = Object.fromEntries(formData);

    const invoiceId = generateInvoiceId();
    const backUrl = process.env.NEXT_PUBLIC_URL + "/profile/parcels";

    try {
      const { data: paymentTokenData } = await axios.postForm(
        "https://epay-oauth.homebank.kz/oauth2/token",
        {
          grant_type: "client_credentials",
          scope:
            "webapi usermanagement email_send verification statement statistics payment",
          client_id: process.env.NEXT_PUBLIC_EPAY_CLIENT_ID,
          client_secret: process.env.NEXT_PUBLIC_EPAY_CLIENT_SECRET,
          invoiceID: invoiceId,
          amount: fields.amount,
          currency: "KZT",
          terminal: process.env.NEXT_PUBLIC_EPAY_CLIENT_TERMINAL,
        }
      );

      const script = document.createElement("script");
      script.src = "https://epay.homebank.kz/payform/payment-api.js";
      script.onload = () => {
        window.halyk.showPaymentWidget(
          {
            invoiceId,
            invoiceIdAlt: invoiceId,
            backLink: backUrl,
            failureBackLink: backUrl,
            language: "RUS",
            description: "Оплата на сайте oryx.kz",
            terminal: process.env.NEXT_PUBLIC_EPAY_CLIENT_TERMINAL,
            amount: fields.amount,
            currency: "KZT",
            auth: paymentTokenData,
          },
          async (clb: { success: boolean }) => {
            if (clb.success) {
              await axios.post(
                `${process.env.NEXT_PUBLIC_API}/transactions`,
                {
                  user_id: user_id,
                  order: invoiceId,
                  tenge: fields.amount,
                  type: 1,
                  outgo: 1,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                }
              );
              toast.success("Оплата прошла успешно! 🎉");
            } else {
              toast.error("Оплата отменена. Попробуйте снова.");
            }
          }
        );
      };
      document.body.appendChild(script);
    } catch (error) {
      toast.error("Ошибка при инициализации платежа. Проверьте данные.");
    }
  };

  return (
    <div>
      <ToastContainer />
      <button onClick={handleOpen} className={styles.btn}>
        Пополнить баланс
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <strong
            style={{ fontSize: "20px", borderBottom: "1px solid #E65A57" }}
          >
            Пополнение баланса
          </strong>
          <br />
          <br />

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label
              htmlFor="amount"
              style={{ fontSize: "16px", fontWeight: "600" }}
            >
              Сумма:
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              min="0"
              step="0.01"
              onChange={(event) =>
                setFields({ ...fields, amount: parseFloat(event.target.value) })
              }
              required
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                margin: "10px 0",
              }}
            />
            <button
              type="submit"
              onClick={() => setTimeout(() => handleClose(), 500)}
              style={{
                marginTop: "10px",
                width: "100%",
                padding: "10px 20px",
                backgroundColor: "#E65A57",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Оплатить
            </button>
            <b style={{ fontSize: "12px", marginTop: "10px" }}>
              Нажимая на кнопку <q>Оплатить</q>, вы соглашаетесь с
              <br />
              <Link
                href="/obshchie-usloviya"
                style={{ borderBottom: "1px solid #f1f1f1" }}
              >
                условиями нашего сервиса
              </Link>
            </b>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddBalance;
