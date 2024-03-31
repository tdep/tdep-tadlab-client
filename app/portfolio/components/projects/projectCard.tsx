import {Project, ProjectResponse} from "@/app/_types/Project";
import temp from "@/app/portfolio/public/images/portfolio-site-temp.png"

const ProjectCard = (project:Project) => {

    type ProjectComponentProp = {
        thisProject: Project
    }

    const ProjectsTitleComponent = (props: ProjectComponentProp) => {
        const {thisProject} = props;

        return (
            <div className={"card-title-container"}>
                <h3>{thisProject.title})</h3>
                    {thisProject.links.map(link => {
                        let links = {
                            'demo': link.name.includes("demo") ?
                                <li><a href={link.url} key={link.id} target={"_blank"}>Demo</a></li> : null,
                            'github': link.name.includes("github") ?
                                <li><a href={link.url} key={link.id} target={"_blank"}>GitHub</a></li> : null
                        }
                        return (
                            <ul key={"project_links"}>
                                {links.demo}
                                {links.github}
                            </ul>
                        )}
                    )}
            </div>
        )
    }

    const ProjectsDescriptionComponent = (props: ProjectComponentProp) => {
        const {thisProject} = props;

        return (
            <div className={"card-description-container"}>
                <img className={"project-image"} src={temp.src} alt={"temp"}/>

                <blockquote className={"project-description-container"}>
                    {thisProject.projectDetail.description}
                </blockquote>
            </div>
        )
    }


    return (
        <div className={"card-container"}>
            <section className={"card-contents"}>
                <ProjectsTitleComponent thisProject={project}/>
                <ProjectsDescriptionComponent thisProject={project}/>
            </section>
        </div>
    )
}

export default ProjectCard;