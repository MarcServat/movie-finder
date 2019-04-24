import Search from "./components/Search";
import Result from "./components/Result";
import NotFound from "./components/NotFound";

export default [
    { path: '*', component: Search },
    { path: '/search', component: Search },
    { path: '/result', component: Result},
    { path: '/404', component: NotFound},
];
