import {MutationTree} from 'vuex';
import {RootState} from '@/store'
import {UserId} from "@/models/UserId.model";

export const mutations: MutationTree <RootState> = {

    setUserId: (state, userId: UserId) => {
        state.userId = userId
    },

    removeToken: (state) => {
        state.accessToken = ""
    }
}