import Link from "next/link";
import NavBar from "../navBar/NavBar";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href='/' className={styles.logoArea}>
        <Image src='/logo_sw.png' alt='Logo' width={180} height={50} priority quality={75}/>
        {/* <img src='/logo_sw.png' alt='abc' width={180} height={50} />    */}
        </Link>
        <div className={styles.logoArea}>Ponto dos Pets</div>
        <NavBar />
      </div>
    </header>
  );
}
