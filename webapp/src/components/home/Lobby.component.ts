import Component from "vue-class-component";
import BaseComponent from "@/base/BaseComponent";
import HeaderBar from './header/Header.component'
import FooterBar from './footer/Footer.component'

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

