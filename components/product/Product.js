import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import { toCurrencyFormat } from "@/utils/currency";
import addToCartIcon from "@/public/add-to-cart.png";

import styles from "./product.module.scss";

export default function Product({
  className,
  type = "default",
  name,
  price,
  image = "https://via.placeholder.com/150",
}) {
  if (type === "featured")
    return (
      <div className={classNames(styles.product, styles.featured, className)}>
        <div>
          <div className={styles.productImageWrapper}>
            <Image src={image} width={150} height={150} alt="product image" />
          </div>
          <div className={styles.productInfo}>
            <span className={styles.productName}>{name}</span>
            <span className={styles.productPrice}>
              {toCurrencyFormat(price)}
            </span>
          </div>
        </div>
        <CartOptions />
      </div>
    );

  return (
    <div
      className={classNames(styles.product, className)}
      onClick={() => console.log("click on product")}
    >
      <div className={styles.productImageWrapper}>
        <Image src={image} width={100} height={100} alt="product image" />
      </div>
      <div className={styles.productInfo}>
        <span className={styles.productName}>{name}</span>
        <span className={styles.productPrice}>{toCurrencyFormat(price)}</span>
      </div>
      <CartOptions />
    </div>
  );
}

function CartOptions({}) {
  const [alreadyAddedToCart, setAlreadyAddedToCart] = useState(false);

  return (
    <div className={styles.cartOptions}>
      {!alreadyAddedToCart && (
        <button
          className={styles.addToCartButton}
          onClick={(e) => {
            e.stopPropagation();
            setAlreadyAddedToCart(true);
          }}
        >
          <Image src={addToCartIcon} alt="add to cart" width={36} height={36} />
        </button>
      )}
      {alreadyAddedToCart && (
        <div className={styles.productInCartCounter}>
          <button
            className={styles.counterControl}
            onClick={(e) => e.stopPropagation()}
          >
            -
          </button>
          <input type="number" />
          <button
            className={styles.counterControl}
            onClick={(e) => e.stopPropagation()}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
