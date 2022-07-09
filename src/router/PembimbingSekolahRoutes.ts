

const prefix = '/pages/pembimbingsekolah/';

const PembimbingSekolahRoutes: Array<any> = [
    {
        path: `${prefix}dashboard`,
        name: 'PembimbingSekolahDashboardLayout',
        component: () => import("@/layouts/PembimbingSekolahLayout.vue"),
        redirect: `${prefix}dashboard/index`,
        children: [
            {
                path: `${prefix}dashboard/index`,
                name: 'PembimbingSekolahDashboard',
                component: () => import("@/views/pembimbingsekolah/DashboardIndex.vue"),
            },
            // {
            //     path: `${prefix}profile/index`,
            //     name: 'PembimbingSekolahProfile',
            //     component: () => import("@/views/pembimbingsekolah/profile/ProfileIndex.vue"),
            // },
        ],
    },
];


// PembimbingSekolahRoutes.push(
//     ...AdminSkillsRoutes,
// );
export default PembimbingSekolahRoutes;