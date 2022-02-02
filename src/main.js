import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueCountryRegionSelect from 'vue3-country-region-select'


createApp(App).use(store).use(router).use(vueCountryRegionSelect).mount('#app');
