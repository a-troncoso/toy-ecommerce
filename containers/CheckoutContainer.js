import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainHeader from "@/components/mainHeader/MainHeader";
import BillingDetail from "@/components/billingDetail/BillingDetail";
import CartDetail from "@/components/cartDetail/CartDetail";
import Payment from "@/components/payment/Payment";
import {
  fetchRegionsAction,
  fetchProvincesAction,
  fetchCommunesAction,
} from "@/store/territorialDivision/territorialDivisionActions";

import styles from "./checkoutContainer.module.scss";

export default function CheckoutContainer() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const territorialDivision = useSelector((state) => state.territorialDivision);
  const [isBillingDetailValid, setIsBillingDetailValid] = useState(false);

  useEffect(() => {
    dispatch(fetchRegionsAction());
  }, []);

  const handleChangeTerritorialInfo = (
    { provinceCode, regionCode },
    controlName
  ) => {
    if (controlName === "region") dispatch(fetchProvincesAction(regionCode));
    else if (controlName === "province")
      dispatch(fetchCommunesAction(regionCode, provinceCode));
  };

  const handleChangeFormValidation = (isFormValid) => {
    setIsBillingDetailValid(isFormValid);
  };

  return (
    <div>
      <main className={styles.main}>
        <MainHeader />
        <section className={styles.checkoutDetailSection}>
          <div className={styles.checkout}>
            <div>
              <BillingDetail
                regions={territorialDivision.regions}
                provinces={territorialDivision.provinces}
                communes={territorialDivision.communes}
                onChangeTerritorialInfo={handleChangeTerritorialInfo}
                onChangeFormValidation={handleChangeFormValidation}
              />
            </div>
            <div>
              <CartDetail
                type="checkout"
                products={cart.products}
                subtotalAmount={cart.subtotalAmount}
                dispatchCost={cart.dispatchCost}
              />
              <Payment isBillingDetailValid={isBillingDetailValid} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
