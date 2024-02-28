'use client'

import {usePathname} from "next/navigation";

import Footer from "@/app/_includes/footer";
import Portrait from "@/app/_includes/portrait";

export default function Page() {
    const pathname = usePathname()
    return (
        <>
            <main id={"main"} tabIndex={-1}>
                <div className={"container"}>

                </div>
            </main>
            <Portrait></Portrait>
            <Footer></Footer>
        </>
    )
}