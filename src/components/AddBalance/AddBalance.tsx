import { Box } from "@mui/material";
import styles from "./styles.module.sass";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";

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

  return (
    <div>
      <button onClick={handleOpen} className={styles.btn}>Пополнить баланс</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form action="https://cms.oryx.kz/pay" target="_blank" method="GET" style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="amount" style={{fontSize: "16px", fontWeight: "600"}}>Сумма:</label>
            <input
              type="number"
              name="amount"
              id="amount"
              min="0"
              step="0.01"
              required
              style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", margin: "10px 0" }}
            />
            <button type="submit" style={{ marginTop: "10px", width: "100%", padding: "10px 20px", backgroundColor: "#E65A57", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Оплатить</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddBalance;
