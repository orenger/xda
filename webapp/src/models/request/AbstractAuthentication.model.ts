import {BaseRequest} from "@/models/base/BaseRequest";

export interface AbstractAuthentication extends BaseRequest {
    idNumber?: number
}