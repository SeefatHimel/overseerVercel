// import  from 'jsonwebtoken';
// const { verify } = require("jsonwebtoken");
import { NextResponse } from "next/server";
import { GetCookie } from "./services/cookie.service";

export default async function middleware(req: any) {
  const loginUrl = req.nextUrl.clone();
  loginUrl.pathname = "/login";
  const baseUrl = req.nextUrl.clone();
  baseUrl.pathname = "/";
  const url = req.url;
  const cookies = req.headers.get("cookie");
  const access_token = cookies;
  // console.log(
  //   "🚀 ~ file: _middleware.js:6 ~ middleware ~ cookies",
  //   access_token,
  //   url
  // );
  // if (!url.includes("/_next"))
  const publicRoutes = ["/login", "/register"];
  const ignoreRoutes = ["/_next", "/assets", "/socialLogin/googleRedirectCB"];
  // if (publicRoutes.includes(url))
  if (publicRoutes.some((route) => url.includes(route))) {
    // console.log("inf", access_token);
    if (access_token) return NextResponse.redirect(baseUrl);
    else return NextResponse.next();
  } else if (!ignoreRoutes.some((route) => url.includes(route))) {
    if (!access_token) return NextResponse.redirect(loginUrl);
    else return NextResponse.next();
  }
  return NextResponse.next();
}
