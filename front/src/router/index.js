import Vue from 'vue';
import Router from 'vue-router';
import Frequentation from '@/components/Frequentation';
import Histogrammes from '@/components/Histogrammes';
Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/histogrammes'
  },
  {
    path: '/histogrammes',
    name: 'Histogrammes',
    title: 'Histogrammes',
    component: Histogrammes,
  },
  {
    path: '/Frequentation',
    name: 'Frequentation',
    title: 'Frequentation',
    component: Frequentation,
  },
  
];

export default new Router({
  routes,
});