import Search from "./components/Search";
import Result from "./components/Result";

export default [
    { path: '*', component: Search },
    { path: '/search', component: Search },
    { path: '/result', component: Result, props: {movieData: []} },
];
