import React from "react";
import './styles/portfolioPage.css'

export default function PortfolioLayout({
    children,
} : {
  children: React.ReactNode
}) {
  return (
      <section>
        {children}
      </section>
  )
}