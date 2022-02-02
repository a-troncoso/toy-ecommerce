import { useState } from "react";
import styles from "./payment.module.scss";
import Radio from "@/components/input/Radio";

const paymentOptions = [
  {
    id: "1",
    name: "Tarjeta de Crédito o Débito",
    description:
      "Te vamos a redirigir a tu banco para realizar el pago. Una vez hecho volverás a la tienda.",
  },
  {
    id: "2",
    name: "PayPal",
    description:
      "Te vamos a redirigir al sitio de Paypal para realizar el pago. Una vez hecho volverás a la tienda.",
  },
  {
    id: "3",
    name: "Transferencia Bancaria",
    description: [
      "Debes realizar la tranferencia a:",
      "Banco: Banco de Chile",
      "Cuenta: Cuenta Corriente",
      "Número: 123456789",
      "Rut: 123456789-2",
      "Email: jorge.bustos@amiibo.com",
    ],
  },
  {
    id: "4",
    name: "Efectivo a Domicilio",
    description: "Recuerda tener sencillo al momento de recibir tus productos.",
  },
];

export default function Payment() {
  const [selectedOption, setSelectedOption] = useState();

  const handleSelectOption = (id) => {
    setSelectedOption(id);
  };

  return (
    <div className={styles.payment}>
      <h1 className={styles.paymentTitle}>Método de pago</h1>
      <div className={styles.paymentBox}>
        <ul>
          {paymentOptions.map((option) => (
            <PaymentOption
              key={option.id}
              id={option.id}
              name={option.name}
              description={option.description}
              isSelected={selectedOption === option.id}
              onSelectOption={handleSelectOption}
            />
          ))}
        </ul>
        <div className={styles.paymentBoxFooter}>
          <button className={styles.buyButton}>Ir a pagar</button>
        </div>
      </div>
    </div>
  );
}

const PaymentOption = ({
  id,
  name,
  description,
  isSelected,
  onSelectOption,
}) => {
  return (
    <li className={styles.paymentOption}>
      <Radio
        label={name}
        checked={isSelected}
        value={id}
        onChange={onSelectOption}
      />
      {isSelected &&
        (typeof description === "string" ? (
          <p className={styles.paymentOptionDescription}>{description}</p>
        ) : (
          <>
            {description.map((item) => (
              <p key={item} className={styles.paymentOptionDescription}>
                {item}
              </p>
            ))}
          </>
        ))}
    </li>
  );
};
