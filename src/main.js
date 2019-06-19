import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './assets/tailwind.css';
import './assets/styles/index.css';

Vue.config.productionTip = false;
// 阻止启动生产消息

Vue.filter('formatMsg', (value, params1, params2) => {
    if (!value) {
        return;
    }
    return value.replace(params1, `<span style=color:red;>${params2}</span>`);
});
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
