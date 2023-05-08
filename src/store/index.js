import {createStore} from 'vuex'
// import Vue from 'vue'
// import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import loginAuthStore from './loginAuthStore'



const store = createStore({
    modules: {
        loginAuthStore,
    },
    // 주요상태 새로고침 방지
    // npm install --save vuex-persistedstate
    plugins: [
        createPersistedState({
            paths: ['loginAuthStore']
        })
    ]
})

export default store