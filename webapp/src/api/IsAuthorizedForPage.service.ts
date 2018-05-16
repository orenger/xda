import {ServiceApi} from "@/api/ServiceApi";
import {HttpPost, OnRequestorCallback} from "@/base/requestor/requestor";
import {Url} from "@/globals/UrlGlobal";

export class IsAuthorizedForPageService extends ServiceApi {

    fetch(requestorCallback: OnRequestorCallback): void {
        new HttpPost()
            .setHeader(this.getAuthHeader())
            .commit(Url.BASE + "isAuthorizedForPage", requestorCallback);
    }
}