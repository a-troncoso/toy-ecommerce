import styles from "./payment.module.scss";

const paymentOptions = [
  "Tarjeta de Crédito",
  "Tarjeta de Débito",
  "PayPal",
  "Transferencia Bancaria",
  "Efectivo a Domicilio",
];

export default function Payment() {
  return (
    <div className={styles.payment}>
      <h1 className={styles.paymentTitle}>Método de pago</h1>
      <div className={styles.paymentBox}>
        <ul>
          {paymentOptions.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
        <div className={styles.paymentBoxFooter}>
          <button className={styles.buyButton}>Ir a pagar</button>
        </div>
      </div>
    </div>
  );
}
