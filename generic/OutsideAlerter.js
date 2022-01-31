import React, { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter({ ref, isActive, onOutsideClick }) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (isActive) onOutsideClick();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, isActive]);
}

/**
 * Component that alerts if you click outside of it
 */
export default function OutsideAlerter({ children, isActive, onOutsideClick }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter({ ref: wrapperRef, isActive, onOutsideClick });

  return <div ref={wrapperRef}>{children}</div>;
}
