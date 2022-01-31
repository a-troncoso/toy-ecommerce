import { useState } from "react";
import Link from "next/link";
import classNames from "classnames/bind";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Product from "@/components/product/Product";
import OutsideAlerter from "@/generic/OutsideAlerter";

import styles from "./cartPanel.module.scss";

let cx = classNames.bind(styles);

export default function CartPanel() {
  const [isCartDetailVisible, setIsCartDetailVisible] = useState(false);

  const cartPanelButtonActivator = cx({
    cartPanelButtonActivator: true,
    visible: !isCartDetailVisible,
  });

  const cartDetailClassName = cx({
    cartDetail: true,
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
        <div className={cartDetailClassName}>
          <div className={styles.productList}>
            <div className={styles.productWrapper}>
              <Product id="1" name="product 1" price="300" type="cart" />
            </div>
            <div className={styles.productWrapper}>
              <Product id="1" name="product 2" price="300" type="cart" />
            </div>
          </div>
          <div className={styles.cartDetailOptions}>
            <Link href="/checkout" passHref>
              <button className={styles.cartDetailOption}>Comprar</button>
            </Link>
          </div>
        </div>
      </OutsideAlerter>
    </div>
  );
}
