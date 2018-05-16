import Component from 'vue-class-component';
import BaseComponent from "@/base/BaseComponent";
import Home from '@/components/home/Lobby.component'
import CustomerDashboard from '@/components/customer/dashboard/CustomerDashboard.component'

@Component({
    components: {
        Home,
        CustomerDashboard
    }
})
export default class DashboardComponent extends BaseComponent {

    mounted() {
    }

    get isCustomer(): boolean {
        return this.$route.meta.isCustomer
    }
    get showHeaderAndMenu(): boolean {
        return !this.$route.meta.authNotRequired && this.$route.meta.isCustomer
    }

    onSuccess(data?: any, requstName?: string, message?: string): void {

    }
}