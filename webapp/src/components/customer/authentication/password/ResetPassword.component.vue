<template>
    <login-container @submitLogin="onLogin" :passwordLabelProp="'new_password'"
                     :buttonText="'reset_password_header'"
                     :loginHeaderTitle="'reset_password_header'" :showForgot="false" :showApplication="false"
                     :auth="resetPwdAuth" :fillUserAgent="true"
                     :isResetPasswordProp="true" :serverErrorMessage="serverErrorMessage"></login-container>
</template>

<script lang="ts">
    import {Component, Prop} from "vue-property-decorator";
    import LoginContainer from "@/components/customer/authentication/login-container/LoginContainer.component";
    import {ResetPwdAuthenticationRequest} from "@/models/request/ResetPwdAuthenticationRequest";
    import BaseComponent from "@/base/BaseComponent";

    const namespace: string = "authentication";

    @Component({
        components: {
            LoginContainer
        }
    })
    export default class ResetPasswordComponent extends BaseComponent {

        @Prop() resetPwToken!: string;

        private resetPwdAuth!: ResetPwdAuthenticationRequest
        private serverErrorMessage: string = ""

        mounted() {
            if (this.resetPwdAuth.resetPwToken) {
                this.$router.push({name: "notFound"})
            }

            this.resetPwdAuth.resetPwToken = this.resetPwToken;
        }

        onLogin() {

        }

        onError(message: string, code: number, requstName?: string): void {
            this.serverErrorMessage = message;
        }

        onSuccess(data?: any, requstName?: string, message?: string): void {
        }
    }
</script>