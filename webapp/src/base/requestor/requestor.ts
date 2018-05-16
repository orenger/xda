import axios from 'axios'

//Globals
module Global {
    export class Error {
        public static readonly GET: number = 10
        public static readonly POST: number = 11
        public static readonly PUT: number = 12
        public static readonly DELETE: number = 13
    }

    export class Msg {
        public static readonly MISSING_BODY: string = 'missing body'
    }

    export class HeaderKey {
        public static readonly SET_ACCESS_TOKEN: string = 'set-access-token'
        public static readonly SET_REFRESH_TOKEN: string = 'set-refresh-token'
    }
}

// Interfaces
export interface OnRequestorCallback {
    onProgress(requestName?: string): void;

    onSuccess<T>(data?: T, requestName?: string, message?: string): void;

    onSuccess<T>(data?: T[], requestName?: string, message?: string): void;

    onError(message: string, code: number, requestName?: string): void;

    onProgressFinished(success: boolean): void;

    onSetAccessToken(accessToken?: string): void;

    onSetRefreshToken(refreshToken?: string): void;
}

export interface OnRequestorCommit {

    setQueryString(qs: QueryString): any;

    setRoutingRule(rr: RoutingRule): any;

    setHeader(header: Header): any;

    commit<T>(url: string, callback: OnRequestorCallback, requestName?: string): void;
}

export interface BodyRequestor<T> {
    setBody(body: T): any;
}

// Parameters
export class QueryString {

    private qsMap: Map<string, string> = new Map<string, string>();

    public append(key: string, value: string): QueryString {
        this.qsMap.set(key, value);
        return this;
    }

    public toString(): string {
        let res = '?';
        this.qsMap.forEach((value: string, key: string) => {
            res += key + '=' + value + '&';
        });
        return res.slice(0, -1);
    }
}

export class RoutingRule {

    private rrArr: string[] = [];

    public append(param: string): RoutingRule {
        this.rrArr.push(param);
        return this;
    }

    public toString(): string {
        let res = '';
        this.rrArr.forEach((param) => {
            res += param + '/';
        });
        return res.slice(0, -1);
    }
}

export class Header {

    private headerMap: Map<string, string> = new Map<string, string>();

    public append(key: string, value: string): Header {
        this.headerMap.set(key, value);
        return this;
    }

    public getHeader(): any {
        const headerObj: any = {'Content-Type': 'application/json'};
        this.headerMap.forEach((value: string, key: string) => {
            headerObj[key] = value;
        });
        return headerObj;
    }
}

// Rest api
export class HttpGet implements OnRequestorCommit {

    private queryString!: QueryString;
    private routingRule!: RoutingRule;
    private header!: Header;

    public setHeader(header: Header): HttpGet {
        this.header = header;
        return this;
    }

    public setQueryString(qs: QueryString): HttpGet {
        this.queryString = qs;
        return this;
    }

    public setRoutingRule(rr: RoutingRule): HttpGet {
        this.routingRule = rr;
        return this;
    }

    public commit<T>(url: string, callback: OnRequestorCallback, requestName?: string) {
        try {
            callback.onProgress(requestName);

            url = this.queryString != null ? url + this.queryString.toString()
                : this.routingRule != null ? url + this.routingRule.toString()
                    : url;

            axios.get(url, {
                headers: this.header != null ? this.header.getHeader() : new Header().getHeader(),
            })
                .then((response: any) => {
                    const data = response.data;
                    const success = data.success;
                    if (success) {
                        callback.onProgressFinished(true);
                        if (response.headers[Global.HeaderKey.SET_ACCESS_TOKEN]) {
                            callback.onSetAccessToken(response.headers[Global.HeaderKey.SET_ACCESS_TOKEN]);
                        }
                        if (response.headers[Global.HeaderKey.SET_REFRESH_TOKEN]) {
                            callback.onSetRefreshToken(response.headers[Global.HeaderKey.SET_REFRESH_TOKEN]);
                        }
                        data ? callback.onSuccess(data.body, requestName, 'success') :
                            callback.onSuccess('', requestName, '');
                    } else {
                        callback.onProgressFinished(false);
                        callback.onError(data.message, data.errorCode);
                    }
                })
                .catch((error: any) => {
                    const message: string = error.response ? error.response.data.message : error.toString();
                    const code: number = error.response
                        ? (error.response.data ? error.response.data.errorCode : error.response.status)
                        : Global.Error.GET;
                    callback.onProgressFinished(false);
                    callback.onError(message, code);
                });
        } catch (ex) {
            callback.onProgressFinished(false);
            callback.onError(ex, Global.Error.GET);
        }
    }
}

export class HttpPost<T> implements BodyRequestor<T>, OnRequestorCommit {

    private queryString!: QueryString;
    private routingRule!: RoutingRule;
    private header!: Header;
    private body!: T;

    public setHeader(header: Header): HttpPost<T> {
        this.header = header;
        return this;
    }

    public setQueryString(qs: QueryString): HttpPost<T> {
        this.queryString = qs;
        return this;
    }

    public setRoutingRule(rr: RoutingRule): HttpPost<T> {
        this.routingRule = rr;
        return this;
    }

    public setBody(body: T): HttpPost<T> {
        this.body = body;
        return this;
    }

    public commit<T>(url: string, callback: OnRequestorCallback, requestName?: string) {
        try {
            callback.onProgress(requestName);

            if (this.body == null) {
                throw new Error(Global.Msg.MISSING_BODY);
            }

            url = this.queryString != null ? url + this.queryString.toString()
                : this.routingRule != null ? url + this.routingRule.toString()
                    : url;

            axios.post(url, this.body, {
                headers: this.header != null ? this.header.getHeader() : new Header().getHeader(),
            })
                .then((response: any) => {
                    const data = response.data;
                    const success = data.success;
                    if (success) {
                        callback.onProgressFinished(true);
                        if (response.headers[Global.HeaderKey.SET_ACCESS_TOKEN]) {
                            callback.onSetAccessToken(response.headers[Global.HeaderKey.SET_ACCESS_TOKEN]);
                        }
                        if (response.headers[Global.HeaderKey.SET_REFRESH_TOKEN]) {
                            callback.onSetRefreshToken(response.headers[Global.HeaderKey.SET_REFRESH_TOKEN]);
                        }
                        data ? callback.onSuccess(data.body, requestName, 'success') :
                            callback.onSuccess('', requestName, '');
                    } else {
                        callback.onProgressFinished(false);
                        callback.onError(data.message, data.errorCode);
                    }
                })
                .catch((error: any) => {
                    const message: string = error.response ? error.response.data.message : error.toString();
                    const code: number = error.response
                        ? (error.response.data ? error.response.data.errorCode : error.response.status)
                        : Global.Error.POST;
                    callback.onProgressFinished(false);
                    callback.onError(message, code);
                });
        } catch (ex) {
            callback.onProgressFinished(false);
            callback.onError(ex, Global.Error.POST);
        }
    }
}
