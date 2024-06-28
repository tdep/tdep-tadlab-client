import styles from "./styles/page.module.css";
import Title from "@/app/components/title";
import Blurb from "@/app/components/blurb";
import HomeNav from "@/app/components/homeNav";
import LoginPortal from "@/app/components/loginPortal";

export default function Home() {

  return (
    <main className={styles.main}>
        <div className={"container"}>
            <Title/>
            <Blurb/>
            <LoginPortal/>
            <HomeNav/>
        </div>
    </main>
  );
}
