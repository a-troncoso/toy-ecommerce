import PropTypes from "prop-types";

import styles from "./productCategory.module.scss";

// const categories = [
//   {
//     id: 1,
//     name: "All",
//   },
//   {
//     id: 2,
//     name: "Cat 1",
//   },
//   {
//     id: 3,
//     name: "Cat 2",
//   },
//   {
//     id: 4,
//     name: "Cat 3",
//   },
// ];

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
