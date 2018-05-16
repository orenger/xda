import {AbstractAuthentication} from "@/models/request/AbstractAuthentication.model";

export interface ExpiredPwdAuthenticationRequest extends AbstractAuthentication {
    oldPassword: string
    password: string
}