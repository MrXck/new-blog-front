<script setup>
import Feature from "@/components/Feature.vue";
import FeatureList from "@/components/FeatureList.vue";
import ArticleList from "@/components/ArticleList.vue";
import {Icon} from "@vicons/utils";
import {BonfireOutline} from "@vicons/ionicons5";
import MyInfo from "@/components/MyInfo.vue";
import {onMounted, ref} from "vue";
import {getNewArticle} from "@/api/articleApi";

const isLoading = ref(true)
const article = ref({})

async function init() {
  getNewArticle().then(res => {
    article.value = res.data.articleVOS[0]
  })
}

onMounted(async () => {
  await init()
  isLoading.value = false
})

</script>

<template>
  <div v-if="!isLoading">
    <Feature :data="article"/>
    <FeatureList/>
    <div class="article-list-title">
      <div class="article-list-icon">
        <Icon size="40">
          <BonfireOutline></BonfireOutline>
        </Icon>
      </div>
      <div class="article-list-desc">文章列表</div>
    </div>
    <div class="article-container">
      <div class="article-container-left">
        <ArticleList/>
      </div>
      <div class="article-container-right">
        <MyInfo/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.article-container {
  display: flex;
  gap: 0 20px;
}

.article-container-left {
  flex: 3;
}

.article-container-right {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.article-list-title {
  display: flex;
  margin-top: 40px;
}

.article-list-desc {
  font-size: 30px;
  font-weight: bold;
}

@media (max-width: 1024px) {
  .article-container-right {
    display: none;
  }
}
</style>
