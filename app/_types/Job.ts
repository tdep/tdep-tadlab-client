export type Job = {
  id: number
  name: string
  title: string
  start_date: Date
  end_date: Date
  description: string
}

export type JobsResponse = {
    jobs: Job[]
}