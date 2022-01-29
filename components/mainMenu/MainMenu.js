import styles from "./mainMenu.module.scss";

const menuItems = ["item1", "item2", "item3", "item4"];

export default function MainMenu() {
  return (
    <nav className={styles.mainMenu}>
      <ul>
        {menuItems.map((i) => (
          <li key={i}>
            <a href="#">{i}</a>{" "}
          </li>
        ))}
      </ul>
    </nav>
  );
}
