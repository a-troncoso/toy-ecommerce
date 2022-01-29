import Image from "next/image";
import MainMenu from "@/components/mainMenu/MainMenu";
import amiiboLogo from "@/public/logo-amiibo.png";

import styles from "./mainHeader.module.scss";

export default function MainHeader() {
  return (
    <div className={styles.mainHeader}>
      <div className={styles.imageLogo}>
        <Image src={amiiboLogo} alt="Amiibo logo" />
      </div>
      <MainMenu />
    </div>
  );
}
