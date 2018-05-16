import Vue from 'vue'
import VueI18n from 'vue-i18n'

let he = require('./he.json');
// import en from './en.json'
// import tw from './tw.json'
// import es from './es.json'

Vue.use(VueI18n)

const locale = 'he'

const messages = {
    he
}

const i18n = new VueI18n({
    locale,
    messages
})

export default i18n
