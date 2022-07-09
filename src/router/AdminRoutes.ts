

const prefix = '/pages/admin/';

const AdminRoutes: Array<any> = [
    {
        path: `${prefix}dashboard`,
        name: 'AdminDashboard',
        component: () => import("@/layouts/AdminLayout.vue"),
        redirect: `${prefix}dashboard/index`,
        children: [
            {
                path: `${prefix}dashboard/index`,
                name: 'AdminDashboard',
                component: () => import("@/views/admin/DashboardIndex.vue"),
            },
            {
                path: `${prefix}profile/index`,
                name: 'AdminProfile',
                component: () => import("@/views/admin/profile/ProfileIndex.vue"),
            },
            {
                path: `${prefix}siswa/index`,
                name: 'AdminSiswa',
                component: () => import("@/views/admin/siswa/SiswaIndex.vue"),
            },
            {
                path: `${prefix}absensi/index`,
                name: 'AdminAbsensi',
                component: () => import("@/views/admin/absensi/AbsensiIndex.vue"),
            },
            {
                path: `${prefix}rekap/index`,
                name: 'AdminRekap',
                component: () => import("@/views/admin/rekap/RekapIndex.vue"),
            },
        ],
    },
];


// AdminRoutes.push(
//     ...AdminSkillsRoutes,
// );
export default AdminRoutes;