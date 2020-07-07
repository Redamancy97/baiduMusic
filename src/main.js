import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/base.css'

import {Swipe, SwipeItem, Tab, Tabs, List, PullRefresh, Cell} from 'vant';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(List);
Vue.use(PullRefresh);
Vue.use(Cell);

// import { Button } from 'vant'
//
// Vue.use(Button);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
