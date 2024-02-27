import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className={"container"}>
                <h1>Trevor DePew</h1>
                <h1>Portfolio</h1>
                <Link className={"link-social"} href={"linkedin"}>LinkedIn</Link>
                <Link className={"link-social"} href={"github"}>Github</Link>
                <Link className={"link-social"} href={"tadepewmusic"}>TAD</Link>
            </div>
        </header>
    )
}