import { useState, useEffect } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import Counter from "@/components/counter/Counter";
import { toCurrencyFormat } from "@/utils/currency";

import styles from "./productDetail.module.scss";

export default function ProductDetail({ id }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    findProduct(id);
  }, [id]);

  const findProduct = (id) => {
    setProduct({
      id: 1,
      name: "Product 1",
      price: 100,
      type: "amiibo",
      description: "Lorem Ipsum",
    });
  };

  return (
    <div className={styles.productDetail}>
      <div className={styles.productImageWrapper}>
        <Image
          src="https://via.placeholder.com/500"
          width="500"
          height="500"
          alt="product_image"
        />
      </div>
      <div className={styles.productInfo}>
        <h2 className={styles.productName}>{product.name}</h2>
        <h3 className={styles.productPrice}>
          {toCurrencyFormat(product.price)}
        </h3>
        <p className={styles.productDescription}>{product.description}</p>

        <Counter />
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  id: PropTypes.string.isRequired,
};
