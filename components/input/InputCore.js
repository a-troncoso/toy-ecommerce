import React from "react";
import PropTypes from "prop-types";
import styles from "./inputCore.module.scss";

const InputCore = ({
  id,
  name,
  value = "",
  type = "text",
  prefix,
  suffix,
  variant,
  onlyNumber = false,
  maxLength = 200,
  disabled = false,
  autoComplete = "on",
  placeholder,
  onChange = () => {},
  onBlur = () => {},
}) => {
  let inputStyle = [styles.input];

  if (disabled && disabled) inputStyle = inputStyle.concat(styles.disabled);

  if (prefix) inputStyle = inputStyle.concat(styles.hasPrefix);

  if (suffix) inputStyle = inputStyle.concat(styles.hasSuffix);

  const handleChange = (e) => {
    const updatedValue = e.target.value.trim();

    const isValidOnOnlyNumber = onlyNumber
      ? !Number.isNaN(+updatedValue)
      : true;
    const isValidLength = maxLength ? updatedValue.length <= maxLength : true;

    if (!isValidOnOnlyNumber || !isValidLength) return;

    if (onChange) onChange(updatedValue);
  };

  return (
    <div className={inputStyle.join(" ")}>
      {prefix && <div className={styles.prefixContainer}>{prefix}</div>}

      {variant && variant === "textarea" ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          onBlur={onBlur}
        />
      ) : (
        <input
          id={id}
          name={name}
          value={value}
          type={type}
          disabled={disabled}
          autoComplete={autoComplete}
          onChange={handleChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      )}

      {suffix && <div className={styles.suffixContainer}>{suffix}</div>}
    </div>
  );
};

InputCore.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onlyNumber: PropTypes.bool,
  variant: PropTypes.string,
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  autoComplete: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default InputCore;
