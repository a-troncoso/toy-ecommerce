import Image from "next/image";
import PropTypes from "prop-types";
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

function ProductListControl({ imageIcon, onClick }) {
  return (
    <button className={styles.productListControl} onClick={onClick}>
      <Image src={imageIcon} width={30} height={30} alt="control" />
    </button>
  );
}

export default function ProductList() {
  return (
    <div className={styles.productList}>
      <div className={styles.productListHeader}>
        <ProductListControl imageIcon={searchIcon} />
        <ProductListControl imageIcon={backIcon} />
        <ProductListControl imageIcon={nextIcon} />
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

ProductListControl.propTypes = {
  imageIcon: PropTypes.object,
  onClick: PropTypes.func,
};
