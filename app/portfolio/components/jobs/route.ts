export async function getAllJobs() {
  const res = await fetch('http://localhost:8080/api/v1/jobs', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': "process.env.DATA_API_KEY", //replace with actual function to grab key from environment variable
    },
  })
  const data = await res.json()

  return Response.json({ data })
}

export async function getJobById(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const res = await fetch(`http://localhost:8080/api/v1/jobs/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'API-KEY': "process.env.DATA_API_KEY",
    },
  })
  const job = await res.json()

  return Response.json({ job })
}

export async function updateJob() {
  const res = await fetch("http://localhost:8080/api/v1/jobs", {
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