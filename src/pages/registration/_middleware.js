import { verify } from "jsonwebtoken";
import { NextResponse } from "next/server";

export default function middleware(req) {
  const { cookies } = req;
  const secret = process.env.SECRET;

  const jwt = cookies.OursiteJWT;

  const url = req.url;

  if (!url.includes("/login") && !url.includes("/registration")) {
    if (!jwt) return NextResponse.redirect("/login");
  } else {
    try {
      verify(jwt, secret);
      return NextResponse.next();
    } catch (e) {
      return NextResponse.redirect("/login");
    }
  }
  return NextResponse.next();
}
