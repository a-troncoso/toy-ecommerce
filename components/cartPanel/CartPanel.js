import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { AiOutlineShoppingCart } from "react-icons/ai";
import OutsideAlerter from "@/generic/OutsideAlerter";
import CartDetail from "@/components/cartDetail/CartDetail";

import styles from "./cartPanel.module.scss";

const cx = classNames.bind(styles);

export default function CartPanel({
  products = [],
  subtotalAmount,
  dispatchCost,
}) {
  const [isCartDetailVisible, setIsCartDetailVisible] = useState(false);

  const buttonActivatorClassName = cx({
    cartPanelButtonActivator: true,
    visible: !isCartDetailVisible,
  });

  const floatingPanelClassName = cx({
    floatingPanel: true,
    visible: isCartDetailVisible,
  });

  return (
    <div className={styles.cartPanel}>
      {products.length > 0 && (
        <button
          className={buttonActivatorClassName}
          onClick={() => setIsCartDetailVisible(true)}
        >
          <AiOutlineShoppingCart color="#fff" size={32} />
          <div className={styles.itemsInCart}>{products.length}</div>
        </button>
      )}

      <OutsideAlerter
        isActive={isCartDetailVisible}
        onOutsideClick={() => setIsCartDetailVisible(false)}
      >
        <div className={floatingPanelClassName}>
          <CartDetail
            products={products}
            subtotalAmount={subtotalAmount}
            dispatchCost={dispatchCost}
          />
        </div>
      </OutsideAlerter>
    </div>
  );
}

CartPanel.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      tail: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    })
  ),
  subtotalAmount: PropTypes.number,
  dispatchCost: PropTypes.number,
};
