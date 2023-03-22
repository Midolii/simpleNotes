import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "HomeView",
    component: () => import("../views/HomeView.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string;
  } else {
    document.title = "简单笔记";
  }
  next();
});

export default router;
export { routes };
