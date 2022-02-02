import { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import MainHeader from "@/components/mainHeader/MainHeader";
import CartPanel from "@/components/cartPanel/CartPanel";
import ProductDetail from "@/components/productDetail/ProductDetail";
import { fetchProductDetailsAction } from "@/store/product/productActions";

import styles from "@/containers/product.module.scss";

export default function ProductContainer({ id }) {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.product.detail);

  useEffect(() => {
    if (id) dispatch(fetchProductDetailsAction(id));
  }, [id]);

  return (
    <div>
      <main className={styles.main}>
        <MainHeader />
        <section className={styles.productDetailSection}>
          <ProductDetail
            productId={productDetail.tail}
            name={productDetail.name}
            image={productDetail.image}
            price={productDetail.price}
            description={productDetail.description}
          />
        </section>
      </main>
      {/* <aside>
        <CartPanel />
      </aside> */}
    </div>
  );
}

ProductDetail.propTypes = {
  id: PropTypes.string,
};
