import Image from "next/image";
import amiiboHero from "@/public/amiibo-hero.jpg";

import styles from "./mainHero.module.scss";

export default function MainHero() {
  return (
    <div className={styles.mainHero}>
      <Image src={amiiboHero} alt="Amiibo image hero" />
    </div>
  );
}
