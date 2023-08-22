import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    // {
    //     path: '/',
    //     name: 'home',
    //     component: HomeView
    // },
    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // },
    {
        path: '/',
        name: 'Home',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Home/index.vue'),
    },
    {
        path: '/timeline',
        name: 'TimeLine',
        component: () =>
            import(
                /* webpackChunkName: "about" */ '../views/TimeLine/index.vue'
            ),
    },
    {
        path: '/view/:id',
        name: 'View',
        component: () =>
            import(
                /* webpackChunkName: "about" */ '../views/ArticleDetail/index.vue'
            ),
    },
    {
        path: '/personal/:id',
        name: 'Personal',
        component: () =>
            import(
                /* webpackChunkName: "about" */ '../views/Personal/index.vue'
            ),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
