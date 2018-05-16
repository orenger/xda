import {BaseRequest} from "@/models/base/BaseRequest";
import {OnRequestorCallback} from "@/base/requestor/requestor";

export interface RequestPayload {
    requestBody: BaseRequest,
    requestorCallback: OnRequestorCallback
}