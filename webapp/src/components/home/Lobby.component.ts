import Vue from "vue";
import Component from "vue-class-component";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BaseComponent from "@/base/BaseComponent";
import HeaderBar from './header/Header.component'
import FooterBar from './footer/Footer.component'

Vue.use(BootstrapVue);

@Component({
    components: {
        HeaderBar,
        FooterBar
    }
})
export default class LobbyComponent extends BaseComponent {

    mounted() {
    }

    onSuccess(data?: any, requstName?: any, message?: any) {

    }
}

