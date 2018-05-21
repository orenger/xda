import Component from "vue-class-component";
import BaseComponent from "@/base/BaseComponent";
import HeaderBar from './header/Header.component'
import FooterBar from './footer/Footer.component'
import About from './about/About.component'
import Services from './services/Services.component'
import Contact from './contact/Contact.component'

@Component({
    components: {
        HeaderBar,
        FooterBar,
        About,
        Services,
        Contact
    }
})
export default class LobbyComponent extends BaseComponent {

    mounted() {
    }

    onSuccess(data?: any, requstName?: any, message?: any) {

    }
}

