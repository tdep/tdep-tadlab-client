import {Project, ProjectImageNames} from "@/app/_types/Project";
import temp from "@/app/portfolio/public/images/portfolio-site-temp.png";
import webSynth from "@/app/portfolio/public/images/web-synth.gif";
import tadlab from "@/app/portfolio/public/images/tadlab.gif";
import sequinzer from "@/app/portfolio/public/images/sequinzer-6001.png";
import squinzer2A from "@/app/portfolio/public/images/sequinzer-6001-2a.gif";
import portfolioV2 from "@/app/portfolio/public/images/portfolio-v2.gif";

const ProjectCard = (project:Project) => {

    const imageNames : ProjectImageNames = {
        webSynth :webSynth,
        tadlab : tadlab,
        sequinzer : sequinzer,
        sequinzer2A : squinzer2A,
        portfolioV2 : portfolioV2
    }

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
                <h3>{thisProject.title}</h3>
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
        const imageUrl = linkUrls[2];
        let imageName = imageNames[imageUrl as keyof ProjectImageNames];



        return (
            <div className={"card-description-container"}>
                {imageUrl.length > 0 ?
                    <img className={"project-image"} src={imageName.src} alt={`${thisProject.title} image`}/> :
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