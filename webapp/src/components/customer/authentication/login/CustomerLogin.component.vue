<template>
    <login-container :buttonText="'enter'" :loginHeaderTitle="'members_login'" @submitLogin="onLogin"
                     :showForgot="true" :showApplication="true" :auth="loginAuth" :fillUserAgent="true"
                     :serverErrorMessage="serverErrorMessage" :checkMangingCompanyProp="true">
    </login-container>
</template>
<script lang='ts'>
    import {Component} from "vue-property-decorator";
    import LoginContainer from "@/components/customer/authentication/login-container/LoginContainer.component";
    import {AuthenticationRequest} from "@/models/request/AuthenticationRequest";
    import BaseComponent from "@/base/BaseComponent";

    @Component({
        components: {
            LoginContainer
        }
    })
    export default class CustomerLoginComponent extends BaseComponent {

        private loginAuth: AuthenticationRequest = {} as AuthenticationRequest
        private serverErrorMessage: string = ''

        mounted() {
        }

        onError(message: string, code: number, requstName?: string): void {
            this.serverErrorMessage = message;
        }

        onSuccess(data?: any, requstName?: string, message?: string, success?: boolean): void {
            this.$router.push({name: 'viasms'})
        }

        onLogin() {
        }
    }
</script>
