'use client'

import {usePathname} from "next/navigation";

export default function Page() {
    const pathname = usePathname()
    return(
        <>
            <main id={"main"} tabIndex={-1}>
                <div className={"container"}>
                    Hello World
                </div>
            </main>
        </>
    )
}