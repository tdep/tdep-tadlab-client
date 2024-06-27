import styles from "./page.module.css";
import Title from "@/app/components/title";
import Blurb from "@/app/components/blurb";
import HomeNav from "@/app/components/homeNav";

export default function Home() {

  return (
    <main className={styles.main}>
        <Title/>
        <Blurb/>
        <HomeNav/>
    </main>
  );
}
