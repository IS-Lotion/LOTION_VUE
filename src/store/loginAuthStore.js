import VueCookies from "vue-cookies";
import { axiosApi } from "@/api";
import loginAuthService from "@/service/loginAuthService"

const SET_TOKEN_INFO = 'SET_TOKEN_INFO'
const REMOVE_TOKEN_INFO = 'REMOVE_TOKEN_INFO'
const SET_MY_INFO = 'SET_MY_INFO'
const INIT_STORE = 'INIT_STORE'

const loginAuthStore = {
    namespaced: true,

    state: {
        accessToken: '',
        me : {}
    },

    getters: {
        isLogin(state) {
            return state.accessToken.length > 0 && !!state.me.userId
        },
        getMyInfo(state) {
            return state.me
        },
        getTokenInfo(state) {
            return {
                accessToken: state.accessToken,
                refreshToken: VueCookies.get('refreshToken')
            }
        }
    },

    mutations: {
        [SET_TOKEN_INFO](state, tokenInfo) {
            if (tokenInfo.accessToken) {
                state.accessToken = tokenInfo.accessToken
                // request header에 Authorization 토큰 설정
                axiosApi.defaults.headers.common.Authorization = `Bearer ${state.accessToken}`
        
                // 쿠키 만료기간 설정(설정 시점 기준 accessToken:30분, refreshToken:30분)
                // 서버에서는 AT를 10분, RT를 30분으로 처리하기 때문에 AT가 만료되면 다시 발행
                const atExpTime =
                  (process.env.VUE_APP_COOKIE_EXPIRE_TIME_RT || '30') + 'min'
                const rtExpTime =
                  (process.env.VUE_APP_COOKIE_EXPIRE_TIME_RT || '30') + 'min'

                VueCookies.set('accessToken', tokenInfo.accessToken, atExpTime)
                VueCookies.set('refreshToken', tokenInfo.refreshToken, rtExpTime)
              }
        },
        [INIT_STORE](state) {
            state.accessToken = ''
            state.me = {}
            // delete axiosApi.default.headers.common.Authorization
            VueCookies.remove('accessToken')
            VueCookies.remove('refreshToken')
        },
        [SET_MY_INFO](state, payload) {
            state.me = payload.userInfo
        }
    },
    actions: {
        login({commit}, userInfo) {
            return new Promise((resolve, reject) => {
                loginAuthService
                    .userLogin(userInfo)
                    .then((res) =>{
     
                        const loginInfo = res.data
                        console.log('=== loginAuthStore > login > loginInfo: ', loginInfo)
                        
                        const payload = {
                            userInfo: loginInfo.userInfo
                        }

                        const tokenInfo={
                            accessToken: loginInfo.accessToken,
                            refreshToken: loginInfo.refreshToken
                        }
                        commit(SET_MY_INFO, payload)
                        commit(SET_TOKEN_INFO, tokenInfo)

                        resolve(res)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },
        initStore({commit}) {
            commit(INIT_STORE)
        }
    }
}
export default loginAuthStore