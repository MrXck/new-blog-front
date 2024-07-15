import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/Index.vue'),
    children: [
      {
        path: '',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'article/:id',
        name: 'article',
        meta: {
          title: '文章详情'
        },
        component: () => import('@/views/article-page/ArticlePreview')
      },
      {
        path: 'tags',
        name: 'tags',
        meta: {
          title: '标签'
        },
        component: () => import('@/views/tag-page/Index')
      },
      {
        path: 'article-list/:id',
        name: 'article-list',
        meta: {
          title: '文章列表'
        },
        component: () => import('@/views/article-page/ArticleList')
      },
      {
        path: 'archive',
        name: 'archive',
        meta: {
          title: '归档'
        },
        component: () => import('@/views/archive-page/Index')
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register'),
    meta: {
      title: '注册'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
