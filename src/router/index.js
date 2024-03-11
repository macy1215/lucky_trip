import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: '首頁',
    component: () => import('../views/user/UserLayout.vue'),
    children: [
      {
        path: 'products',
        name: '預計產品頁',
        component: () => import('../views/user/AboutView.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LogInView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404Page',
    component: () => import('@/views/404PageView.vue'),
  },
  {
    path: '/admin',
    name: '後台驗證',
    component: () => import('../views/dashboard/DashboardView.vue'),
    children: [
      {
        path: 'products',
        name: '產品列表',
        component: () => import('../views/dashboard/ProductsView.vue'),
      },
      {
        path: 'orders',
        name: '訂單列表',
        component: () => import('../views/dashboard/OrdersView.vue'),
      },
      {
        path: 'blogs',
        name: '部落格文章',
        component: () => import('../views/dashboard/BlogView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
