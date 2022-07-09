const AuthRoutes = [
    {
        path: '/pages/login',
        name: 'AuthLanding',
        component: () => import("@/layouts/LandingLayout.vue"),
        redirect: '/',
        children: [
            {
                path: '/',
                name: 'LandingIndex',
                component: () => import("@/views/landing/LandingIndex.vue"),
            },
            {
                path: '/login',
                name: 'LandingLogin',
                component: () => import("@/views/landing/LandingLogin.vue"),
            },
            {
                path: '/login/pembimbingsekolah',
                name: 'LandingLoginPembimbingSekolah',
                component: () => import("@/views/landing/LandingLoginPembimbingSekolah.vue"),
            },
        ],
    },
];
export default AuthRoutes;
