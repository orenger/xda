import {RootState} from "@/store";
import {ActionTree} from "vuex";
import {RequestPayload} from "@/store/modules/RequestPayload";
import {LogoutService} from "@/api/Logout.service";

const logoutService: LogoutService = new LogoutService()

export const actions: ActionTree <RootState, RootState> = {

    logout: ({commit, dispatch, state}: any, {requestorCallback}: RequestPayload) => {
        logoutService
            .fetch(requestorCallback);
    }
}