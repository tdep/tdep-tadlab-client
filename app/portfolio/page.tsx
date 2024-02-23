'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";
import Experience from "@/app/portfolio/components/experience/experience";
import JobsComponent from "@/app/portfolio/components/experience/jobsComponent";

export default function Page() {
  const pathname = usePathname()
  return (
      <>
        <h1>This be my portfolio now.</h1>
        <ul>
          <li>
            <Link className={`link ${pathname === '/' ? 'active' : ''}`}href={"/"}>
              Landing page
            </Link>
          </li>
        </ul>
        <Experience/>
      </>
  )
}