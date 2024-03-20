import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: '前台頁面',
    component: () => import('../views/user/UserLayout.vue'),
    children: [
      {
        path: '',
        name: '首頁',
        component: () => import('../views/user/UserHome.vue'),
      },
      {
        path: '/about',
        name: '關於我們',
        component: () => import('../views/user/UserAbout.vue'),
      },
      {
        path: '/products',
        name: '產品頁',
        component: () => import('../views/user/UserProducts.vue'),
      },
      {
        path: '/product/:id',
        name: '產品頁面',
        component: () => import('@/views/user/UserProduct.vue'),
      },
      {
        path: '/carts',
        name: '購物車頁',
        component: () => import('../views/user/UserCart.vue'),
      },
      {
        path: '/form',
        name: '個人資訊',
        component: () => import('../views/user/UserForm.vue'),
      },
      {
        path: '/saved',
        name: '我的收藏',
        component: () => import('../views/user/UserSaved.vue'),
      },
      {
        path: '/qalist',
        name: '問答清單',
        component: () => import('../views/user/UserQA.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: '登入頁面',
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
