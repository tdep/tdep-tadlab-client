import React from "react";
import './styles/portfolioPage.css'
import Header from "@/app/_includes/header";

export default function PortfolioLayout({
    children,
} : {
  children: React.ReactNode
}) {
  return (
      <section>
          <Header />
        {children}
      </section>
  )
}