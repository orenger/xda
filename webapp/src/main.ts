import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import i18n from './lang/lang';
import VueProgressBar from "vue-progressbar";
import VeeValidate from 'vee-validate';
import RouterLinkWidget from '@/components/widgets/RouterLinkWidget.vue';

import {messages} from './lang/heValidation'

Vue.use(VeeValidate, {
    inject: false,
    locale: 'he',
    dictionary: {
        he: {messages: messages}
    }
});

Vue.component('router-link-widget', RouterLinkWidget)

const options = {
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

Vue.use(VueProgressBar, options)

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
