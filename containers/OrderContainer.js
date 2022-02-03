import { useSelector, useDispatch } from "react-redux";
import MainHeader from "@/components/mainHeader/MainHeader";
import Product from "@/components/product/Product";

import styles from "./orderContainer.module.scss";

export default function OrderContainer() {
  const today = new Date();
  let deliveryDate = today.setDate(today.getDate() + 3);
  deliveryDate = new Date(deliveryDate).toLocaleDateString("es-CL");

  const cart = useSelector((state) => state.cart);
  const billing = useSelector((state) => state.billing);
  console.log(billing);

  return (
    <div>
      <main className={styles.orderContainer}>
        <MainHeader />
        <section className={styles.orderCreatedSection}>
          <div className={styles.checkoutData}>
            <h1 className={styles.checkoutTitle}>
              {`¡Felicidades ${billing.detail.firstName} Tu orden ha sido creada!`}
            </h1>
            <p className={styles.subtitle}>
              Te hemos enviado un email a: <span>{billing.detail.email} </span>
              con la confirmación de tu pedido
            </p>
            <dl className={styles.deliveryData}>
              <dt>Fecha de entrega</dt>
              <dd>{deliveryDate}</dd>

              <dt>Dirección de entrega</dt>
              <dd>{`${billing.detail.street} #${billing.detail.addressNumber} `}</dd>
            </dl>
            <div>
              <h2>Detalle:</h2>
              <ul>
                {cart.products.map((p) => (
                  <li key={p.tail} className={styles.productWrapper}>
                    <Product
                      id={p.tail}
                      image={p.image}
                      name={p.name}
                      price={p.price}
                      quantityInCart={p.quantity}
                      withCartOptions={false}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
