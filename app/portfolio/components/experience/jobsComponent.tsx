import React, {useEffect, useState} from "react";
import {Job, JobsResponse} from "@/app/_types/Job";
import {getAllJobs, getJobById} from "@/app/portfolio/_api/jobs/route";

export default function JobsComponent() {
  const [jobsResponse, setJobsResponse] = useState<Array<Job>>();
  const [job, setJob] = useState<Job>();
  const [activeJob, setActiveJob] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = () => {
      setLoading(true);
      getAllJobs()
          .then(response => {
            setLoading(false);
            setJobsResponse(response);
          })
          .catch(e => console.log("----->", e));
    };
    fetchJobs();
  }, []);

  useEffect(() => {
      const fetchJobById = (id: number) => {
          setLoading(true);
          getJobById(id)
              .then(response => {
                  setLoading(false);
                  setJob(response);
              })
              .catch(e => console.log("----->", e));
      }
      fetchJobById(activeJob);
  }, [activeJob]);


  type JobsComponentsProps = {
      jobs: Job[]
  }

  function handleJobSelect(e:any) {
    setActiveJob(parseInt(e.target.id));
  }

  const JobsListComponent = (props: JobsComponentsProps) => {
    const {jobs} = props;
    return (
        <ul className={"jobs-list"}>
          {jobs.map(
              j =>
                  j.id === activeJob ?
                      <li id={j.id.toString()} key={j.id} className={"job-active"} onClick={handleJobSelect}>{j.name}</li> :
                      <li id={j.id.toString()} key={j.id} className={"job"} onClick={handleJobSelect}>{j.name}</li>
            )
          }
        </ul>
    )
  }

  const JobsDescriptionComponent = (props: JobsComponentsProps) => {
    const {jobs} = props;
    return (
        <>
          {jobs.map(j => j.id === activeJob ? <p id={j.id.toString()} key={j.id}>{j.jobDetail.description}</p> : null)}
        </>
    )
  }

  return (
      <section className={"jobs-container"}>
        {jobsResponse ? <JobsListComponent jobs={jobsResponse}/> : <h3>Loading jobs.... </h3> }
        <blockquote className={"job-description-container"}>
          {jobsResponse ? <JobsDescriptionComponent jobs={jobsResponse}/> : <h3>Loading descriptions....</h3>}
        </blockquote>
      </section>
  )
}