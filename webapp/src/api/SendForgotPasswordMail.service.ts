import {ServiceApi} from "@/api/ServiceApi";
import {HttpPost, OnRequestorCallback} from "@/base/requestor/requestor";
import {Url} from '@/globals/UrlGlobal';

export class SendForgotPasswordMailService extends ServiceApi {

    fetch(requestorCallback: OnRequestorCallback): void {
        new HttpPost()
            .setBody(this.getRequestBody())
            .commit(Url.BASE + "sendForgotPasswordMail", requestorCallback);
    }
}