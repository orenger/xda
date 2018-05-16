<template>
    <login-container @submitLogin="onLogin" :passwordLabelProp="'new_password'" :buttonText="'enter'"
                     :loginHeaderTitle="'members_login'" :showForgot="false" :showApplication="false"
                     :auth="expiredAuth"
                     :isPasswordExpiredProp="true" :serverErrorMessage="serverErrorMessage">
        <div slot="before">
            <password-field-widget :title="'old_password'" v-model="expiredAuth.oldPassword"
                                   :inputName="$t('old_password')" :isRequired="true"></password-field-widget>
        </div>
        <div slot="extension">
            <password-field-widget :title="'new_password_again'" v-model="newPasswordRepeat"
                                   :inputName="$t('old_password_again')"
                                   :isRequired="true"></password-field-widget>
        </div>
    </login-container>
</template>

<script lang="ts">
    import Component from 'vue-class-component';
    import LoginContainer from '@/components/customer/authentication/login-container/LoginContainer.component';
    import PasswordFieldWidget from '@/components/widgets/PasswordFieldWidget.vue';
    import {ExpiredPwdAuthenticationRequest} from "@/models/request/ExpiredPwdAuthenticationRequest";
    import {Action, Getter} from "vuex-class";
    import {UserId} from "@/models/UserId.model";
    import BaseComponent from "@/base/BaseComponent";

    const namespace: string = 'authentication'

    @Component({
        components: {
            LoginContainer,
            PasswordFieldWidget
        }
    })
    export default class PasswordExpiredComponent extends BaseComponent {

        private serverErrorMessage: string = ""
        private expiredAuth: ExpiredPwdAuthenticationRequest = {} as ExpiredPwdAuthenticationRequest
        private newPasswordRepeat: string = ""

        @Getter('userId') userId!: UserId
        @Action("changeExpiredPassword", {namespace}) changeExpiredPassword: any

        mounted() {

            this.expiredAuth.idNumber = this.userId.idNumber
        }

        onLogin() {
            if (this.expiredAuth.password === this.newPasswordRepeat) {
                this.changeExpiredPassword({requestBody: this.expiredAuth, requestorCallback: this})
            }
        }

        onError(message: string, code: number, requstName?: string): void {
            this.serverErrorMessage = message;
        }

        onSuccess(data?: any, requstName?: string, message?: string): void {
            this.$router.push({name: 'lobby'});
        }
    }
</script>