import Image from "next/image";
import PropTypes from "prop-types";
import Product from "@/components/product/Product";
import searchIcon from "@/public/search.png";
import nextIcon from "@/public/next.png";
import backIcon from "@/public/back.png";
import styles from "./productList.module.scss";

function ProductListControl({ imageIcon, onClick }) {
  return (
    <button className={styles.productListControl} onClick={onClick}>
      <Image src={imageIcon} width={30} height={30} alt="control" />
    </button>
  );
}

export default function ProductList({ products = [] }) {
  return (
    <div className={styles.productList}>
      <div className={styles.productListHeader}>
        <ProductListControl imageIcon={searchIcon} />
        <ProductListControl imageIcon={backIcon} />
        <ProductListControl imageIcon={nextIcon} />
      </div>
      <div className={styles.productListWrapper}>
        {products.map((p) => (
          <div key={p.tail}>
            <Product
              id={p.tail}
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

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      tail: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    })
  ),
};
