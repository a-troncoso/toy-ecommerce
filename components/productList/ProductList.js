import { useEffect, useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import Product from "@/components/product/Product";
import { useDispatch } from "react-redux";
import {
  addProductToCart,
  removeProductToCart,
} from "@/store/cart/cartActions";

import searchIcon from "@/public/search.png";
import nextIcon from "@/public/next.png";
import backIcon from "@/public/back.png";

import styles from "./productList.module.scss";

const productsPerPage = 15;

function ProductListControl({ imageIcon, onClick }) {
  return (
    <button className={styles.productListControl} onClick={onClick}>
      <Image src={imageIcon} width={30} height={30} alt="control" />
    </button>
  );
}

export default function ProductList({ products = [] }) {
  const dispatch = useDispatch();
  const [visibleProducts, setVisibleProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const visibleProducts = products.slice(
      (currentPage - 1) * productsPerPage,
      currentPage * productsPerPage
    );
    setVisibleProducts(visibleProducts);
  }, [products, currentPage]);

  const handleClickControl = (pageVariation) => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage + pageVariation;
      const totalPages = Math.ceil(products.length / productsPerPage);
      const isNewPageInRange = newPage > 0 && newPage < totalPages;

      if (isNewPageInRange) return newPage;
      else return prevPage;
    });
  };

  return (
    <div className={styles.productList}>
      <div className={styles.productListHeader}>
        <ProductListControl
          imageIcon={searchIcon}
          onClick={() => handleClickControl("search")}
        />
        <ProductListControl
          imageIcon={backIcon}
          onClick={() => handleClickControl(-1)}
        />
        <ProductListControl
          imageIcon={nextIcon}
          onClick={() => handleClickControl(1)}
        />
      </div>
      <div className={styles.productListWrapper}>
        {visibleProducts.map((p) => (
          <div key={p.tail}>
            <Product
              className={styles.product}
              id={p.tail}
              name={p.name}
              price={p.price}
              image={p.image}
              onAddProductToCart={() => dispatch(addProductToCart(p))}
              onRemoveProductToCart={() => dispatch(removeProductToCart(p))}
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
