import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames/bind";

import styles from "./mainMenu.module.scss";

let cx = classNames.bind(styles);

const menuItems = [
  { name: "Tienda", link: "/" },
  { name: "Accesorios", link: "/404" },
  { name: "Blog", link: "/404" },
  { name: "Contacto", link: "/404" },
];

export default function MainMenu() {
  const router = useRouter();

  return (
    <nav className={styles.mainMenu}>
      <ul>
        {menuItems.map((i) => (
          <Link key={i.name} href={i.link} passHref>
            <li
              className={cx({
                active: router.route === i.link,
              })}
            >
              <a href="#">{i.name}</a>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
