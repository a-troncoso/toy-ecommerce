import PropTypes from "prop-types";
import Product from "@/components/product/Product";
import styles from "./featuredProducts.module.scss";

export default function FeaturedProducts({ products }) {
  return (
    <div className={styles.featuredProducts}>
      <h2 className={styles.featuredProductsTitle}>Productos Destacados</h2>
      <div className={styles.productList}>
        {products.map((p) => (
          <Product
            key={p.tail}
            id={p.tail}
            type="featured"
            name={p.name}
            price={p.price}
            image={p.image}
            className={styles.product}
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
