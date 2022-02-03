import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import Label from "./Label";

import inputStyles from "./select.module.scss";

const InputSelect = ({
  label,
  options = [],
  value = "",
  disabled = false,
  onSelect = () => {},
}) => {
  const [optionOpen, setOptionOpen] = useState(false);

  const inputStyle = classnames(inputStyles.input, inputStyles.hasSuffix);
  let validateStyle = [];

  if (disabled) validateStyle = validateStyle.concat(inputStyles.disabled);

  const handlerOpen = () => {
    if (optionOpen || disabled) return;
    setOptionOpen(true);
  };

  useEffect(() => {
    const clickHandler = () => {
      setOptionOpen(false);
      setTimeout(() => document.removeEventListener("click", clickHandler), 10);
    };

    if (optionOpen) document.addEventListener("click", clickHandler);
  }, [optionOpen]);

  const getRow = (el, key) => {
    try {
      const action =
        key === "selected"
          ? null
          : () => {
              onSelect(el.value);
            };
      const isDisabled = el.disabled && el.disabled ? inputStyles.disabled : "";

      return (
        <div
          role="button"
          key={key}
          className={classnames(
            inputStyles.optionRow,
            inputStyles.optionRow,
            isDisabled
          )}
          tabIndex="0"
          onClick={action}
          onKeyDown={action}
        >
          {el.text}
        </div>
      );
    } catch (e) {
      return <div className={inputStyles.optionRow} />;
    }
  };

  return (
    <div className={classnames(inputStyles.inputContainer, validateStyle)}>
      {optionOpen}

      {label && <Label label={label} disabled={disabled} />}

      <div className={inputStyle}>
        <div
          role="button"
          className={inputStyles.currentElement}
          tabIndex="0"
          onClick={handlerOpen}
          onKeyDown={handlerOpen}
        >
          {value &&
            getRow(
              options.find((ob) => ob.value === value),
              "selected"
            )}
        </div>

        <div className={inputStyles.suffixContainer}>
          {optionOpen ? (
            <MdOutlineKeyboardArrowDown size={20} />
          ) : (
            <MdOutlineKeyboardArrowUp size={20} />
          )}
        </div>
      </div>

      <div className={inputStyles.bellowContainer}>
        {optionOpen && (
          <div className={inputStyles.optionContainer}>
            <div>
              {options.filter((el) => el.disabled !== true).map(getRow)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

InputSelect.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      prefix: PropTypes.string,
      text: PropTypes.string,
      value: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    })
  ),
  onSelect: PropTypes.func,
};

export default InputSelect;
