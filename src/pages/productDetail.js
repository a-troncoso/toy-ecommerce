import Link from "next/link";
import styles from "../styles/productDetail.module.scss";

export default function ProductDetail() {
  return (
    <div className={styles.productDetail}>
      <h1>ProductDetail Page</h1>
      <Link href="/">
        <a>Go To Index</a>
      </Link>
    </div>
  );
}
