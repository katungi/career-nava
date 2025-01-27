import { getCookie } from 'cookies-next';
import NextAuth from 'next-auth';
import type { NextApiRequest, NextApiResponse } from 'next/types';

import { authOptions } from '~/server/auth';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = (
  req: NextApiRequest,
  res: NextApiResponse
): ReturnType<typeof NextAuth> => {
  const _cookie = getCookie('userType');
  return NextAuth(req, res, authOptions(req, res));
};

export { handler as GET, handler as POST };
