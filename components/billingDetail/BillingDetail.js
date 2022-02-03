import { useState } from "react";
import classNames from "classnames/bind";
import Input from "@/components/input/Input";
import Select from "@/components/input/Select";

import styles from "./billingDetail.module.scss";

const cx = classNames.bind(styles);
const addressBoxClassName = cx({
  inputGroup: true,
  addressBox: true,
});

export default function BillingDetail() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    region: "",
    province: "",
    commune: "",
    street: "",
    addressNumber: "",
    comments: "",
  });

  const handleChangeFormControl = (value, controlName) => {
    console.log({ value, controlName });
    setForm((prev) => ({
      ...prev,
      [controlName]: value,
    }));
  };

  return (
    <div className={styles.billingDetail}>
      <h1 className={styles.billingDetailTitle}>Detalles de entrega</h1>

      <form>
        <div className={styles.inputGroup}>
          <Input
            label="Nombre"
            value={form.firstName}
            onChange={(value) => handleChangeFormControl(value, "firstName")}
          />
          <Input
            label="Apellido"
            value={form.lastName}
            onChange={(value) => handleChangeFormControl(value, "lastName")}
          />
        </div>
        <Input
          label="Email"
          value={form.email}
          onChange={(value) => handleChangeFormControl(value, "email")}
        />
        <Input
          label="Teléfono"
          value={form.phone}
          onlyNumber
          onChange={(value) => handleChangeFormControl(value, "phone")}
        />
        <Select
          label="Región"
          options={[
            { text: "op1", value: "1" },
            { text: "op2", value: "2" },
            { text: "op3", value: "3" },
          ]}
          value={form.region}
          onSelect={(value) => handleChangeFormControl(value, "region")}
        />
        <div className={styles.inputGroup}>
          <Select
            label="Comuna"
            value={form.province}
            options={[{ text: "op1", value: "1" }]}
            onSelect={(value) => handleChangeFormControl(value, "province")}
          />
          <Select
            label="Ciudad"
            value={form.commune}
            options={[{ text: "op1", value: "1" }]}
            onSelect={(value) => handleChangeFormControl(value, "commune")}
          />
        </div>
        <div className={addressBoxClassName}>
          <Input
            label="Calle"
            value={form.street}
            onChange={(value) => handleChangeFormControl(value, "street")}
          />
          <Input
            label="Número"
            value={form.addressNumber}
            onChange={(value) =>
              handleChangeFormControl(value, "addressNumber")
            }
          />
        </div>
        <Input
          variant="textarea"
          label="Comentarios"
          value={form.comments}
          onChange={(value) => handleChangeFormControl(value, "comments")}
        />
      </form>
    </div>
  );
}
