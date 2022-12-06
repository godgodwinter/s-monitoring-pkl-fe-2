/* eslint-disable */
const prefix = "/pages/admin";
const prefixName = "admin-";

const AdminRoutes = [
  {
    path: `${prefix}/homeLayout`,
    name: "AdminLayout",
    component: () => import("@/layouts/AdminLayout.vue"),
    redirect: `${prefix}/home`,
    meta: {
      requireAuth: true,
      title: "Admin",
      icon: "mdi-home",
      breadcrumb: {
        name: "Home",
        path: "/pages/admin/home",
        goto: "AdminLayout",
      },
    },
    children: [
      {
        path: `${prefix}/home`,
        name: `${prefixName}dashboard`,
        meta: {
          title: "Profile",
          icon: "mdi-home",
          breadcrumb: {
            name: "Beranda",
            path: `${prefix}/home`,
            goto: `${prefixName}dashboard`,
          },
        },
        component: () => import("@/views/admin/dashboard/DashboardIndex.vue"),
      },
      {
        path: `${prefix}/tempatpkl`,
        name: `${prefixName}tempatpkl`,
        meta: {
          title: "Tempat PKL",
          icon: "mdi-home",
          breadcrumb: {
            name: "Tempat PKL",
            path: `${prefix}/tempatpkl`,
            goto: `${prefixName}tempatpkl`,
          },
        },
        component: () => import("@/views/admin/tempatpkl/TempatpklIndex.vue"),
      },
      {
        path: `${prefix}/tempatpkllayout`,
        name: `${prefixName}tempatpkllayout`,
        meta: {
          title: "Tempat PKL",
          icon: "mdi-home",
          breadcrumb: {
            name: "Tempat PKL",
            path: `${prefix}/siswa`,
            goto: `${prefixName}siswa`,
          },
        },
        component: () => import("@/views/admin/tempatpkl/Layout.vue"),
        redirect: `${prefix}/tempatpkl`,
        children: [
          {
            path: `${prefix}/tempatpkldetail/:id`,
            name: `${prefixName}tempatpkldetail-index`,
            meta: {
              title: "Detail",
              icon: "mdi-home",
              breadcrumb: {
                name: "Detail",
                path: `${prefix}/tempatpkldetail/:id`,
                goto: `${prefixName}tempatpkldetail-index`,
              },
            },
            component: () =>
              import("@/views/admin/tempatpkl/detail/TempatpklDetailIndex.vue"),
          },
        ],
      },
      {
        path: `${prefix}/siswa`,
        name: `${prefixName}siswa`,
        meta: {
          title: "Siswa",
          icon: "mdi-home",
          breadcrumb: {
            name: "Siswa",
            path: `${prefix}/siswa`,
            goto: `${prefixName}siswa`,
          },
        },
        component: () => import("@/views/admin/siswa/SiswaIndex.vue"),
      },
      {
        path: `${prefix}/siswalayout`,
        name: `${prefixName}siswalayout`,
        meta: {
          title: "Siswa",
          icon: "mdi-home",
          breadcrumb: {
            name: "Siswa",
            path: `${prefix}/siswa`,
            goto: `${prefixName}siswa`,
          },
        },
        component: () => import("@/views/admin/siswa/Layout.vue"),
        redirect: `${prefix}/siswa`,
        children: [
          {
            path: `${prefix}/siswadetail/:id`,
            name: `${prefixName}siswadetail-index`,
            meta: {
              title: "Profile",
              icon: "mdi-home",
              breadcrumb: {
                name: "Detail Nilai",
                path: `${prefix}/siswadetail/:id`,
                goto: `${prefixName}siswadetail-index`,
              },
            },
            component: () =>
              import("@/views/admin/siswa/detail/SiswaDetailIndex.vue"),
          },
        ],
      },

      //GURU KEPALA JURUSAN
    ],
  },
];
export default AdminRoutes;
