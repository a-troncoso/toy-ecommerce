import PropTypes from "prop-types";

import styles from "./productCategory.module.scss";

export default function ProductCategory({ categories }) {
  return (
    <div className={styles.productCategory}>
      <ul>
        {categories.map((c) => (
          <li key={c.key}>{c.name}</li>
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
