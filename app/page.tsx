import styles from "./page.module.css";
import Link from "next/link";
import {TADLAB_API_URL} from "@/app/portfolio/lib/constants";

export default function Home() {

    const http = require('http');

    setInterval(() => {
        http.get(`${TADLAB_API_URL}`);
    }, 25 * 60 * 1000);

  return (
    <main className={styles.main}>
      <h1>Yar, thar be dragons here.</h1>
      <Link href={"/portfolio"}>Portfolio</Link>
    </main>
  );
}
