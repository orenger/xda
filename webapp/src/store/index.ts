import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
import {authentication} from './modules/authentication'
import {UserId} from "@/models/UserId.model"
import {actions} from './actions'
import {mutations} from './mutations'
import {getters} from './getters'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export interface RootState {
    accessToken: string,
    refreshToken: string,
    userId: UserId
}

export const rootState: RootState = {
    accessToken: '',
    refreshToken: '',
    userId: {} as UserId
}

const store: StoreOptions<RootState> = {
    state: rootState,
    actions,
    getters,
    mutations,
    modules: {
        authentication
    }
};

export default new Vuex.Store<RootState>(
    store
);
