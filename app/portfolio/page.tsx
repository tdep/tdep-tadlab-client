'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";

import Experience from "@/app/portfolio/components/experience/experience";
import JobsComponent from "@/app/portfolio/components/experience/jobsComponent";
import About from "@/app/portfolio/components/about/about";
import Contact from "@/app/portfolio/components/contact/contact";
import Portfolio from "@/app/portfolio/components/portfolio/portfolio";
import Footer from "@/app/_includes/footer";
import Portrait from "@/app/_includes/portrait";

export default function Page() {
  const pathname = usePathname()
  return (
      <>
          <header>
              <div className={"container"}>
                  <h1 className={"text-3xl font-bold underline"}>Trevor DePew</h1>
                  <h1>Portfolio</h1>
              </div>
          </header>
          <main id={"main"} tabIndex={-1}>
              <div className={"container"}>
                  <About />
                  <Experience />
                  <Portfolio />
                  <Contact />
              </div>
          </main>
          <Portrait></Portrait>
          <Footer></Footer>
        <ul>
          <li>
            <Link className={`link ${pathname === '/' ? 'active' : ''}`}href={"/"}>
              Landing page
            </Link>
          </li>
        </ul>
      </>
  )
}