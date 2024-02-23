// import JobsComponent from "@/app/portfolio/components/jobsComponent";
import React, {useEffect, useState} from "react";
import JobsComponent from "@/app/portfolio/components/experience/jobsComponent";
import {getAllJobs} from "@/app/portfolio/_api/jobs/route";
import {Job, JobsResponse} from "@/app/_types/Job";

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
          <JobsComponent />
      </article>
  )
}