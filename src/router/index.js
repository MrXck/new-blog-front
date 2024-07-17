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
        path: 'article-search',
        name: 'article-search',
        meta: {
          title: '搜索结果'
        },
        component: () => import('@/views/article-page/ArticleSearch')
      },
      {
        path: 'archive',
        name: 'archive',
        meta: {
          title: '归档'
        },
        component: () => import('@/views/archive-page/Index')
      },
      {
        path: 'photo',
        name: 'photo',
        meta: {
          title: '相册'
        },
        component: () => import('@/views/photo-page/Index')
      },
      {
        path: 'photo-list/:id',
        name: 'photo-list',
        meta: {
          title: '照片列表'
        },
        component: () => import('@/views/photo-page/PhotoList')
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
