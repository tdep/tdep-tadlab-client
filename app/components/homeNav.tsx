import Link from "next/link";

export default function HomeNav() {
    return (
        <div className={"home-nav"}>
            <div className={"home-portfolio link"}>
                <p>Visit my Portfolio to learn more about me.</p>
                <Link href={"/portfolio"} className={"button"}>Portfolio</Link>
            </div>
            <div className={"home-blog link"}>
                <p>Or check out the Blog to see what I've been up to lately.</p>
                <Link href={""} className={"button"}>Blog</Link>
            </div>
            <div className={"home-tadlab link"}>
                <p>Find out what the TadLab is all about here.</p>
                <Link href={""} className={"button"}>TadLab</Link>
            </div>
            <div className={"home-tadlab"}>
                <p>If you already have an account, you can log in over there.</p>

                <h1 className={"home-arrows"}>&gt; &gt; &gt;</h1>
            </div>

        </div>
    )
}