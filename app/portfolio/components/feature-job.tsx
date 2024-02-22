import Link from "next/link";

export default function FeatureJob({
    name,
    title,
    description,
    slug
}) {
    return (
        <section>
            <div className={"mb-8 md:mb-16"}>
                {name}
                {title}
                {description}
                {slug}
            </div>
            <div className={"md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28"}>
                <div>
                    <h3 className={"mb-4 text-4xl lg:text-6xl leading-tight"}>
                        <Link
                            href={`/jobs/${slug}`}
                            className={"hover:underline"}
                            dangerouslySetInnerHTML={{__html: name}}
                        ></Link>
                    </h3>
                </div>
            </div>
        </section>
    )
}