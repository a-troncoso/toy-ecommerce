import Input from "@/components/input/Input";

import styles from "./billingDetail.module.scss";

export default function BillingDetail() {
  return (
    <div className={styles.billingDetail}>
      <h1 className={styles.billingDetailTitle}>Detalles de entrega</h1>
      <form>
        <div className={styles.inputGroup}>
          <Input label="Nombre" />
          <Input label="Apellido" />
        </div>
        <Input label="Email" />
        <Input label="Teléfono" />
        <Input label="Región" />
        <div className={styles.inputGroup}>
          <Input label="Comuna" />
          <Input label="Ciudad" />
        </div>
        <div className={styles.inputGroup}>
          <Input label="Calle" />
          <Input label="Número" />
        </div>
        <Input variant="textarea" label="Comentarios" />
      </form>
    </div>
  );
}
