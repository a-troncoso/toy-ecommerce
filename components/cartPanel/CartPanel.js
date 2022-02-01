import { useState } from "react";
import classNames from "classnames/bind";
import { AiOutlineShoppingCart } from "react-icons/ai";
import OutsideAlerter from "@/generic/OutsideAlerter";
import CartDetail from "@/components/cartDetail/CartDetail";

import styles from "./cartPanel.module.scss";

let cx = classNames.bind(styles);

export default function CartPanel() {
  const [isCartDetailVisible, setIsCartDetailVisible] = useState(false);

  const cartPanelButtonActivator = cx({
    cartPanelButtonActivator: true,
    visible: !isCartDetailVisible,
  });

  const floatingPanelClassName = cx({
    floatingPanel: true,
    visible: isCartDetailVisible,
  });

  return (
    <div className={styles.cartPanel}>
      <button
        className={cartPanelButtonActivator}
        onClick={() => setIsCartDetailVisible(true)}
      >
        <AiOutlineShoppingCart color="#fff" size={32} />
        <div className={styles.itemsInCart}>3</div>
      </button>

      <OutsideAlerter
        isActive={isCartDetailVisible}
        onOutsideClick={() => setIsCartDetailVisible(false)}
      >
        <div className={floatingPanelClassName}>
          <CartDetail />
        </div>
      </OutsideAlerter>
    </div>
  );
}
