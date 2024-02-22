import {JobsResponse} from "@/app/_types/Job";

export const dynamic = 'force-dynamic'

export async function getAllJobs(): Promise<JobsResponse> {
  const req = await fetch('https://tdep-tadlab-api-713a0d814a93.herokuapp.com/api/v1/jobs', {
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': "5ae5b034-df1b-4ee2-b914-7655f938e49d", //TODO: replace with actual function to grab key from environment variable
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
  return req.json()
}

export async function getJobById(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const res = await fetch(`https://tdep-tadlab-api-713a0d814a93.herokuapp.com/api/v1/jobs/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'API-KEY': '5ae5b034-df1b-4ee2-b914-7655f938e49d',
    },
  })
  const job = await res.json()

  return Response.json({ job })
}

export async function updateJob() {
  const res = await fetch("https://tdep-tadlab-api-713a0d814a93.herokuapp.com/api/v1/jobs", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-KEY': "process.env.DATA_API_KEY",
    },
    body: JSON.stringify({ time: new Date().toISOString() }),
  })

  const data = await res.json()

  return Response.json(data)
}