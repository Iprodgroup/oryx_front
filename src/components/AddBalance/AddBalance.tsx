import { Box } from "@mui/material";
import styles from "./styles.module.sass";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { handlePayment } from "../../utils/payment"; // Импортируйте handlePayment из вашего файла

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
  transition: "opacity 0.3s ease, transform 0.4s ease",
};

const AddBalance = () => {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (amount <= 0) {
      alert("Пожалуйста, введите сумму больше 0.");
      return;
    }

    try {
      const paymentSuccess = await handlePayment(amount);

      if (paymentSuccess) {
        alert("Платёж успешно завершён!");
        handleClose(); // Закрываем модальное окно, если платеж прошёл
      } else {
        alert("Платёж не удался. Пожалуйста, попробуйте снова.");
      }
    } catch (error) {
      console.error("Ошибка при обработке платежа", error);
      alert("Произошла ошибка при обработке платежа.");
    }
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
              name="amount"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
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
              onClick={() => {setTimeout(handleClose, 300)}}
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
