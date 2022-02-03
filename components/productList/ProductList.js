import { useEffect, useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Product from "@/components/product/Product";
import Input from "@/components/input/Input";
import { useDispatch } from "react-redux";
import {
  addProductToCart,
  removeProductToCart,
} from "@/store/cart/cartActions";
import OutsideAlerter from "@/generic/OutsideAlerter";

import searchIcon from "@/public/search.png";
import nextIcon from "@/public/next.png";
import backIcon from "@/public/back.png";

import styles from "./productList.module.scss";
const cx = classNames.bind(styles);

const productsPerPage = 15;

function ProductListControl({ imageIcon, onClick }) {
  return (
    <button className={styles.productListControl} onClick={onClick}>
      <Image src={imageIcon} width={30} height={30} alt="control" />
    </button>
  );
}

export default function ProductList({ products = [], category = "all" }) {
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchInputWrapperClassName = cx({
    searchInputWrapper: true,
    visible: isSearchVisible,
  });

  useEffect(() => {
    const filteredByCategory =
      category === "all"
        ? products
        : products.filter((product) => product.type === category);
    const filteredBySearchValue = filteredByCategory.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredProducts(filteredBySearchValue);
  }, [products, category, searchValue]);

  useEffect(() => {
    const visibleProducts = filteredProducts.slice(
      (currentPage - 1) * productsPerPage,
      currentPage * productsPerPage
    );
    setVisibleProducts(visibleProducts);
  }, [filteredProducts, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [category, searchValue]);

  const handleClickControl = (pageVariation) => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage + pageVariation;
      const totalPages = Math.ceil(products.length / productsPerPage);
      const isNewPageInRange = newPage > 0 && newPage < totalPages;

      if (isNewPageInRange) return newPage;
      else return prevPage;
    });
  };

  const handleSearchControl = () => {
    setIsSearchVisible(true);
  };

  const handleChangeSearchValue = (e) => {
    setSearchValue(e);
  };

  return (
    <div className={styles.productList}>
      <div className={styles.productListHeader}>
        <div className={styles.searchWrapper}>
          <ProductListControl
            imageIcon={searchIcon}
            onClick={() => handleSearchControl()}
          />

          <div className={searchInputWrapperClassName}>
            <OutsideAlerter
              isActive={isSearchVisible}
              onOutsideClick={() => setIsSearchVisible(false)}
            >
              <Input
                type="text"
                value={searchValue}
                onChange={handleChangeSearchValue}
              />
            </OutsideAlerter>
          </div>
        </div>

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
  category: PropTypes.string,
};
