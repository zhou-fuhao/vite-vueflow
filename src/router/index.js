import { createRouter, createWebHistory } from "vue-router";
import DemoOne from "../views/DemoOne.vue";

const routes = [
  {
    path: "/DemoOne",
    name: "DemoOne",
    component: DemoOne,
  },
  {
    path: "/DemoTwo",
    name: "DemoTwo",
    component: () => import("../views/DemoTwo.vue"),
  },
  {
    path: "/DemoThree",
    name: "DemoThree",
    component: () => import("../views/DemoThree.vue"),
  },
  {
    path: "/DemoTest",
    name: "DemoTest",
    component: () => import("../views/DemoTest.vue"),
  },
  {
    path: "/DemoFour",
    name: "DemoFour",
    component: () => import("../views/DemoFour.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
