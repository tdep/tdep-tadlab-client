import ProjectCarousel from "@/app/portfolio/components/projects/projectCarousel";
import {useState} from "react";
import Pagination from "@/app/portfolio/components/Pagination";
import {CurrentPage} from "@/app/_types/Project";

export default function Projects() {
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(2);
    const lastCardIndex = currentPage * cardsPerPage;
    const firstCardIndex = lastCardIndex - cardsPerPage;
    const lastPage = 3;

    const thisPage:CurrentPage = {
        thisPage: currentPage,
        firstPageIndex: firstCardIndex,
        lastPageIndex: lastCardIndex
    }

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
                <ProjectCarousel {...thisPage} />
            </section>
        </article>
    )
}