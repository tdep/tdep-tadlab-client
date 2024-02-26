import React from "react";
import './styles/portfolioPage.css'

export default function PortfolioLayout({
    children, //will be a page or nested layout
} : {
  children: React.ReactNode
}) {
  return (
      <section>
        {/*Include shared ui here like sidebar */}
        <nav></nav>

        {children}
      </section>
  )
}