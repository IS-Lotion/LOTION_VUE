import router from '@/router'

const userStore = {
    state: {
        userId: '',
        userName: '',
        token: '' // 성공 시 백엔드에서 줘야할 token
    },
    mutations: {
        login: function (state, payload) {
            state.userId = payload.userId
            state.userName = payload.userName
            state.token = payload.token
        },
        loginCheck: function (state) {
            if (!state.token) {
                router.push({
                    name: 'login'
                }).catch(error => {
                    console.log(error)
                })
            }
        }

    }
}

export default userStore