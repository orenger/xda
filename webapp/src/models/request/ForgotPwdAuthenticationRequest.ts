import {AbstractAuthentication} from "@/models/request/AbstractAuthentication.model";

export interface ForgotPwdAuthenticationRequest extends AbstractAuthentication {
    email: string
}