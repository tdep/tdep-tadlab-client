import {Project, ProjectResponse} from "@/app/_types/Project";

const ProjectCard = ({projects}:ProjectResponse) => {

    type ProjectsComponentsProps = {
        projects: Project[]
    }

    const ProjectsTitleComponent = (props: ProjectsComponentsProps) => {
        const {projects} = props;
        return (
            <ul>
                {projects.map((
                    p =>
                        <div className={"card-title-container"}>
                            <h3>{p.title}</h3>
                            <ul>
                                <li><a href={""}>Demo</a></li>
                                <li><a href={""}>GitHub</a></li>
                            </ul>
                        </div>
                ))}
                <li><a href={""}>GitHub</a></li>
            </ul>
        )
    }

    const ProjectsDescriptionComponent = (props: ProjectsComponentsProps) => {
        const {projects} = props;
        return (
            <div className={"card-description-container"}>
                <img className={"project-image"} src={"/public/temp.jpg"} alt={"temp"}></img>
                <blockquote className={"project-description-container"}>This will be where the project is described.
                </blockquote>
            </div>
        )
    }

    return (
        <div className={"card-container"}>
            <section className={"card-contents"}>
                <ProjectsTitleComponent projects={projects}/>
                <ProjectsDescriptionComponent projects={projects}/>
            </section>
        </div>
    )
}

export default ProjectCard;