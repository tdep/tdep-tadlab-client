'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";

const posts = [
    {
      id: 1,
      title: "post 1",
      description: "perst",
      slug: ""
    },
  {
    id: 2,
    title: "post 2",
    description: "perst",
    slug: ""
  }]

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
          {posts.map((post) => (
              <li key={post.id}>
                <Link href={`/blog.${post.slug}`}>{post.title}</Link>
              </li>
          ))}
        </ul>
      </>
  )
}