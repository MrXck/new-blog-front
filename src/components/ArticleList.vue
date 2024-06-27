<script setup>
import Feature from "@/components/Feature.vue";
import ArticleCategoryList from "@/components/ArticleCategoryList.vue";
</script>

<template>
  <div class="article-list">

    <div>
      <ArticleCategoryList/>
    </div>
    <div class="article-list-container">
      <div class="article-list-item">
        <Feature :vertical="true"/>
        <Feature :vertical="true"/>
        <Feature :vertical="true"/>
        <Feature :vertical="true"/>
        <Feature :vertical="true"/>
        <Feature :vertical="true"/>
        <Feature :vertical="true"/>
        <Feature :vertical="true"/>
        <Feature :vertical="true"/>
        <Feature :vertical="true"/>
      </div>
    </div>
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
