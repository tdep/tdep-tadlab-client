import ProjectCard from "@/app/portfolio/components/projects/projectCard";
import ProjectCarousel from "@/app/portfolio/components/projects/projectCarousel";

export default function Projects() {
    return (
        <article id={"projects"}>
            <section className={"container"}>
                <div className={"title-buttons"} style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                    <h2>Portfolion</h2>
                    <div className={"carousel"}>
                        <button>{"<"}</button>
                        <button>{">"}</button>
                    </div>
                </div>
                <p>Here be projects I've made and stuff.</p>
            </section>
            <section className={"container"}>
                <div className={"projects-gallery"}>
                    <ProjectCarousel />

                </div>
            </section>
        </article>
    )
}