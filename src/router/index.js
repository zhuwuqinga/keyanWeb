import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Home.vue'),
        meta: {
            title: "首页",
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/jishuArticle',
        name: 'JishuArticle',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/JishuArticle.vue'),
        meta: {
            title: "技术资源",
        }

    },
    {
        path: '/yixue:/yijiid:/:yijiindex/:erjiid',
        name: 'Yixue',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Yixue.vue'),
        meta: {
            title: "医学实验室",
        }

    }, {
        path: '/about',
        name: 'About',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
            title: "公司展示",
        }

    }, {
        path: '/articledetail/:id',
        name: 'ArticleDetail',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/ArticleDetail.vue'),
        meta: {
            title: "新闻详情",
        }

    }, {
        path: '/ketione',
        name: 'KetiOne',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/KetiOne.vue'),
        meta: {
            title: "细胞铁死亡",
        }

    }, {
        path: '/ketitwo',
        name: 'KetiTwo',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/KetiTwo.vue'),
        meta: {
            title: "非编码RNA",
        }

    }, {
        path: '/ketithree',
        name: 'KetiThree',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/KetiThree.vue'),
        meta: {
            title: "线粒体",
        }

    }, {
        path: '/ketifour',
        name: 'KetiFour',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/KetiFour.vue'),
        meta: {
            title: "细胞自噬",
        }

    }, {
        path: '/videoDetail/:id',
        name: 'VideoDetail',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/VideoDetail.vue'),
        meta: {
            title: "培训详情",
        }

    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router