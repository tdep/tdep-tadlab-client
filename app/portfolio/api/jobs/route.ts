import {Job, JobsResponse} from "@/app/_types/Job";
import {TADLAB_API_URL, X_API_KEY} from "@/app/portfolio/lib/_constants";

export const dynamic = 'force-dynamic'

export async function getAllJobs(): Promise<Array<Job>> {
  const req = await fetch(`${TADLAB_API_URL}/v1/jobs`, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': X_API_KEY, //TODO: replace with actual function to grab key from environment variable
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
  return await req.json();
}

export async function getJobById(id:number): Promise<Job> {
  const req = await fetch(`${TADLAB_API_URL}/v1/jobs/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': X_API_KEY,
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
  return await req.json();
}

export async function updateJob() {
  const res = await fetch(`${TADLAB_API_URL}/v1/jobs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': X_API_KEY,
    },
    body: JSON.stringify({ time: new Date().toISOString() }),
  })

  const data = await res.json()

  return Response.json(data)
}