import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import {UserDetailsResponse} from '@/models/response/UserDetailsResponse';
import {Module} from 'vuex';
import {RootState} from '@/store';

export interface AuthenticationState {
    obfuscatedPhoneNum: string
    userDetails: UserDetailsResponse
    isAuthorized?: boolean
}

const initialState: AuthenticationState = {
    obfuscatedPhoneNum: '',
    userDetails: {} as UserDetailsResponse,
    isAuthorized: false
}

export default <Module<AuthenticationState, RootState>> {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
};