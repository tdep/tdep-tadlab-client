import React from "react";
import './styles/sequinzerMain.css';
import Header from "@/app/_includes/header";
import NavPanel from "@/app/_includes/navPanel";

export default function SequinzerLayout({
    children,
} : {
    children: React.ReactNode
}) {
    return(
        <section>
            <NavPanel />

            {children}
        </section>
    )
}