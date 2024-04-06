import portrait from "@/app/portfolio/public/images/profile_trevor.png"

export default function About() {
    return (
        <article id={"about"}>
            <section className={"container"}>
                <div className={"name-title"}>
                    <h1>Trevor DePew</h1>
                    <h3>Software Engineer</h3>
                </div>
            </section>
            <section className={"container blurb"}>
                <div id={"text-container"}>
                    <p>
                        I am a <strong>Full Stack Software Engineer</strong> with a passion for solving problems
                        about human
                        behavior and its relationship with the natural and urban environments from infrastructure to
                        climate
                        and points between.<br/><br/>
                        I have a core belief that truth and honesty with ourselves and each other is the best way to
                        create
                        an environment filled with meaningful and productive relationships.<br/><br/>
                        Apart from my academic pursuits in classical composition and performance, I have worked as a
                        technical support agent, piano technician, theater technician, and farmer.<br/><br/>
                        My previous career pursuits have led me through a healthy number of varied experiences which
                        have in
                        turn given me a well-rounded set of skills that I use to broaden my perspective as a
                        software
                        engineer.
                    </p>
                </div>
                <div className={"photo-container"}>
                    <img id={"photo"} src={portrait.src} alt={"Photo of Trevor DePew"}/>
                </div>
            </section>
        </article>
    )
}