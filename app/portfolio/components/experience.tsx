// import JobsComponent from "@/app/portfolio/components/jobsComponent";
import React, {useEffect, useState} from "react";
import {getAllJobs} from "@/app/portfolio/_api/jobs/route";
import {Job, JobsResponse} from "@/app/_types/Job";

export default function Experience() {
  const [jobsResponse, setJobsResponse] = useState<JobsResponse>();
  const [activeJob, setActiveJob] = useState(1);

  useEffect(() => {
    getAllJobs().then(
        response => {
          setJobsResponse(response)
        }
    ).catch(e => console.log("------>", e))
  }, []);

  type JobsComponentsProps = {
    jobs: Job[]
  }

  function handleJobSelect(e:any) {
    setActiveJob(e.target.id);
  }

  const JobsListComponent = (props: JobsComponentsProps) => {
    console.log(props)
    const {jobs} = props;
    return (
        <ul>
          {jobs.map(j => {
            return(
                <li id={j.id.toString()} onClick={handleJobSelect}>{j.name}</li>
            )}
          )}
        </ul>
    )
  }

  const JobsDescriptionComponent = (props: JobsComponentsProps) => {
    const {jobs} = props;
    return (
        <>
          {jobs.map(j => j.id === activeJob ? <p id={j.id.toString()}>{j.description}</p> : null)}
        </>
    )
  }

  return (
      <article>
        <section>
          <h2>Work Experience</h2>
            <p>
              I'm lucky to have had a variety of work experiences over the years in all sorts of disciplines.
              Many have aligned with passions but a few have been particularly poignant. I've listed those below.
            </p>
        </section>
        <section className={"jobs-container"}>
          {jobsResponse ? <JobsListComponent jobs={jobsResponse.jobs}/> : <h3>Loading jobs.... </h3> }
          <blockquote className={"job-description-container"}>
            {jobsResponse ? <JobsDescriptionComponent jobs={jobsResponse.jobs}/> : <h3>Loading descriptions....</h3>}
          </blockquote>
        </section>
      </article>
  )
}