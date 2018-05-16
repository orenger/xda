import {AuthenticationRequest} from "@/models/request/AuthenticationRequest";

export interface ResetPwdAuthenticationRequest extends AuthenticationRequest {
    resetPwToken: string
}