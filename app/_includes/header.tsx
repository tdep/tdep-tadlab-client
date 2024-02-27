import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className={"container"}>
                <h1>Trevor DePew</h1>
                <h1>Portfolio</h1>
                <Link className={"link-social"} href={"https://www.linkedin.com/in/trevor-depew/"} target={"_blank"}>LinkedIn</Link>
                <Link className={"link-social"} href={"https://github.com/tdep"} target={"_blank"}>Github</Link>
                <Link className={"link-social"} href={"https://tadepewmusic.com/"} target={"_blank"}>TAD</Link>
            </div>
        </header>
    )
}