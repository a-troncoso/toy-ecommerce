import PropTypes from "prop-types";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { toCurrencyFormat } from "@/utils/currency";
import { BsCartPlus } from "react-icons/bs";
import Counter from "@/components/counter/Counter";

import styles from "./product.module.scss";

// TODO: Refactor this component to use a generic component
export default function Product({
  id,
  className,
  type = "default",
  name,
  price,
  image = "https://via.placeholder.com/150",
}) {
  if (type === "featured")
    return (
      <Link href={`/productDetail?id=${id}`} passHref>
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
      </Link>
    );

  if (type === "cart")
    return (
      <Link href={`/productDetail?id=${id}`} passHref>
        <div className={classNames(styles.product, styles.cart, className)}>
          <div className={styles.productImageWrapper}>
            <Image src={image} width={50} height={50} alt="product image" />
          </div>
          <div className={styles.productInfo}>
            <span className={styles.productName}>{name}</span>
            <span className={styles.productPrice}>
              <span className={styles.productQuantity}>3 x </span>
              {toCurrencyFormat(price)}
            </span>
          </div>
        </div>
      </Link>
    );

  return (
    <Link href={`/productDetail?id=${id}`} passHref>
      <div className={classNames(styles.product, className)}>
        <div className={styles.productImageWrapper}>
          <Image src={image} width={100} height={100} alt="product image" />
        </div>
        <div className={styles.productInfo}>
          <span className={styles.productName}>{name}</span>
          <span className={styles.productPrice}>{toCurrencyFormat(price)}</span>
        </div>
        <CartOptions />
      </div>
    </Link>
  );
}

function CartOptions() {
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
          <BsCartPlus size={28} color="#fff" />
        </button>
      )}
      {alreadyAddedToCart && <Counter />}
    </div>
  );
}

Product.propTypes = {
  className: PropTypes.node,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.node,
};
