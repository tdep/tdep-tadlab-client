import Link from "next/link";
import "../../styles/contact.css"

export default function Contact() {
    return (
        <article id={"contact"}>
            <section className={"container"}>
                <h2>Contact</h2>
                <p>You can contact me through one of these profiles!</p>
                <div id={"contact-links"}>
                    <Link className={"button"} href={"https://www.linkedin.com/in/trevor-depew/"} target={"_blank"}>LinkedIn</Link>
                    <Link className={"button"} href={"https://github.com/tdep"} target={"_blank"}>Github</Link>
                    <Link className={"button"} href={"https://www.instagram.com/depewtrevor/"} target={"_blank"}>Instagram</Link>
                </div>

            </section>
            <footer id={"other-info"}>
                <div className={"container"}>
                    <p>Or check out some of my other projects!</p>
                    <div id={"other-projects"}>
                        <Link className={"button"} href={"https://soundcloud.com/t-depew"} target={"_blank"}>Soundcloud</Link>
                        <Link className={"button"} href={"https://tdepewmusic.wixsite.com/tdepewmusic"} target={"_blank"}>Woodworking/Art</Link>
                        <Link className={"button"} href={"https://www.youtube.com/channel/UCGVacZQUbCpGJcyAYkZZukA/featured"} target={"_blank"}>Youtube</Link>
                    </div>
                </div>
            </footer>
        </article>
    )
}