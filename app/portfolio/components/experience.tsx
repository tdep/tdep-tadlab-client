import JobsComponent from "@/app/portfolio/components/jobsComponent";

export default function Experience() {

  return (
      <article>
        <section>
          <h2>Work Experience</h2>
            <p>
              I'm lucky to have had a variety of work experiences over the years in all sorts of disciplines.
              Many have aligned with passions but a few have been particularly poignant. I've listed those below.
            </p>
        </section>
        <section>
          <JobsComponent/>
        </section>
      </article>
  )
}