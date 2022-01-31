import Product from "@/components/product/Product";
import styles from "./featuredProducts.module.scss";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    price: 100,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    price: 100,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product 4",
    price: 100,
    image: "https://via.placeholder.com/150",
  },
];

export default function FeaturedProducts() {
  return (
    <div className={styles.featuredProducts}>
      <h2 className={styles.featuredProductsTitle}>Productos Destacados</h2>
      <div className={styles.productList}>
        {products.map((p) => (
          <Product
            key={p.id}
            id={p.id}
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
