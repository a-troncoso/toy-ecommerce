import styles from "./product.module.scss";

export default function Product({
  type = "default",
  name,
  price,
  image = "https://via.placeholder.com/150",
}) {
  return (
    <div className={styles.product}>
      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
}
