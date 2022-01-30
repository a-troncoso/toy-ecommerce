import Image from "next/image";
import styles from "./cartPanel.module.scss";

export default function CartPanel() {
  return (
    <div className={styles.cartPanel}>
      {/* <Image src={cart} width={30} height={30} alt="cart_icon" /> */}
    </div>
  );
}
