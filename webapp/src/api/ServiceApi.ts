import {Header, OnRequestorCallback} from "@/base/requestor/requestor";
import {BaseRequest} from "@/models/base/BaseRequest";
import localStorage from 'store2';

export abstract class ServiceApi {

    private header: Header = new Header();
    private body!: BaseRequest;
    private name!: string;
    private token!: string;

    setToken(token: string): ServiceApi {
        this.token = token
        return this
    }

    getAuthHeader(): Header {
        if (!this.token) {
            this.token = localStorage('at')
        }
        this.header.append("Authorization", this.token);
        return this.header;
    }

    setRequestBody(requestBody: BaseRequest): ServiceApi {
        this.body = requestBody
        return this
    }

    getRequestBody(): BaseRequest {
        return this.body
    }

    setRequestName(requestName: string): ServiceApi {
        this.name = requestName
        return this
    }

    getRequestName(): string {
        return this.name
    }

    abstract fetch(requestorCallback: OnRequestorCallback): void;
}
