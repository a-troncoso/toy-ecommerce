import MainHeader from "@/components/mainHeader/MainHeader";
import BillingDetail from "@/components/billingDetail/BillingDetail";
import CartDetail from "@/components/CartDetail/CartDetail";
import Payment from "@/components/payment/Payment";

import styles from "./checkoutContainer.module.scss";

export default function CheckoutContainer() {
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
              <CartDetail type="checkout" />
              <Payment />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
