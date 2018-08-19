import Vue from 'vue'
import Router from 'vue-router'

// View component inject (authNotRequired)
    import LobbyComponent from '@/components/home/Lobby.component'

// Login Pages component inject (authNotRequired)
import CustomerLoginComponent from '@/components/customer/authentication/login/CustomerLogin.component.vue';
import EmailSentComponent from '@/components/customer/authentication/login/success/EmailSent.component.vue';
import PasswordExpiredComponent from '@/components/customer/authentication/password/PasswordExpired.component.vue';
import ForgotPasswordComponent from '@/components/customer/authentication/password/ForgotPassword.component.vue';
import ResetPasswordComponent from '@/components/customer/authentication/password/ResetPassword.component.vue';

// Error Pages component inject (authNotRequired)
import ErrorComponent from '@/components/errors/Error.vue';
import NotFoundErrorComponent from '@/components/errors/NotFoundError.vue';
import UnauthorizedErrorComponent from '@/components/errors/UnauthorizedError.vue';
import SessionTimeoutErrorComponent from '@/components/errors/SessionTimeoutError.vue';
import MaintenanceErrorComponent from '@/components/errors/MaintenanceError.vue';

// Authorized Pages component inject (authRequired)

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '*',
            component: NotFoundErrorComponent,
            meta: {authNotRequired: true}
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home'
        },
        {
            path: '/customer/login',
            component: CustomerLoginComponent,
            meta: {authNotRequired: true, isCustomer: true}
        },
        {
            path: '/expired',
            name: 'expired',
            component: PasswordExpiredComponent,
            meta: {authNotRequired: true, isCustomer: true}
        },
        {
            path: '/pw',
            name: 'reset',
            props: (route) => ({
                resetPwToken: route.query.t
            }),
            component: ResetPasswordComponent,
            meta: {authNotRequired: true, isCustomer: true}
        },
        {
            path: '/forgot',
            name: 'forgot',
            component: ForgotPasswordComponent,
            meta: {authNotRequired: true, isCustomer: true}
        },
        {
            path: '/mail-sent',
            name: 'mailsent',
            component: EmailSentComponent,
            meta: {authNotRequired: true, isCustomer: true}
        },
        {
            path: '/error',
            name: 'error',
            component: ErrorComponent,
            meta: {authNotRequired: true}
        },
        {
            path: '/session-timeout',
            name: 'session-timeout',
            component: SessionTimeoutErrorComponent,
            meta: {authNotRequired: true}
        },
        {
            path: '/maintenance',
            name: 'maintenance',
            component: MaintenanceErrorComponent,
            meta: {authNotRequired: true}
        },
        {
            path: '/unauthorized',
            name: 'unauthorized',
            component: UnauthorizedErrorComponent,
            meta: {authNotRequired: true}
        }
    ]
})
