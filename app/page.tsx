import Title from "@/app/components/title";
import Blurb from "@/app/components/blurb";
import HomeNav from "@/app/components/homeNav";
import LoginPortal from "@/app/components/loginPortal";
import styles from "./styles/page.module.css";
import "./styles/home/homePage.css"

export default function Home() {

  return (
    <main className={styles.main}>
        <div className={"container home"}>
            <Title/>
            <div className={"container blurb-box"}>
                <Blurb/>
                <HomeNav />
                <LoginPortal/>
            </div>
        </div>
    </main>
  );
}
