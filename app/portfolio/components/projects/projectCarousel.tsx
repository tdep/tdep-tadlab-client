import ProjectCard from "@/app/portfolio/components/projects/projectCard";
import React, {useEffect, useState} from "react";
import {CurrentPage, Project} from "@/app/_types/Project";
import {getAllProjects, getProjectById} from "@/app/portfolio/_api/projects/route";


const ProjectCarousel = ( currentPage : CurrentPage) => {
    const [projectResponse, setProjectResponse] = useState<Array<Project>>();
    const [project, setProject] = useState<Project>();
    const [activeProject, setActiveProject] = useState(3);
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        const fetchProjects = () => {
            setLoading(true);
            getAllProjects()
                .then(response => {
                    setLoading(false);
                    setProjectResponse(response);
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

    // TODO: build modal to access projects individually when clicked
    const ProjectsComponent = (props: ProjectsComponentProps) => {
        const {projects} = props;
        const displayedProjects = projects.slice(currentPage.firstPageIndex, currentPage.lastPageIndex)
        return (
            <ul className={"projects-list"}>
                {displayedProjects.map(
                    p =>
                        p.id === activeProject ?
                            <li id={p.id.toString()} key={p.id} onClick={handleProjectSelect} className={"project-active"}>
                                <ProjectCard
                                    key={p.id}
                                    author={p.author}
                                    createdAt={p.createdAt}
                                    createdBy={p.createdBy}
                                    updatedAt={p.updatedAt}
                                    updatedBy={p.updatedBy}
                                    entryName={p.entryName}
                                    entryType={p.entryType}
                                    id={p.id}
                                    title={p.title}
                                    projectDetail={p.projectDetail}
                                    links={p.links}

                                     />
                            </li> :
                            <li id={p.id.toString()} key={p.id} onClick={handleProjectSelect} className={"project"}>
                                <ProjectCard
                                    key={p.id}
                                    author={p.author}
                                    createdAt={p.createdAt}
                                    createdBy={p.createdBy}
                                    updatedAt={p.updatedAt}
                                    updatedBy={p.updatedBy}
                                    entryName={p.entryName}
                                    entryType={p.entryType}
                                    id={p.id}
                                    title={p.title}
                                    projectDetail={p.projectDetail}
                                    links={p.links} />
                            </li>
                    )
                }
            </ul>
        )
    }


    return (
        <div className={"carousel"}>
            {projectResponse?
                <ProjectsComponent projects={projectResponse} /> : <h3>Loading Projects....</h3>
            }
        </div>
    )
}

export default ProjectCarousel;