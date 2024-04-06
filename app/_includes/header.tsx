import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className={"container"}>
                <div className={"name"}>
                    <h1>Trevor DePew</h1>
                </div>
                <div className={"title"}>
                    <h1>Portfolio</h1>
                </div>
                <ul>
                    <li><Link className={"link-social"} href={"https://www.linkedin.com/in/trevor-depew/"} target={"_blank"}>LinkedIn</Link></li>
                    <li><Link className={"link-social"} href={"https://github.com/tdep"} target={"_blank"}>Github</Link></li>
                    <li><Link className={"link-social"} href={"https://tadepewmusic.com/"} target={"_blank"}>TAD</Link></li>
                </ul>
            </div>
        </header>
    )
}