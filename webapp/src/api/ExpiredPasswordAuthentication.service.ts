import {ServiceApi} from "@/api/ServiceApi";
import {HttpPost, OnRequestorCallback} from "@/base/requestor/requestor";
import {Url} from '@/globals/UrlGlobal';

export class ExpiredPasswordAuthenticationService extends ServiceApi {
    fetch(requestorCallback: OnRequestorCallback): void {
        new HttpPost()
            .setHeader(this.getAuthHeader())
            .setBody(this.getRequestBody())
            .commit(Url.BASE + "changeExpiredPassword", requestorCallback);
    }
}