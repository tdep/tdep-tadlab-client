import React from "react";
import '../portfolio/styles/portfolioPage.css'
import Header from "@/app/_includes/header";
import NavPanel from "@/app/_includes/navPanel";

export default function PortfolioLayout({
                                            children, //will be a page or nested layout
} : {
    children: React.ReactNode
}) {
    return (
        <section>
            {/*Include shared ui here like sidebar */}
            <Header />
            <NavPanel />

            {children}
        </section>
    )
}