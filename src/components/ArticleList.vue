<script setup>
import Feature from "@/components/Feature.vue";
import ArticleCategoryList from "@/components/ArticleCategoryList.vue";
import {getArticleByPage} from "@/api/articleApi";
import {onMounted, reactive, ref} from "vue";
import Pagination from "@/components/Pagination.vue";

const articleList = reactive([])
const page = ref({
  pageSize: 10,
  pageNum: 1,
  totalPage: 0,
  keyword: '',
  categoryId: null
})

function init() {
  getArticleByPage(page.value).then(res => {
    if (res.code === 0) {
      articleList.length = 0
      articleList.push(...res.data.articleVOS)
      page.value.totalPage = Math.ceil(res.data.count / page.value.pageSize)
    }
  })
}

function updatePage(num) {
  page.value.pageNum = num
  init()
}

function changeCategory(id) {
  page.value.categoryId = id
  init()
}

onMounted(() => {
  init()
})
</script>

<template>
  <div class="article-list">
    <div>
      <ArticleCategoryList :current="page.categoryId" @change-category="changeCategory"/>
    </div>
    <div class="article-list-container">
      <div class="article-list-item">
        <Feature :vertical="true" v-for="article in articleList" :data="article"/>
      </div>
    </div>
    <Pagination @change-page="updatePage" :page="page"/>
  </div>
</template>

<style scoped>
.article-list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.article-list-container {
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
