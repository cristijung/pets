import NavBar from "../navBar/NavBar";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* colocar 1 logo aqui */}
        <div className={styles.logoArea}>Ponto dos Pets</div>

        <NavBar />
      </div>
    </header>
  );
}
