import { lazy } from "react";
import Home from '../views/Home';

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Daily News",
    },
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: lazy(() => import("../views/Detail")),
    meta: {
      title: "Daily News Details",
    },
  },
  {
    path: "/personal",
    name: "personal",
    component: lazy(() => import("../views/Personal")),
    meta: {
      title: "Daily News User Info",
    },
  },
  {
    path: "/store",
    name: "store",
    component: lazy(() => import("../views/Store")),
    meta: {
      title: "Daily News My Collection",
    },
  },
  {
    path: "/update",
    name: "update",
    component: lazy(() => import("../views/Update")),
    meta: {
      title: "Daily News Update User Info",
    },
  },
  {
    path: "/login",
    name: "login",
    component: lazy(() => import("../views/Login")),
    meta: {
      title: "Daily News Login",
    },
  },
  {
    path: "*",
    name: "404",
    component: lazy(() => import("../views/Page404")),
    meta: {
      title: "Daily News 404",
    },
  },
];
export default routes;
