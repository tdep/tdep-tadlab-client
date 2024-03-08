export type Tool = {
    id: number
    name: string
    image_url: string
}

export type ToolsResponse = {
    tools: Tool[]
}