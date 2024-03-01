'use client'

import {usePathname} from "next/navigation";

import Experience from "@/app/portfolio/components/experience/experience";
import About from "@/app/portfolio/components/about/about";
import Contact from "@/app/portfolio/components/contact/contact";
import Projects from "@/app/portfolio/components/projects/projects";
import Footer from "@/app/_includes/footer";
import Portrait from "@/app/_includes/portrait";

export default function Page() {
  const pathname = usePathname()
  return (
      <>
          <main id={"main"} tabIndex={-1}>
              <div className={"container"}>
                  <About />
                  <Experience />
                  <Projects />
                  <Contact />
              </div>
          </main>
          <Portrait></Portrait>
          <Footer></Footer>
      </>
  )
}