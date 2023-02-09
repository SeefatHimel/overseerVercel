// import { verify } from "jsonwebtoken";
// import { NextResponse } from "next/server";

// export default function middleware(req) {
//   const { cookies } = req;
//   const secret = process.env.SECRET;

//   const jwt = cookies.OursiteJWT;

//   const url = req.url;
//   console.log("🚀 ~ file: _middleware.js:11 ~ middleware ~ url", url);

//   if (!url.includes("/login") && !url.includes("/registration")) {
//     if (!jwt) return NextResponse.redirect("/login");
//     else {
//       try {
//         verify(jwt, secret);
//         return NextResponse.next();
//       } catch (e) {
//         return NextResponse.redirect("/login");
//       }
//     }
//   } else {
//     if (jwt) {
//       try {
//         verify(jwt, secret);
//         return NextResponse.redirect("/");
//       } catch (e) {
//         return NextResponse.next();
//       }
//     }
//   }
//   return NextResponse.next();
// }
