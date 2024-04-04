import {Project} from "@/app/_types/Project";
import {TADLAB_API_URL, X_API_KEY} from "@/app/portfolio/lib/constants";
import {Tool} from "@/app/_types/Tool";

export const dynamic = 'force-dynamic';

export async function getAllProjects(): Promise<Array<Project>> {
    const req = await fetch(`${TADLAB_API_URL}/v1/projects`, {
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': X_API_KEY,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
    return await req.json();
}

export async function getProjectById(id:number): Promise<Project> {
    const req = await fetch(`${TADLAB_API_URL}/v1/projects/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': X_API_KEY,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
    return await req.json();
}

export async function getAllTools(): Promise<Array<Tool>> {
    const req = await fetch(`${TADLAB_API_URL}/v1/tools`, {
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': X_API_KEY,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
    return await req.json();
}
