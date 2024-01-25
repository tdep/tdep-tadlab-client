import React, {useEffect, useState} from "react";
import {Job, JobsResponse} from "@/app/_types/Job";
import {getAllJobs, getJobById} from "@/app/portfolio/_api/jobs/route";

export default function JobsComponent() {
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

  return (
      <>
        <h1>Blorp</h1>
        {jobsResponse ? <JobsListComponent jobs={jobsResponse.jobs}/> : <h3>Loading... </h3>}
      </>

  )
}