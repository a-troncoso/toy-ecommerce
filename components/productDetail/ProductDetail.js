import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import PropTypes from "prop-types";
import Counter from "@/components/counter/Counter";
import { toCurrencyFormat } from "@/utils/currency";
import {
  addProductToCart,
  removeProductToCart,
} from "@/store/cart/cartActions";

import styles from "./productDetail.module.scss";

export default function ProductDetail({
  productId,
  name,
  image = "https://via.placeholder.com/500",
  price = 0,
  description,
}) {
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

  useEffect(() => {
    setCount(productQuantityInCart);
  }, [productQuantityInCart]);

  return (
    <div className={styles.productDetail}>
      <div className={styles.productImageWrapper}>
        <Image src={image} width={500} height={500} alt="product_image" />
      </div>
      <div className={styles.productInfo}>
        <h2 className={styles.productName}>{name}</h2>
        <h3 className={styles.productPrice}>{toCurrencyFormat(price)}</h3>
        <p className={styles.productDescription}>{description}</p>
        <Counter value={count} onChangeCounter={handleChangeCounter} />
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  productId: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.number,
  price: PropTypes.string,
  description: PropTypes.string,
};
