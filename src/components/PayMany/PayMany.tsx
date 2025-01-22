import styles from "./styles.module.sass";
import Cookies from "js-cookie";
import instance from "@/utils/axios";
import toast from "react-hot-toast";

const PayMany = () => {
  const payParcel = async () => {
    try {
      const accessToken = Cookies.get("access_token");
      console.log("Access Token:", accessToken); // Log the access token

      if (!accessToken) {
        throw new Error("Access token not found");
      }

      const response = await instance.post(
        `/parcels/pay-many`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("Response:", response); // Log the response

      toast.success("Все посылки успешно оплачены");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Error:", error); // Log the error
      toast.error("Произошла ошибка при оплате посылок. Попробуйте снова.");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };

  return (
    <div className={styles.btn} onClick={() => payParcel()}>
      <p>Оплатить всё</p>
    </div>
  );
};

export default PayMany;
