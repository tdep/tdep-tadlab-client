export type Project = {
    id: number
    title: number
    description: string
    image_url: string
}

export type ProjectResponse = {
    projects: Project[]
}