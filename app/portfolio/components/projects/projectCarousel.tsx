import ProjectCard from "@/app/portfolio/components/projects/projectCard";
import {useEffect, useState} from "react";
import {Project} from "@/app/_types/Project";
import {getAllProjects, getProjectById} from "@/app/portfolio/_api/projects/route";

const ProjectCarousel = () => {
    const [projectResponse, setProjectResponse] = useState<Array<Project>>();
    const [project, setProject] = useState<Project>();
    const [activeProject, setActiveProject] = useState(1);
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


    return (
        <div className={"carousel-container"}>
            <div className={"carousel"}>
                {projectResponse?
                    <ProjectCard projects={projectResponse}/>
                    : "Loading..."
                }
            </div>
        </div>
    )
}

export default ProjectCarousel;