const ProjectCard = () => {
    return (
        <div className={"card-container"} style={{width:"100%", alignContent:"space-between"}}>
            <div className={"card-contents"} style={{display:"flex", flexDirection:"row"}}>
                <div className={"title"}>
                    <h3>Title</h3>
                    <img src={"/public/temp.jpg"} alt={"temp"}></img>
                </div>
                <div className={"description"}>
                    <p>This will be where the project is described.</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;