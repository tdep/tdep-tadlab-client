export type ProjectLink = {
    id: number
    name: string
    url: string
}

export type ProjectLinkResponse = {
    projectLinks: ProjectLink[]
}