import VueCookie from 'vue-cookie';
import {createRouter, createWebHistory} from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
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
    if (VueCookie.get('userId') === null && (to.name !== 'Login' && to.name !== 'SignUp') ) {
        return {name: 'Login'}
    }
    if (VueCookie.get('userId') !== null && to.name === 'Login') {
        return {name: 'Home'}
    }
})

export default router;