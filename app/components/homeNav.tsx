'use client'
export default function HomeNav() {

    function handleHover() {
        let chevron = document.getElementById("portfolio-chevron")
        if (chevron) {
            chevron.id = "on"
        }
    }
    return (
        <section>
            <nav className={"home-nav"}>
                <ul id={"home-nav-ul"}>
                    <li>
                        <div className={"home-link"}>
                            <p>Visit my portfolio to learn more about me
                                <span id={"portfolio-chevron"}>&gt;</span>
                            </p>
                            <a href={"/portfolio"} onMouseOver={handleHover} className={"button"}>Portfolio</a>
                        </div>
                    </li>
                    <li>
                        <div className={"home-link"}>
                            <p>Or, check out the blog to see what I've been up to lately
                                <span id={"blog-chevron"}>&gt;</span>
                            </p>
                            <a href={""} className={"button"}>Blog</a>
                        </div>

                    </li>
                    <li>
                        <div className={"home-link"}>
                            <p>Find out what the TadLab is all about here
                                <span id={"tadlab-chevron"}>&gt;</span>
                            </p>
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