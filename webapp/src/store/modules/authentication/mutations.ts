import {MutationTree} from 'vuex';
import {AuthenticationState} from '@/store/modules/authentication/index';
import {UserId} from '@/models/UserId.model';
import localStorage from 'store2';
import {rootState} from '@/store'

interface LoginAuthPayload {
    userId: UserId
    obfuscatedPhoneNum: string
}

export default <MutationTree<AuthenticationState>> {

    setUserDetails: (state, userDetails) => {
        state.userDetails = userDetails
    },

    setAccessToken: (state, accessToken: string) => {
        rootState.accessToken = accessToken
        localStorage('at', accessToken);
    },

    setRefreshToken: (state, refreshToken: string) => {
        rootState.refreshToken = refreshToken
        localStorage('rt', refreshToken);
    }
}