import Image from "next/image";
import Product from "@/components/product/Product";
import searchIcon from "@/public/search.png";
import nextIcon from "@/public/next.png";
import backIcon from "@/public/back.png";
import styles from "./productList.module.scss";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Product 2",
    price: 100,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Product 3",
    price: 100,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    name: "Product 4",
    price: 100,
    image: "https://via.placeholder.com/100",
  },
];

export default function ProductList() {
  return (
    <div className={styles.productList}>
      <div className={styles.productListHeader}>
        <button className={styles.productListControl}>
          <Image src={searchIcon} width={30} height={30} />
        </button>
        <button className={styles.productListControl}>
          <Image src={backIcon} width={30} height={30} />
        </button>
        <button className={styles.productListControl}>
          <Image src={nextIcon} width={30} height={30} />
        </button>
      </div>
      <div className={styles.productListWrapper}>
        {products.map((p) => (
          <div key={p.id}>
            <Product
              name={p.name}
              price={p.price}
              image={p.image}
              className={styles.product}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
