<script setup>
import {onMounted, reactive, ref} from "vue";
import {getArticleByTagId} from "@/api/articleTagApi";
import {useRoute} from "vue-router";
import Pagination from "@/components/Pagination.vue";
import Feature from "@/components/Feature.vue";

const route = useRoute()
const page = ref({
  pageSize: 10,
  pageNum: 1,
  totalPage: 0,
})
const articleList = reactive([])

function init() {
  const id = route.params.id
  getArticleByTagId(id, {
    pageNum: page.value.pageNum,
    pageSize: page.value.pageSize,
  }).then(res => {
    if (res.code === 0) {
      articleList.length = 0
      articleList.push(...res.data.articles)
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
    <div class="tag-title">{{route.query.name}}</div>
    <div class="article-list">
      <div class="article-list-item">
        <Feature v-for="item in articleList" :data="item" :vertical="true"/>
      </div>
      <Pagination @change-page="updatePage" :page="page"/>
    </div>
  </div>
</template>

<style scoped>
.tag-title {
  font-size: 40px;
  font-weight: bold;
  color: var(--font-color);
}

.article-list {
  background-color: var(--article-bg-color);
  color: var(--article-font-color);
  padding: 40px;
  border-radius: 20px;
  box-shadow: var(--box-shadow);
  margin-top: 20px;
}

.article-list-item {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 1024px) {
  .article-list-item {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .article-list-item {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
