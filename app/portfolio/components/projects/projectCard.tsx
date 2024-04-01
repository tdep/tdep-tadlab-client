import {Link, Project, ProjectResponse} from "@/app/_types/Project";
import temp from "@/app/portfolio/public/images/portfolio-site-temp.png"

const ProjectCard = (project:Project) => {

    type ProjectComponentProp = {
        thisProject: Project;
    }



    const ProjectsTitleComponent = (props: ProjectComponentProp) => {
        const {thisProject} = props;
        const linkUrls = thisProject.links.map((l) => { return l.url });
        const titleLinks = {
            "demo": linkUrls[0],
            "github": linkUrls[1]
        }

        return (
            <div className={"card-title-container"}>
                <h3>{thisProject.title})</h3>
                <ul className={""}>
                    {titleLinks.demo.length > 0 ? <li><a href={titleLinks.demo}>Demo</a></li> : ""}
                    {titleLinks.github.length > 0 ? <li><a href={titleLinks.github}>GitHub</a></li> : ""}
                </ul>
            </div>
    )
    }

    const ProjectsDescriptionComponent = (props: ProjectComponentProp) => {
        const {thisProject} = props;
        const linkUrls = thisProject.links.map((l) => { return l.url });
        const descriptionLinks = {
            "image": linkUrls[2]
        }

        return (
            <div className={"card-description-container"}>
                {descriptionLinks.image.length > 0 ?
                    <img className={"project-image"} src={descriptionLinks.image} alt={`${thisProject.title} image`}/> :
                    <img className={"project-image"} src={temp.src} alt={"temp"}/>
                }
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