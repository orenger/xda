import {GetterTree} from 'vuex';
import {RootState} from '@/store';
import {UserId} from "@/models/UserId.model";

export const getters: GetterTree <RootState, RootState> = {

    userId(state): UserId {
        return state.userId
    }
}