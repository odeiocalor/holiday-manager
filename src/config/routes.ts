const signInRoute = "/api/auth/signin"

interface Route {
    name: string
    href: string
    needAuth: boolean
    noAccessIfLoggedIn: boolean
    redirectTo: string
    redirectBackOnSignIn: boolean
}

const routes = {
    "/": {
        name: "Home",
        href: "/",
        needAuth: true,
        noAccessIfLoggedIn: false,
        redirectTo: signInRoute,
        redirectBackOnSignIn: true,
    },
    "/my-plans": {
        name: "My Plans",
        href: "/my-plans",
        needAuth: true,
        noAccessIfLoggedIn: false,
        redirectTo: signInRoute,
        redirectBackOnSignIn: true,
    },
    "/participating": {
        name: "Participating",
        href: "/participating",
        needAuth: true,
        noAccessIfLoggedIn: false,
        redirectTo: signInRoute,
        redirectBackOnSignIn: true,
    },
    "/calendar": {
        name: "Calendar",
        href: "/calendar",
        needAuth: true,
        noAccessIfLoggedIn: false,
        redirectTo: signInRoute,
        redirectBackOnSignIn: true,
    }
} as Record<string, Route>

export default routes