import { signIn } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next/types";

async function handler(
    req: NextRequest,
    res: NextApiResponse<any>
) {
    const searchParams = req.nextUrl.searchParams;
    const role = searchParams.get("role")
    res.setHeader("Set-Cookie", `role=${encodeURIComponent(role as string)}; Path=/; SameSite=Lax; HttpOnly;`);
    const redirectUrl = `/app/dashboard/?loginState=signedIn&role=${role}`;
    res.redirect(redirectUrl);
}

export { handler as GET, handler as POST };
