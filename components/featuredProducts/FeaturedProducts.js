import PropTypes from "prop-types";
import Product from "@/components/product/Product";
import { useDispatch } from "react-redux";
import {
  addProductToCart,
  removeProductToCart,
} from "@/store/cart/cartActions";

import styles from "./featuredProducts.module.scss";

export default function FeaturedProducts({ products }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.featuredProducts}>
      <h2 className={styles.featuredProductsTitle}>Productos Destacados</h2>
      <div className={styles.productList}>
        {products.map((p) => (
          <Product
            className={styles.product}
            key={p.tail}
            id={p.tail}
            type="featured"
            name={p.name}
            price={p.price}
            image={p.image}
            onAddProductToCart={() => dispatch(addProductToCart(p))}
            onRemoveProductToCart={() => dispatch(removeProductToCart(p))}
          />
        ))}
      </div>
    </div>
  );
}

FeaturedProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      tail: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    })
  ),
};
