import PropTypes from "prop-types";
import Label from "./Label";
import InputCore from "./InputCore";

import styles from "./input.module.scss";

const Input = ({
  label,
  name,
  value = "",
  type = "text",
  suffix,
  prefix,
  variant,
  maxLength,
  error = false,
  success = false,
  disabled = false,
  placeholder,
  onlyNumber = false,
  autoComplete,
  onChange = () => {},
  onBlur = () => {},
}) => {
  let validateStyle = [];

  if (error) validateStyle = validateStyle.concat(styles.error);
  else if (success) validateStyle = validateStyle.concat(styles.success);

  if (disabled) validateStyle = validateStyle.concat(styles.disabled);

  return (
    <div className={[styles.inputContainer, validateStyle].join(" ")}>
      {typeof label === "string" ? (
        <Label htmlFor={name} label={label} disabled={disabled} />
      ) : (
        label
      )}

      <InputCore
        id={name}
        name={name}
        value={value}
        type={type}
        maxLength={maxLength}
        error={error}
        success={success}
        suffix={suffix}
        prefix={prefix}
        onlyNumber={onlyNumber}
        variant={variant}
        disabled={disabled}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.node,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf(["text", "password"]),
  error: PropTypes.bool,
  success: PropTypes.bool,
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onlyNumber: PropTypes.bool,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Input;
