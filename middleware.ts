import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { NextResponse } from "next/server"

const { auth: middleware } = NextAuth(authConfig)
const publicRoutes =[
    "/",
    "/nosotros",
    "/nosotros/filosofia-de-gestion",
    "/productos",
    "/controladores",
    "/soporte",
    "/comercio-exterior",
    "/ventas-institucionales",
    "/contacto",
    "/login",
    "/users/add",
    "/detalles-producto"
    
]
export default middleware((req)=>{
   const {nextUrl, auth} = req;
   const isLoggedIn = !!auth?.user
   //adaptation
   const { pathname } = nextUrl;

   // Check if the route is public or if it matches the pattern for /controladores with parameters
   const isPublicRoute = publicRoutes.includes(pathname) || pathname.startsWith('/controladores') || pathname.startsWith('/productos') || pathname.startsWith('/detalles-producto');

   if (!isPublicRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", nextUrl));
}

return NextResponse.next();
});


export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};