import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home/index.vue';
import Page01 from '@/views/Page01/index.vue';
import NotFoundPage from '@/views/NotFoundPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/page01',
    name: 'page01',
    component: Page01,
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import('../views/About.vue'),
  },
  {
    path: '/404',
    name: 'notFound',
    component: NotFoundPage,
  },
  {
    path: '*', // 此处需特别注意置于最底部
    redirect: '/404',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
