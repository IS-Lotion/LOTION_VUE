import VueCookie from 'vue-cookie';
import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'


const router = createRouter({
    // history: createWebHistory(),
    // createWebHistory 사용시 새로고침, 뒤로가기 시 404에러 발생
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        redirect: '/home'
    },
    {   
        name: 'Home',
        path: '/home',
        component: () =>import('@/views/Main')
    },
    {
        name: 'Login',
        path: '/login',
        component: () => import('@/views/Login')
    },
    {
        name: 'SignUp',
        path: '/signUp',
        component: () => import('@/views/SignUp')  
    }]
});

router.beforeEach(async (to, from) => {
    console.log(` router from : '${from.path}' ==> to: '${to.path}' ` )
    if (VueCookie.get('accessToken') === null && (to.name !== 'Login' && to.name !== 'SignUp') ) {
        return {name: 'Login'}
    }
    if (VueCookie.get('accessToken') !== null && to.name === 'Login') {
        return {name: 'Home'}
    }
})

export default router;