import ProjectCard from "@/app/portfolio/components/projects/projectCard";
import React, {useEffect, useState} from "react";
import {Project} from "@/app/_types/Project";
import {getAllProjects, getProjectById} from "@/app/portfolio/_api/projects/route";

const ProjectCarousel = () => {
    const [projectResponse, setProjectResponse] = useState<Array<Project>>();
    const [project, setProject] = useState<Project>();
    const [activeProject, setActiveProject] = useState(2);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProjects = () => {
            setLoading(true);
            getAllProjects()
                .then(response => {
                    setLoading(false);
                    setProjectResponse(response);
                    console.log(projectResponse)
                })
                .catch(e => console.log("----->", e));
        };
        fetchProjects();
    }, []);

    useEffect(() => {
        const fetchProjectById = (id: number) => {
            setLoading(true);
            getProjectById(id)
                .then(response => {
                    setLoading(false);
                    setProject(response);
                })
                .catch(e => console.log("----->", e));
        }
        fetchProjectById(activeProject);
    }, [activeProject]);

    function handleProjectSelect(e:any) {
        setActiveProject(parseInt(e.target.id));
    }

    type ProjectsComponentProps = {
        projects: Project[]
    }

    const ProjectsComponent = (props: ProjectsComponentProps) => {
        const {projects} = props;
        return (
            <ul>
                {projects.map(
                    p =>
                        p.id === activeProject ?
                            <li id={p.id.toString()} key={p.id} onClick={handleProjectSelect}>
                                <ProjectCard
                                    id={p.id}
                                    title={p.title}
                                    description={p.description}
                                    image_url={p.image_url} />
                            </li> :
                            <li id={p.id.toString()} key={p.id} onClick={handleProjectSelect}>
                                <ProjectCard
                                    id={p.id}
                                    title={p.title}
                                    description={p.description}
                                    image_url={p.image_url} />
                            </li>
                    )
                }
            </ul>
        )
    }


    return (
        <div className={"carousel-container"}>
            <div className={"carousel"}>
                {projectResponse?
                    <ProjectsComponent projects={projectResponse} /> : <h3>Loading Projects....</h3>
                }
            </div>
        </div>
    )
}

export default ProjectCarousel;