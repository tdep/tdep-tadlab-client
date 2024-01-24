import { NextRequest } from "next/server";
import { isAuthenticated} from "@/app/@lib/auth";

// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: '/api/:function*',
}

export function middleware(request: NextRequest) {
  // Call the authentication function to check the request
  if (!isAuthenticated(request)) {
    // Respond with JSON indicating an error message
    return Response.json(
        { success: false, message: 'authentication failed' },
        {status: 401}
    )
  }
}