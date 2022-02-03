import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { BsCartPlus } from "react-icons/bs";
import { toCurrencyFormat } from "@/utils/currency";
import Counter from "@/components/counter/Counter";
import {
  addProductToCart,
  removeProductToCart,
} from "@/store/cart/cartActions";

import styles from "./product.module.scss";

// TODO: Refactor this component to use a generic component
export default function Product({
  className,
  id,
  type = "default",
  name,
  image = "https://via.placeholder.com/150",
  price,
  quantityInCart = 1,
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
          <CartOptions productId={id} />
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
              <span className={styles.productQuantity}>
                {`${quantityInCart} x `}
              </span>
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
        <CartOptions productId={id} />
      </div>
    </Link>
  );
}

function CartOptions({ productId }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const productQuantityInCart =
    cart.products.find((p) => p.tail === productId)?.quantity || 0;

  const allProducts = useSelector((state) => state.product.all);
  const product = allProducts.find((p) => p.tail === productId);

  const [count, setCount] = useState(productQuantityInCart);

  const handleChangeCounter = ({ quantityVariation, value }) => {
    setCount(value);
    if (quantityVariation === 1) dispatch(addProductToCart(product));
    else if (quantityVariation === -1) dispatch(removeProductToCart(product));
  };

  return (
    <div className={styles.cartOptions}>
      {count === 0 && (
        <button
          className={styles.addToCartButton}
          onClick={(e) => {
            e.stopPropagation();
            handleChangeCounter({ quantityVariation: 1, value: 1 });
            addProductToCart(product);
          }}
        >
          <BsCartPlus size={28} color="#fff" />
        </button>
      )}
      {count > 0 && (
        <Counter value={count} onChangeCounter={handleChangeCounter} />
      )}
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
