import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Input from "@/components/input/Input";
import Select from "@/components/input/Select";
import { saveBillingDetail } from "@/store/billing/billingActions";

import styles from "./billingDetail.module.scss";

const cx = classNames.bind(styles);
const addressBoxClassName = cx({
  inputGroup: true,
  addressBox: true,
});

export default function BillingDetail({
  regions = [],
  provinces = [],
  communes = [],
  onChangeTerritorialInfo = () => {},
  onChangeFormValidation = () => {},
}) {
  const dispatch = useDispatch();

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
    setForm((prev) => ({
      ...prev,
      [controlName]: value,
    }));
  };

  useEffect(() => {
    const formValues = Object.values(form);
    const isFormValid = formValues.every((value) => value !== "");
    onChangeFormValidation(isFormValid);
    if (isFormValid) dispatch(saveBillingDetail(form));
  }, [form]);

  return (
    <div className={styles.billingDetail}>
      <h1 className={styles.billingDetailTitle}>Detalles de entrega</h1>

      <form className={styles.billingForm}>
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
          options={regions}
          value={form.region}
          onSelect={(value) => {
            handleChangeFormControl(value, "region");
            onChangeTerritorialInfo({ regionCode: value }, "region");
          }}
        />
        <div className={styles.inputGroup}>
          <Select
            label="Provincia"
            value={form.province}
            options={provinces}
            onSelect={(value) => {
              handleChangeFormControl(value, "province");
              onChangeTerritorialInfo(
                { provinceCode: value, regionCode: form.region },
                "province"
              );
            }}
          />
          <Select
            label="Comuna"
            value={form.commune}
            options={communes}
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

BillingDetail.propTypes = {
  regions: PropTypes.arrayOf(PropTypes.shape({})),
  provinces: PropTypes.arrayOf(PropTypes.shape({})),
  communes: PropTypes.arrayOf(PropTypes.shape({})),
};
