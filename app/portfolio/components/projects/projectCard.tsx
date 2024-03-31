import {Project, ProjectResponse} from "@/app/_types/Project";

const ProjectCard = (project:Project) => {

    type ProjectComponentProp = {
        thisProject: Project
    }

    const ProjectsTitleComponent = (props: ProjectComponentProp) => {
        const {thisProject} = props;

        return (
            <div className={"card-title-container"}>
                <h3>{project.title})</h3>
                <ul>
                    <li><a href={""}>Demo</a></li>
                    <li><a href={""}>GitHub</a></li>
                </ul>
            </div>
        )
    }

    const ProjectsDescriptionComponent = (props: ProjectComponentProp) => {
        const {thisProject} = props;
        return (
            <div className={"card-description-container"}>
                <img className={"project-image"} src={""} alt={"temp"}></img>
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