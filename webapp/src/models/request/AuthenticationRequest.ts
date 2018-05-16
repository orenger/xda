import {AbstractAuthentication} from "@/models/request/AbstractAuthentication.model";

export interface AuthenticationRequest extends AbstractAuthentication {
    password: string
    siteUrl: string;
    browserInfo: string
    isMobile: boolean
}