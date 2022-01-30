import classNames from "classnames";
import Image from "next/image";
import styles from "./product.module.scss";
import { toCurrencyFormat } from "@/utils/currency";

export default function Product({
  className,
  type = "default",
  name,
  price,
  image = "https://via.placeholder.com/150",
}) {
  return (
    <div className={classNames(styles.product, className)}>
      <div className={styles.productImageWrapper}>
        <Image src={image} width={150} height={150} alt="product image" />
      </div>
      <div className={styles.productInfo}>
        <span className={styles.productName}>{name}</span>
        <span className={styles.productPrice}>{toCurrencyFormat(price)}</span>
      </div>
    </div>
  );
}
