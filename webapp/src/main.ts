import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import i18n from './lang/lang';
import VueProgressBar from "vue-progressbar";
import VeeValidate from 'vee-validate';
import RouterLinkWidget from '@/components/widgets/RouterLinkWidget.vue';

var VueScrollTo = require('vue-scrollto');

// import jQuery  from 'jquery'
// Vue.use(jQuery)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

// import style scss for all
import './assets/styles/style.scss'

import {messages} from './lang/heValidation'

Vue.use(VeeValidate, {
    inject: false,
    locale: 'he',
    dictionary: {
        he: {messages: messages}
    }
});

Vue.component('router-link-widget', RouterLinkWidget)

const progressBarOptions = {
    color: '#bffaf3',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
}

Vue.use(VueProgressBar, progressBarOptions)


const scrollToOptions = {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0
}
// You can also pass in the default options
Vue.use(VueScrollTo, scrollToOptions)

// Authenticate each page is authorized - todo
// import axios from 'axios'
// import localStorage from 'store2';
// import {Url} from '@/globals/UrlGlobal';
// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.authNotRequired)) {
//         next()
//         localStorage.remove('at')
//     } else if (localStorage('at')) {
//         axios.post(Url.BASE + 'isAuthorizedForPage',
//             {pageName: to.name},
//             {headers: {'Authorization': localStorage('at')}})
//             .then((response: any) => {
//                 if (response.data.success) {
//                     next();
//                 } else {
//                     next({name: 'unauthorized'})
//                 }
//             });
//     } else {
//         next({name: 'session-timeout'})
//     }
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
