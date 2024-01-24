import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Yar, thar be dragons here.</h1>
      <Link href={"/portfolio"}>Portfolio</Link>
    </main>
  );
}
