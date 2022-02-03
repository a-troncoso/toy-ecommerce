import PropTypes from "prop-types";

import styles from "./productCategory.module.scss";

export default function ProductCategory({ categories, onClickCategory }) {
  return (
    <div className={styles.productCategory}>
      <ul>
        {categories.map((c) => (
          <li key={c.key}>
            <button
              className={styles.categoryButton}
              onClick={() => onClickCategory(c)}
            >
              {c.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ProductCategory.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
