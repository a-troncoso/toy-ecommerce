import Link from "next/link";
import Product from "@/components/product/Product";
import { toCurrencyFormat } from "@/utils/currency";

import styles from "./cartDetail.module.scss";

export default function CartDetail({ type = "cart" }) {
  return (
    <div className={styles.cartDetail}>
      {type === "checkout" && (
        <h1 className={styles.cartDetailTitle}>Resumen del carrito</h1>
      )}
      <div className={styles.cartDetailBox}>
        <div className={styles.productList}>
          <div className={styles.productWrapper}>
            <Product id="1" name="product 1" price="300" type="cart" />
          </div>
          <div className={styles.productWrapper}>
            <Product id="1" name="product 2" price="300" type="cart" />
          </div>
        </div>
        <div className={styles.cartDetailOptions}>
          <p>
            Subtotal: <span>{toCurrencyFormat(600)}</span>
          </p>
          {type === "checkout" && (
            <>
              <p>
                Despacho: <span>{toCurrencyFormat(3000)}</span>
              </p>
              <p>
                Total: <span>{toCurrencyFormat(3600)}</span>
              </p>
            </>
          )}
          {type === "cart" && (
            <Link href="/checkout" passHref>
              <button className={styles.cartDetailOption}>Comprar</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
