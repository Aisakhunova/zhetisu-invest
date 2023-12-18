import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage";
import CatalogPage from "./components/CatalogPage";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/catalog",
    component: CatalogPage,
  },
];

const router = createRouter({ routes, history: createWebHistory() });

export default router;
