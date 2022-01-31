import { useState } from "react";

import styles from "./counter.module.scss";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counter} onClick={(e) => e.stopPropagation()}>
      <button
        className={styles.counterControl}
        onClick={() => setCount((prev) => prev - 1)}
      >
        -
      </button>
      <input type="number" value={count} onChange={() => {}} />
      <button
        className={styles.counterControl}
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </button>
    </div>
  );
}
