import ProjectCard from "@/app/portfolio/components/projects/projectCard";
import ProjectCarousel from "@/app/portfolio/components/projects/projectCarousel";

export default function Projects() {
    return (
        <article id={"projects"}>
            <section className={"container"}>
                <h2>Portfolion</h2>
                <div className={"projects-gallery"}>
                    <ProjectCarousel />

                </div>
            </section>
        </article>
    )
}