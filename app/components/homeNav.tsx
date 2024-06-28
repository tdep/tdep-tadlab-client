import Link from "next/link";

export default function HomeNav() {
    return (
        <section>
            <nav className={"home-nav"}>
                <ul id={"home-nav-ul"}>
                    <li><div className={"home-link"}>
                            <p>Visit my Portfolio to learn more about me.</p>
                            <a href={"/portfolio"} className={"button"}>Portfolio</a>
                        </div>
                    </li>
                    <li>
                        <div className={"home-link"}>
                            <p>Or check out the Blog to see what I've been up to lately.</p>
                            <a href={""} className={"button"}>Blog</a>
                        </div>

                    </li>
                    <li>
                        <div className={"home-link"}>
                            <p>Find out what the TadLab is all about here.</p>
                            <a href={""} className={"button"}>TadLab</a>
                        </div>
                    </li>
                </ul>
            </nav>
            <div className={"home-tadlab"}>
                <p>If you already have an account, you can log in over there.</p>
                <h1 className={"home-arrows"}>&gt; &gt; &gt;</h1>
            </div>
        </section>
    )
}