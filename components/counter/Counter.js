import styles from "./counter.module.scss";

const minCount = 0,
  maxCount = 100;

export default function Counter({ onChangeCounter = () => {}, value }) {
  const handleChangeCounter = (quantityVariation) => {
    const newCount = value + quantityVariation;
    const isNewCountInRange = newCount >= minCount && newCount <= maxCount;

    if (isNewCountInRange)
      onChangeCounter({ quantityVariation, value: newCount });
  };

  return (
    <div className={styles.counter} onClick={(e) => e.stopPropagation()}>
      <button
        className={styles.counterControl}
        onClick={() => handleChangeCounter(-1)}
      >
        -
      </button>
      <input type="number" value={value} readOnly />
      <button
        className={styles.counterControl}
        onClick={() => handleChangeCounter(1)}
      >
        +
      </button>
    </div>
  );
}
