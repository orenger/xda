import {ServiceApi} from "@/api/ServiceApi";
import {HttpGet, OnRequestorCallback} from "@/base/requestor/requestor";
import {Url} from "@/globals/UrlGlobal";

export class UserDetailsService extends ServiceApi {

    fetch(requestorCallback: OnRequestorCallback): void {
        new HttpGet()
            .setHeader(this.getAuthHeader())
            .commit(Url.BASE + "getUserDetails", requestorCallback);
    }
}