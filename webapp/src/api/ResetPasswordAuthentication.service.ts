import { ServiceApi } from "@/api/ServiceApi";
import {HttpPost, OnRequestorCallback} from "@/base/requestor/requestor";
import { Url } from '@/globals/UrlGlobal';

export class ResetPasswordAuthenticationService extends ServiceApi {
    fetch(requestorCallback: OnRequestorCallback): void {
        new HttpPost()
            .setBody(this.getRequestBody())
            .commit(Url.BASE + "resetPassword", requestorCallback);
    }
}