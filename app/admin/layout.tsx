import React from "react";
import './styles/adminPage.css'
import NavPanel from "@/app/_includes/navPanel";
import Header from "@/app/_includes/header";


export default function AdminLayout({
                                        children,
                                    } : {
    children: React.ReactNode
                                    }) {
    return (
        <section>
            <Header />
            <NavPanel />
        </section>
    )
}