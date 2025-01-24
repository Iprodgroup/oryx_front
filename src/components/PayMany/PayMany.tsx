import styles from "./styles.module.sass";
import Cookies from "js-cookie";
import instance from "@/utils/axios";
import toast from "react-hot-toast";
import { Parcel } from "@/types/parcel.interface";

interface PayManyProps {
  parcels: Parcel[];
}

const PayMany: React.FC<PayManyProps> = ({ parcels }) => {
  const payParcel = async () => {
    try {
      const accessToken = Cookies.get("access_token");
      console.log("Access Token:", accessToken);

      if (!accessToken) {
        throw new Error("Access token not found");
      }

      const parcelIds = parcels
        .filter((parcel) => parcel.payed === "0")
        .map((parcel) => parcel.id);
      console.log("Parcel IDs:", parcelIds);

      const response = await instance.post(
        `/parcels/pay-many`,
        { ids: parcelIds },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("Response:", response);

      toast.success("Все посылки успешно оплачены");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
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
