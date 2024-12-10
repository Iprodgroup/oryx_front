export {};

declare global {
  interface Window {
    halyk: any;
  }
}
import { Box } from "@mui/material";
import styles from "./styles.module.sass";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { FormEvent, useState } from "react";
import axios from "axios";

import generateInvoiceId from "@/utils/generateInvoiceId";

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

const AddBalance = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fields = Object.fromEntries(formData);

    const invoiceId = generateInvoiceId();
    const backUrl = process.env.NEXT_PUBLIC_URL + "/profile/parcels";

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
          // accountId: process.env.NEXT_PUBLIC_EPAY_CLIENT_ID,
          terminal: process.env.NEXT_PUBLIC_EPAY_CLIENT_TERMINAL,
          amount: fields.amount,
          // name: 'ORYX.KZ',
          currency: "KZT",
          auth: paymentTokenData,
        },
        (clb: { success: boolean }) => {
          if (clb.success) {
            alert("OK");
          } else {
            alert("FAILED");
          }
        }
      );
    };
    document.body.appendChild(script);
  };

  return (
    <div>
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
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddBalance;
