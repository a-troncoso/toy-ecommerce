import styles from "./mainHero.module.scss";

export default function MainHero() {
  return (
    <div className={styles.mainHero}>
      <div className={styles.heroImage} />
    </div>
  );
}
