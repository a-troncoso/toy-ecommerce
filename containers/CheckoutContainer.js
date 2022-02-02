import { useSelector } from "react-redux";
import MainHeader from "@/components/mainHeader/MainHeader";
import BillingDetail from "@/components/billingDetail/BillingDetail";
import CartDetail from "@/components/CartDetail/CartDetail";
import Payment from "@/components/payment/Payment";

import styles from "./checkoutContainer.module.scss";

export default function CheckoutContainer() {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <main className={styles.main}>
        <MainHeader />
        <section className={styles.checkoutDetailSection}>
          <div className={styles.checkout}>
            <div>
              <BillingDetail />
            </div>
            <div>
              <CartDetail
                type="checkout"
                products={cart.products}
                subtotalAmount={cart.subtotalAmount}
                dispatchCost={cart.dispatchCost}
              />
              <Payment />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
