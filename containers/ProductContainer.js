import PropTypes from "prop-types";
import MainHeader from "@/components/mainHeader/MainHeader";
import CartPanel from "@/components/cartPanel/CartPanel";
import ProductDetail from "@/components/productDetail/ProductDetail";

import styles from "@/containers/product.module.scss";

export default function ProductContainer({ id }) {
  return (
    <div>
      <main className={styles.main}>
        <MainHeader />
        <section className={styles.productDetailSection}>
          <ProductDetail id={id} />
        </section>
      </main>
      <aside>
        <CartPanel />
      </aside>
    </div>
  );
}

ProductDetail.propTypes = {
  id: PropTypes.string.isRequired,
};
