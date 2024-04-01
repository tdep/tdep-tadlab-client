import {User} from "@/app/_types/User";
import {TADLAB_API_URL, X_API_KEY} from "@/app/portfolio/lib/constants";

export const dynamic = 'force-dynamic';

export async function getUserByEmail(email: string): Promise<User> {
    const req = await fetch(`${TADLAB_API_URL}/v1/users/${email}`, {
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