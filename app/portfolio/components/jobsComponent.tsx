import React, {useState} from "react";
import {Job, JobsResponse} from "@/app/_types/Job";

export default function JobsComponent() {
  const [jobsResponse, setJobsResponse] = useState<JobsResponse>();

  const [activeJob, setActiveJob] = useState(1);




  //TODO: Translate the jobsResponse into Jobs (here?)
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
      <section className={"jobs-container"}>
        {/*{jobsResponse ? <JobsListComponent jobs={jobsResponse.jobs}/> : <h3>Loading jobs.... </h3> }*/}
        {/*<blockquote className={"job-description-container"}>*/}
        {/*  {jobsResponse ? <JobsDescriptionComponent jobs={jobsResponse.jobs}/> : <h3>Loading descriptions....</h3>}*/}
        {/*</blockquote>*/}
      </section>
  )
}