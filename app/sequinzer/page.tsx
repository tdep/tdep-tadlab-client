'use client'

import {usePathname} from "next/navigation";
import Sequinzer from "@/app/sequinzer/components/Sequinzer";
import Footer from "@/app/_includes/footer";

export default function Page() {
    const pathname = usePathname();
    return (
        <>
            <main id={"sequinzer"} tabIndex={-1}>
                <div className={"container"}>
                    <Sequinzer />
                </div>
            </main>
            <Footer />
        </>
    )
}