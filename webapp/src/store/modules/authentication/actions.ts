import {RootState} from "@/store";
import {rootState} from '@/store';
import {ActionTree} from "vuex";
import {AuthenticationState} from "@/store/modules/authentication";
import {RequestPayload} from "@/store/modules/RequestPayload";
import {SendForgotPasswordMailService} from "@/api/SendForgotPasswordMail.service";
import {ExpiredPasswordAuthenticationService} from "@/api/ExpiredPasswordAuthentication.service";
import {ResetPasswordAuthenticationService} from "@/api/ResetPasswordAuthentication.service";
import {AuthenticateWithPasswordService} from "@/api/AuthenticateWithPassword.service";
import {UserDetailsService} from "@/api/UserDetails.service";
import {IsAuthorizedForPageService} from "@/api/IsAuthorizedForPage.service";

const sendForgotPasswordMailService: SendForgotPasswordMailService = new SendForgotPasswordMailService()
const expiredPasswordAuthService: ExpiredPasswordAuthenticationService = new ExpiredPasswordAuthenticationService()
const resetPasswordAuthenticationService: ResetPasswordAuthenticationService = new ResetPasswordAuthenticationService()
const authenticateWithPasswordService: AuthenticateWithPasswordService = new AuthenticateWithPasswordService()
const userDetailsService: UserDetailsService = new UserDetailsService()
const isAuthorizedForPageService: IsAuthorizedForPageService = new IsAuthorizedForPageService()

export const actions: ActionTree <AuthenticationState, RootState> = {

   sendForgotPwdMail: ({commit, dispatch, state}: any, {requestBody, requestorCallback}: RequestPayload) => {
        sendForgotPasswordMailService
            .setRequestBody(requestBody)
            .fetch(requestorCallback);
    },

    changeExpiredPassword: ({commit, dispatch, state}: any, {requestBody, requestorCallback}: RequestPayload) => {
        expiredPasswordAuthService
            .setToken(rootState.accessToken)
            .setRequestBody(requestBody)
            .fetch(requestorCallback)
    },

    resetPassword: ({commit, dispatch, state}: any, {requestBody, requestorCallback}: RequestPayload) => {
        resetPasswordAuthenticationService
            .setRequestBody(requestBody)
            .fetch(requestorCallback)
    },

    authenticateWithPassword: ({commit, dispatch, state}: any, {requestBody, requestorCallback}: RequestPayload) => {
        authenticateWithPasswordService
            .setRequestBody(requestBody)
            .fetch(requestorCallback)
    },

    getUserDetails: ({commit, dispatch, state}: any, {requestorCallback}: RequestPayload) => {
        userDetailsService
            .setToken(rootState.accessToken)
            .fetch(requestorCallback)
    },

    isAuthorizedForPage: ({commit, dispatch, state}: any, {requestBody, requestorCallback}: RequestPayload) => {
        isAuthorizedForPageService
            .setToken(rootState.accessToken)
            .setRequestBody(requestBody)
            .fetch(requestorCallback)
    }
}