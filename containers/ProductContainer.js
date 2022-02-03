import { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import MainHeader from "@/components/mainHeader/MainHeader";
import CartPanel from "@/components/cartPanel/CartPanel";
import ProductDetail from "@/components/productDetail/ProductDetail";
import { fetchProductDetailsAction } from "@/store/product/productActions";
import { updateSubtotalAmount } from "@/store/cart/cartActions";

import styles from "@/containers/product.module.scss";

export default function ProductContainer({ id }) {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.product.detail);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (id) dispatch(fetchProductDetailsAction(id));
  }, [id]);

  useEffect(() => {
    dispatch(updateSubtotalAmount(cart.products));
  }, [cart.products]);

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
      <aside>
        <CartPanel
          products={cart.products}
          subtotalAmount={cart.subtotalAmount}
          dispatchCost={cart.dispatchCost}
        />
      </aside>
    </div>
  );
}

ProductDetail.propTypes = {
  id: PropTypes.string,
};
