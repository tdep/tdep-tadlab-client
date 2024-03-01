import ProjectCard from "@/app/portfolio/components/projects/projectCard";

const ProjectCarousel = () => {
    return (
        <div className={"carousel-container"}>
            <div className={"carousel"}>
                <ProjectCard /> {/* this needs to be mapped to be 3 cards max from taken from the database */}
                <ProjectCard /> {/* this needs to be mapped to be 3 cards max from taken from the database */}
                <ProjectCard /> {/* this needs to be mapped to be 3 cards max from taken from the database */}
            </div>
        </div>
    )
}

export default ProjectCarousel;