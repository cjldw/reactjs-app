import * as Components from "./components/Index";
export default {
    component: 'div',
    childRoutes: [{
        path: "/",
        component: Components.Home,
    },
    {
        path: "/intro",
        component: Components.Intro
    },
    {
        path: "/about",
        component: Components.About
    }]
}
