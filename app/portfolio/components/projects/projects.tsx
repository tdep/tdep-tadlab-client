import ProjectCarousel from "@/app/portfolio/components/projects/projectCarousel";
import {useState} from "react";
import Pagination from "@/app/portfolio/components/Pagination";

export default function Projects() {
    const [currentPage, setCurrentPage] = useState(1);
    const lastPage = 3;
    return (
        <article id={"projects"}>
            <section className={"container"}>
                <div className={"title-buttons"} style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                    <h2>Portfolion</h2>
                    <div className={"carousel"}>
                        <Pagination
                            currentPage={currentPage}
                            lastPage={lastPage}
                            maxLength={7}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                </div>
                <p>Here be projects I've made and stuff.</p>
            </section>
            <section className={"container"}>
                <ProjectCarousel />
            </section>
        </article>
    )
}