import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueCountryRegionSelect from 'vue3-country-region-select'
import './registerServiceWorker'
import VueCollapsiblePanel from '@swoga/vue-collapsible-panel'

createApp(App).use(store).use(router).use(vueCountryRegionSelect).use(VueCollapsiblePanel).mount('#app');

import "@swoga/vue-collapsible-panel/dist/vue-collapsible-panel.css";

