import {Component, Vue} from 'vue-property-decorator';
import {OnRequestorCallback} from "@/base/requestor/requestor";

const namespace: string = 'authentication'

@Component({})
export default class BaseComponent extends Vue implements OnRequestorCallback {

    onProgress(requstName?: string): void {
        this.$Progress.start()
    }

    onSuccess<T>(data?: T, requstName?: string, message?: string): void;
    onSuccess<T>(data?: T[], requstName?: string, message?: string): void;
    onSuccess(data?: any, requstName?: string, message?: string, success?: boolean): void {
    }

    onError(message: string, code: number, requstName?: string): void {
        if (code === 401) {
            this.$router.push('unauthorized')
        } else {
            this.$router.push('error')
        }
    }

    onProgressFinished(success: boolean): void {
        if (success) {
            this.$Progress.finish();
        } else {
            this.$Progress.fail()
        }
    }

    onSetAccessToken(accessToken: string) {
    }

    onSetRefreshToken(refreshToken: string) {
    }
}