export default function Contact() {
    return (
        <article id={"contact"}>
            <section className={"container"}>
                <h2>Contact</h2>
                <p>This is where all of my contact info will live!</p>
                <ol>
                    <li>Contact 1</li>
                    <li>Contact 2</li>
                    <li>Contact 3</li>
                </ol>
            </section>
            <footer id={"other-info"}>
                <div className={"container"}>
                    <h3>Other Projects</h3>
                    <a href={""} className={"link"}>Project 1</a>
                    <a href={""} className={"link"}>Project 2</a>
                    <a href={""} className={"link"}>Project 3</a>
                </div>
            </footer>
        </article>
    )
}