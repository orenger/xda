<template>
    <login-container @submitLogin="onLogin" :passwordLabelProp="'new_password'"
                         :buttonText="'forgot_password_header'"
                         :loginHeaderTitle="'forgot_password_header'" :showForgot="false" :showApplication="true"
                         :auth="forgotPasswordAuth" :isForgotPasswordProp="true"
                         :serverErrorMessage="serverErrorMessage">
    </login-container>
</template>

<script lang="ts">
    import Component from 'vue-class-component';
    import LoginContainer from '@/components/customer/authentication/login-container/LoginContainer.component';
    import {Action, Getter} from "vuex-class";
    import {ForgotPwdAuthenticationRequest} from "@/models/request/ForgotPwdAuthenticationRequest";
    import {UserId} from "@/models/UserId.model";
    import BaseComponent from "@/base/BaseComponent";

    const namespace: string = 'authentication'

    @Component({
        components: {
            LoginContainer
        }
    })
    export default class ForgotPasswordComponent extends BaseComponent {

        private serverErrorMessage: string = ""
        private forgotPasswordAuth: ForgotPwdAuthenticationRequest = {} as ForgotPwdAuthenticationRequest

        @Getter('userId') userId!: UserId
        @Action('sendForgotPwdMail', {namespace}) sendForgotPwdMail: any

        mounted() {
        }

        onLogin() {
            this.sendForgotPwdMail({requestBody: this.forgotPasswordAuth, requestorCallback: this})
        }

        onError(message: string, code: number, requstName?: string): void {
            this.serverErrorMessage = message;
        }

        onSuccess(data?: any, requstName?: string, message?: string): void {
            this.$router.push({name: "mailsent"});
        }
    }
</script>