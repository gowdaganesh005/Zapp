import NextAuth from "next-auth/next";
import { NEXT_AUTH } from "../../../lib/NextAuth";

const handler=NextAuth(NEXT_AUTH)

export const GET=handler
export const POST=handler