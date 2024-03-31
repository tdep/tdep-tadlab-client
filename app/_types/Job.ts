export type Job = {
    createdAt: Date
    createdBy: string
    updatedAt: Date
    updatedBy: string
    entryName: string
    entryType: string
    id: number
    name: string
    startDate: Date
    endDate: Date
    jobDetail: JobDetail
}

export type JobsResponse = {
    jobs: Job[]
}

export type JobDetail = {
    description: string
    title: string
}