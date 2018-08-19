import {GetterTree} from 'vuex';
import {RootState} from '@/store';
import {AuthenticationState} from "@/store/modules/authentication/index";
import {UserDetailsResponse} from "@/models/response/UserDetailsResponse";

export const getters: GetterTree <AuthenticationState, RootState> = {

    userDetails(state): UserDetailsResponse  {
        return state.userDetails
    }
}