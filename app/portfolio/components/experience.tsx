// import JobsComponent from "@/app/portfolio/components/jobsComponent";
import React, {useEffect, useRef, useState} from "react";
import JobsComponent from "@/app/portfolio/components/jobsComponent";
import {getAllJobs} from "@/app/portfolio/_api/jobs/route";
import {Job, JobsResponse} from "@/app/_types/Job";

export default function Experience() {
  const [jobsResponse, setJobsResponse] = useState<JobsResponse>();
  const [activeJob, setActiveJob] = useState(1);
  const [loading, setLoading] = useState(false);
  const jobRef = useRef(jobsResponse);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = () => {
        setLoading(true);
        getAllJobs()
            .then(response => {
                setJobsResponse(response);
                setLoading(false);
                console.log(response)
            })
            .catch(e => console.log("----->", e));
    };


  return (
      <article>
        <section>
          <h2>Work Experience</h2>
            <p>
              I'm lucky to have had a variety of work experiences over the years in all sorts of disciplines.
              Many have aligned with passions but a few have been particularly poignant. I've listed those below.
            </p>
        </section>
          <JobsComponent />
      </article>
  )
}