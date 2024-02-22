import Head from "next/head";

export default function Meta() {
    return (
        <Head>
            <link rel={"manifest"} href={"/favicon/site.webmanifest"} />
            <meta name={"msapplication-TileColor"} content={"#000000"} />
            <meta name={"msapplication-config"} content={"#000"} />
            <meta name={"theme-color"} content={"#000"} />
            <link rel={"alternate"} type={"application/rss+xml"} href={"/feed.xml"} />
            <meta
                name={"description"}
                content={"A statically generate thingy"}
            />
        </Head>
    )
}