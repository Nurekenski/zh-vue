    import Vue from 'vue'
    import VueRouter from 'vue-router'

    Vue.use(VueRouter);

    // Router components
    import AuthPage from '../components/auth/AuthPage.vue';
    import Login from '../components/auth/components/login.vue';
    import ForgotPassword from '../components/auth/components/forgotPassword.vue';
    import Register from '../components/auth/components/register.vue';
    import Reg_confirm from '../components/auth/components/reg_confirm.vue';
    import Check from '../components/auth/components/check.vue';


    import Main from '../components/Main/Main.vue';
    

    
    import Checked from '../components/account/CheckedDocument.vue';
    import Not_Checked from '../components/account/Not_checked_document.vue';



    import EditData from '../components/account/EditData.vue';
    import UserPage from '../components/account/UserPage.vue';
    import User from '../components/account/user.vue';
    import Profile from '../components/account/profile.vue';
    import CheckDocument from '../components/account/CheckDocument.vue';
    import StudentPage from '../components/account/StudentPage.vue';

    import SignStudentPage from '../components/auth/SignStudentPage.vue';

    import Admin from '../components/auth/Admin.vue';


    import Statistics from '../components/account/Statistics.vue';
    import ErrorPage from '../components/error/404.vue';

    const router = new VueRouter({
    routes: [
            {
                path: '/',
                component: StudentPage,
                // meta: { guest: true },
                children: [
                    { path: 'login', component: StudentPage }
                ]
            }, 
            {
                path: '/admin',
                component: Admin,
                // meta: { guest: true },
                children: [
                    { path: 'admin', component: Admin }
                ]
            }, 
            {
                path: '/statistic',
                component: Statistics,
                meta: { guest: true },
                children: [
                    { path: 'statistic', component: Statistics }
                ]
            }, 
            {
                path: '/student',
                component: SignStudentPage,
                // meta: { guest: true },
                children: [
                    { path: 'student', component:  SignStudentPage }
                ]
            }, 
            {
                path: '/sign',
                component: AuthPage,
                // meta: { guest: true },
                children: [
                    { path: 'login', component: Login }
                ]
            }, 
          
            {
                 path: 'statistic', component: Statistics 
            },
            {
                path: '/user',
                component: UserPage,
                // meta: { requiresAuth: true },
                children: [
                    { path: '/', component: User  },
                    { path: 'profile', component: Profile },
                    { path: 'settings', component: CheckDocument },
                    { path: 'edit', component: EditData },
                    { path: 'checked', component: Checked },
                    { path: 'not_checked', component: Not_Checked },
                    { path: '/checked',component: Checked},
                    { path: '/not_checked',component:  Not_Checked },
                   
                    // { path: 'faq', component: Faq },
                ]
            },
            {
                path: '*',
                component: ErrorPage,
            }
    ],
    mode: 'history'
    });

    router.beforeEach(
        (to, from, next) => {
            if(to.matched.some(record => record.meta.requiresAuth)) {
                if (localStorage.getItem('access_token') == null) {
                    next({
                        path: '/user',
                        params: { nextUrl: to.fullPath }
                    })
                } 
                else {
                    next()
                }
            } else if(to.matched.some(record => record.meta.guest)) {
                if(localStorage.getItem('access_token') == null){
                    next()
                }
                else{
                    next({ path: '/'})
                }
            }else {
                next() 
            }
        }
    )

    export default router;


