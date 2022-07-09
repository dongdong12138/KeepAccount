import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import DetailView from '@/views/DetailView.vue';
import ChartView from '@/views/ChartView.vue';
import ManagerView from '@/views/ManagerView.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/detail'
  },
  {
    path: '/detail',
    name: 'DetailView',
    component: DetailView,
    meta: {title: '明细', position: 1}
  },
  {
    path: '/chart',
    name: 'ChartView',
    component: ChartView,
    meta: {title: '报表', position: 2}
  },
  {
    path: '/manager',
    name: 'ManagerView',
    component: ManagerView,
    meta: {title: '资产管家', position: 3}
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
