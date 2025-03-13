import { setCookie } from "cookies-next";
import NextAuth from "next-auth";
import { NextApiRequest, NextApiResponse } from "next/types";
import { getCookie } from "cookies-next";

import { authOptions } from "~/server/auth";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = (req: NextApiRequest, res: NextApiResponse): ReturnType<typeof NextAuth> => {
    const cookie = getCookie('userType')
    console.log("cookie in server", cookie)
    return NextAuth(req, res, authOptions(req, res));
}

export { handler as GET, handler as POST };
