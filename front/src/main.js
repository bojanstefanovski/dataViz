import Vue from 'vue'
import App from './App.vue'
import 'leaflet/dist/leaflet.css';
import { Icon } from "leaflet";
import store from './store';
import router from './router';
import './assets/styles/index.css';
Vue.config.productionTip = false

new Vue({
  store, router,
  render: h => h(App),
}).$mount('#app')

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});