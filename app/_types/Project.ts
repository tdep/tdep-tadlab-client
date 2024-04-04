export type Project = {
    author: Author
    createdAt: Date
    createdBy: string
    updatedAt: Date
    updatedBy: string
    entryName: string
    entryType: string
    id: number
    title: number
    projectDetail: ProjectDetail
    links: Link[]
}

export type ProjectResponse = {
    projects: Project[]
}

export type Author = {
    firstName: string
    lastName: string
}

export type ProjectDetail = {
    description: string
}

export type Link = {
    id: number
    name: string
    url: string
}

export type CurrentPage = {
    thisPage: number;
    firstPageIndex: number;
    lastPageIndex: number;
}

export enum LinkTypes {
    DEMO = 'DEMO',
    GITHUB = 'GITHUB',
    IMAGE = 'IMAGE',
    TOOL = 'TOOL',
    LINKEDIN = 'LINKEDIN',
    EXTERNAL_PORTFOLIO = 'EXTERNAL_PORTFOLIO'
}