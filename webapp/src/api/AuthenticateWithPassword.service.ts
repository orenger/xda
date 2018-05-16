import {ServiceApi} from '@/api/ServiceApi';
import {Url} from '@/globals/UrlGlobal';
import {HttpPost, OnRequestorCallback} from "@/base/requestor/requestor";

export class AuthenticateWithPasswordService extends ServiceApi {

    fetch(requestorCallback: OnRequestorCallback): void {
        new HttpPost()
            .setBody(this.getRequestBody())
            .commit(Url.BASE + "authenticateWithPassword", requestorCallback);
    }
}