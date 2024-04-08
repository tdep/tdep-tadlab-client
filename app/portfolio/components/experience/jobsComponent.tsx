import React, {useEffect, useState} from "react";
import {Job, JobsResponse} from "@/app/_types/Job";
import {getAllJobs, getJobById} from "@/app/portfolio/api/jobs/route";
import LoadingMessage from "@/app/portfolio/components/LoadingMessage";

export default function JobsComponent() {
  const [jobsResponse, setJobsResponse] = useState<Array<Job>>();
  const [job, setJob] = useState<Job>();
  const [activeJob, setActiveJob] = useState(8);
  const [loading, setLoading] = useState(false);
  const [refreshData, setRefreshData] = useState(true);

  const handleDataRefresh = () => {
    setRefreshData(!refreshData);
  }

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
    if (refreshData) {
        fetchJobs();
        setRefreshData(false);
    }
  }, [refreshData]);

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
      <>
          {jobsResponse ?
              <section className={"jobs-container"}>
                  <JobsListComponent jobs={jobsResponse}/>
                  <blockquote className={"job-description-container"}>
                      <JobsDescriptionComponent jobs={jobsResponse}/>
                  </blockquote>
              </section> :
          <LoadingMessage handleDataRefresh={handleDataRefresh} />
          }
      </>
  )
}