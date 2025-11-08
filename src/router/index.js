import Vue from 'vue';
import VueRouter from 'vue-router'
import userRouter from "@/router/modules/user";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BUILD_PATH,
  routes: [
    ...userRouter,
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
