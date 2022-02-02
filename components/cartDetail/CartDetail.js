import Link from "next/link";
import PropTypes from "prop-types";
import Product from "@/components/product/Product";
import { toCurrencyFormat } from "@/utils/currency";

import styles from "./cartDetail.module.scss";

export default function CartDetail({
  type = "cart",
  products = [],
  subtotalAmount,
  dispatchCost,
}) {
  return (
    <div className={styles.cartDetail}>
      {type === "checkout" && (
        <h1 className={styles.cartDetailTitle}>Resumen del carrito</h1>
      )}
      <div className={styles.cartDetailBox}>
        <div className={styles.productList}>
          {products.map((p) => (
            <div key={p.tail} className={styles.productWrapper}>
              <Product
                id={p.tail}
                type="cart"
                image={p.image}
                name={p.name}
                price={p.price}
                quantityInCart={p.quantity}
              />
            </div>
          ))}
        </div>
        <div className={styles.cartDetailOptions}>
          <p>
            Subtotal: <span>{toCurrencyFormat(subtotalAmount)}</span>
          </p>
          {type === "checkout" && (
            <>
              <p>
                Despacho: <span>{toCurrencyFormat(dispatchCost)}</span>
              </p>
              <p>
                Total:{" "}
                <span>{toCurrencyFormat(subtotalAmount + dispatchCost)}</span>
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

CartDetail.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    })
  ),
  subtotalAmount: PropTypes.number,
  dispatchCost: PropTypes.number,
  onRemoveProduct: PropTypes.func,
};
