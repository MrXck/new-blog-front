<script setup>
import {nextTick, onMounted, reactive, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {getArticleById} from "@/api/articleApi";
import cover from '@/assets/image/default-cover.jpg'
import {IMAGE_URL} from "@/utils/Constant";
import MyInfo from "@/components/MyInfo.vue";
import {Viewer} from '@bytemd/vue-next'
import gfm from '@bytemd/plugin-gfm'
import gemoji from '@bytemd/plugin-gemoji'
import highlight from '@bytemd/plugin-highlight'
import frontmatter from '@bytemd/plugin-frontmatter'
import mediumZoom from '@bytemd/plugin-medium-zoom'
import breaks from '@bytemd/plugin-breaks'
import zhHans from 'bytemd/locales/zh_Hans.json'
import 'bytemd/dist/index.css'
import {getProcessor} from "bytemd"
import 'highlight.js/styles/tokyo-night-dark.min.css'
import Directory from "@/components/Directory.vue";


const route = useRoute()
const router = useRouter()
const id = route.params.id
const article = ref({})
const isLoading = ref(true)
const plugins = [
  gfm(),
  gemoji(),
  highlight(),
  frontmatter(),
  mediumZoom(),
  breaks(),
]
const tagList = reactive([])
const h = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']
const viewer = ref(null)

const getCataLogData = () => {
  getProcessor({
    plugins: [
      {
        rehype: p =>
            p.use(() => tree => {
              tagList.length = 0
              if (tree && tree.children.length) {
                tree.children.filter(v => {
                  v.indentation = h.indexOf(v.tagName?.toUpperCase())
                  return v.type === 'element' && v.indentation !== -1 && v.children.length > 0
                }).forEach((node, index) => {
                  const offsetTop = document.getElementById(`id-${index}`).offsetTop
                  tagList.push({
                    id: `#id-${index}`,
                    text: node.children[0].value,
                    indentation: node.indentation,
                    offsetTop,
                    top: 29 * index
                  })
                })
              }
            }),
      },
    ],
  }).processSync(article.value.content)
}


function setTitleId() {
  if (!viewer.value) return

  const children = viewer.value.markdownBody.children
  let index = 0
  tagList.length = 0
  for (let i = 0; i < children.length; i++) {
    if (h.indexOf(children[i].tagName) !== -1) {
      children[i].id = `id-${index}`
      index += 1
    }
  }
  getCataLogData()
}

function init() {
  getArticleById(id).then(res => {
    if (res.code === 0) {
      article.value = res.data.articleVO
      setTimeout(() => {
        setTitleId()
        if (route.hash) {
          nextTick(() => {
            document.documentElement.scrollTo({
              top: document.querySelector(route.hash).offsetTop,
              behavior: 'smooth'
            })
          })
        } else {
          document.documentElement.scrollTo({
            top: 0
          })
        }
      }, 1000)
    } else {
      router.back()
    }
  }).finally(() => {
    isLoading.value = false
  })
}

onMounted(() => {
  init()
})
</script>

<template>
  <div v-if="!isLoading" class="article-container">
    <div class="article-title">
      {{ article.title }}
    </div>
    <div class="article-info">
      <div class="author">
        <img class="author-cover" :src="article.avatar ? IMAGE_URL + article.avatar : cover" alt="">
        <div class="author-username">{{ article.username }}</div>
        <div class="article-create-time">发布于 {{ article.createTime.replace('T', ' ') }}</div>
      </div>
    </div>
    <div class="article">
      <div class="left-article-container">
        <div class="article-content">
          <Viewer ref="viewer" style="width: 100%" :locale="zhHans" :value="article.content" :plugins="plugins"/>
        </div>
      </div>
      <div class="right-article-container">
        <div class="sticky">
          <Directory class="title" :tag-list="tagList"></Directory>
          <MyInfo/>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.article-container {
  display: flex;
  flex-direction: column;
}

.article {
  display: flex;
  gap: 20px;
  box-sizing: content-box;

}

.left-article-container {
  width: calc(100% - 300px);
  box-sizing: content-box;
}

.right-article-container {
  min-width: 300px;
}

.sticky {
  position: sticky;
  top: 60px;
}

.article-title {
  font-size: 40px;
  color: var(--font-color);
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-all;
}

.article-info {
  margin-top: 30px;
}

.author {
  display: flex;
  align-items: center;
}

.author-cover {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.author-username {
  font-weight: bold;
  font-size: 18px;
  margin: 0 10px;
  color: var(--font-color);
}

.article-create-time {
  color: var(--feature-time-color);
}

.article-content {
  background-color: var(--article-bg-color);
  color: var(--article-font-color);
  padding: 40px;
  border-radius: 20px;
  box-shadow: var(--box-shadow);
  margin-top: 20px;

}

@media (max-width: 1024px) {
  .right-article-container {
    display: none;
  }

  .left-article-container {
    width: 100%;
  }
}

:deep(.markdown-body) {
  color: var(--article-font-color);
}

:deep(.markdown-body h1) {
  padding-bottom: 12px;
  margin-top: 35px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ececec;
}

:deep(.markdown-body h2) {
  padding-bottom: 12px;
  margin-top: 35px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ececec;
}

:deep(.markdown-body h3) {
  padding-bottom: 12px;
  margin-top: 35px;
  margin-bottom: 10px;
}

:deep(.markdown-body h4) {
  padding-bottom: 12px;
  margin-top: 35px;
  margin-bottom: 10px;
}

:deep(.markdown-body h5) {
  padding-bottom: 12px;
  margin-top: 35px;
  margin-bottom: 10px;
}

:deep(.markdown-body h6) {
  padding-bottom: 12px;
  margin-top: 35px;
  margin-bottom: 10px;
}

:deep(.medium-zoom-image) {
  max-width: 100%;
}

:deep(.medium-zoom-image--opened) {
  position: fixed !important;
  z-index: 9999 !important;
}
</style>
