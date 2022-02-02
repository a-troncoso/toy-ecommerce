import PropTypes from "prop-types";
import styles from "./radio.module.scss";

const Radio = ({
  checked = false,
  label = "",
  value = "",
  disabled = false,
  inline = false,
  onChange = () => {},
}) => {
  const handleChange = () => {
    if (!disabled) onChange(value);
  };

  return (
    <div
      aria-hidden="true"
      className={`${styles.radioContainer} ${inline ? styles.inline : ""}`}
      onClick={handleChange}
    >
      <div
        className={`
        ${styles.radio}
        ${!checked ? styles.unselectedRadio : styles.selectedRadio}
        ${disabled ? styles.disabledRadio : ""}
      `}
      >
        <div className={`${styles.outerCircle}`}>
          <div className={`${styles.innerCircle}`} />
        </div>
      </div>
      <label htmlFor={value}>{label}</label>
    </div>
  );
};

Radio.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Radio;
