const ProjectCard = () => {
    return (
        <div className={"card-container"}>
            <section className={"card-contents"}>
                <div className={"card-title-container"}>
                    <h3>Title</h3>
                    <ul>
                        <li><a href={""}>Demo</a></li>
                        <li><a href={""}>GitHub</a></li>
                    </ul>
                </div>
                <div className={"card-description-container"}>
                    <img className={"project-image"} src={"/public/temp.jpg"} alt={"temp"}></img>
                    <blockquote className={"project-description-container"}>This will be where the project is described.</blockquote>
                </div>

            </section>
        </div>
    )
}

export default ProjectCard;