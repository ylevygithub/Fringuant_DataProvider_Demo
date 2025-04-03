import { NextRequest, NextResponse } from "next/server";

//------------------ API Middleware ------------------//

const apiMiddleware = async (req: NextRequest) => {
	if (req.nextUrl.pathname === "/api/unauthorized") return NextResponse.next();

	const res = NextResponse.next();

	const reqOrigin = req.headers.get("origin") ?? "";
	if (req.method === "OPTIONS") {
		const responseHeaders = new Headers(req.headers);
		responseHeaders.set("Access-Control-Allow-Origin", reqOrigin);
		return new NextResponse(
			JSON.stringify({ success: true, status: 200, headers: responseHeaders })
		);
	}

	return res;
};

export const config = {
	matcher: ["/((?!_next|.*\\..*).*)"],
};

//------------------ Middleware ------------------//

export const middleware = (request: NextRequest) => {
	if (request.nextUrl.pathname.startsWith("/api"))
		return apiMiddleware(request);
};
