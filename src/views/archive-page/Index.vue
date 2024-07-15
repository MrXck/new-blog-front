<script setup>
import Pagination from "@/components/Pagination.vue";
import {onMounted, ref} from "vue";
import {getArchive} from "@/api/articleApi";
import {to} from "@/utils/routerUtils";

const page = ref({
  pageSize: 10,
  pageNum: 1,
  totalPage: 0,
})
const archives = ref({})
const keys = ref([])

function init() {
  getArchive({
    pageSize: page.value.pageSize,
    pageNum: page.value.pageNum,
  }).then(res => {
    if (res.code === 0) {
      res.data.articles.forEach(item => {
        const year = item.createTime.split('-')[0] + item.createTime.split('-')[1]
        item.createTime = item.createTime.split('T')[0]
        item.updateTime = item.updateTime.split('T')[0]
        if (!archives.value[year]) {
          archives.value[year] = [item]
        } else {
          archives.value[year].push(item)
        }
      })
      keys.value = Object.keys(archives.value).sort((a, b) => b - a)
      console.log(archives.value, keys.value)
      page.value.totalPage = Math.ceil(res.data.count / page.value.pageSize)
    }
  })
}

function updatePage(num) {
  page.value.pageNum = num
  init()
}

onMounted(() => {
  init()
})
</script>

<template>
  <div class="container">
    <div class="archive-title">归档</div>
    <div class="archive-content">
      <div class="archive-items" v-for="item in keys">
        <div class="archive-year">
          <div class="mark"></div>
          <div class="date">{{ item }}</div>
        </div>
        <div class="archive-item" v-for="(article, index) in archives[item]">
          <div class="article-time left" v-if="index % 2 === 0">{{ article.createTime }}</div>
          <div class="article-mark left" v-if="index % 2 === 0"></div>
          <div class="article-info">
            <div :class="[
                'article-title',
                index % 2 === 1 ? 'left' : 'right'
            ]" @click="to({name: 'article', params: {id: article.id}})">{{ article.title }}
            </div>
            <div :class="[
                'article-desc',
                index % 2 === 1 ? 'left' : 'right'
            ]">{{ article.digest }}
            </div>
          </div>
          <div class="article-mark right" v-if="index % 2 === 1"></div>
          <div class="article-time right" v-if="index % 2 === 1">{{ article.createTime }}</div>
        </div>
      </div>

      <Pagination @change-page="updatePage" :page="page"/>
    </div>
  </div>
</template>

<style scoped>
.archive-title {
  font-size: 40px;
  font-weight: bold;
  color: var(--font-color);
}

.archive-content {
  background-color: var(--article-bg-color);
  color: var(--article-font-color);
  padding: 40px;
  border-radius: 20px;
  box-shadow: var(--box-shadow);
  margin-top: 20px;
}

.archive-items {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
}

.archive-year {
  color: var(--archive-color);
  font-size: 30px;
  font-weight: bold;
  position: relative;
  padding: 50px 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.archive-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
}

.article-mark {
  position: relative;
  height: 100%;
  width: 30px;
}

.article-mark:before {
  background: #24c6dc;
  border: 3px solid transparent;
  border-radius: 100%;
  content: "";
  display: block;
  height: 16px;
  position: absolute;
  top: 4px;
  left: 4px;
  width: 16px;
  transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
}

.article-mark:after {
  content: "";
  width: 3px;
  background: #bebebe;
  display: block;
  position: absolute;
  top: 24px;
  bottom: 0;
  left: 13px;
}

.article-time {
  flex: 1;
  display: flex;
  color: var(--article-font-color);
}

.left {
  display: flex;
  justify-content: end;
  text-align: right;
}

.right {
  display: flex;
  justify-content: start;
  text-align: left;
}

.article-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.article-title {
  font-size: 30px;
  font-weight: bold;
  color: var(--archive-color);
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-all;
  cursor: pointer;
}

.article-desc {
  color: var(--article-font-color);
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-all;
}

.mark {
  position: absolute;
  left: 50%;
  margin-left: -7.5px;
  height: 100%;
}

.mark:before {
  background: transparent;
  content: "";
  width: 15px;
  height: auto;
  border: none;
  border-radius: 0;
  top: 0;
  bottom: 30px;
  position: absolute;
  border-top: 3px solid #bebebe;
  border-bottom: 3px solid #bebebe;
  display: block;
  transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
}

.mark:after {
  content: "";
  width: 3px;
  background: #bebebe;
  display: block;
  position: absolute;
  bottom: 0;
  height: 30px;
  left: 6px;
}

.date {
  z-index: 10;
}
</style>
