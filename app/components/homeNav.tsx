import Link from "next/link";

export default function HomeNav() {
    return (
        <div>
            Nav for Home
            <Link href={"/portfolio"}>Portfolio</Link>

        </div>
    )
}