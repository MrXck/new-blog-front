<script setup>
import {getAllTag} from "@/api/tagApi";
import {onMounted, reactive} from "vue";
import {to} from "@/utils/routerUtils";

const tagList = reactive([])

function init() {
  getAllTag().then(res => {
    if (res.code === 0) {
      tagList.length = 0
      tagList.push(...res.data.tags)
    }
  })
}

onMounted(() => {
  init()
})
</script>

<template>
<div class="container">
  <div class="tag-title">标签</div>
  <div class="tag-content">
    <div class="tag-list">
      <div class="tag-item" v-for="item in tagList" @click="to({name: 'article-list', params: {id: item?.id}, query: {name: item.name}})">{{item.name}}</div>
    </div>
  </div>
</div>
</template>

<style scoped>
.tag-title {
  font-size: 40px;
  font-weight: bold;
  color: var(--font-color);
}

.tag-content {
  background-color: var(--article-bg-color);
  color: var(--article-font-color);
  padding: 40px;
  border-radius: 20px;
  box-shadow: var(--box-shadow);
  margin-top: 20px;
}

.tag-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.tag-item {
  cursor: pointer;
  color: var(--tag-color);
  transition: .3s all;
}

.tag-item:hover {
  filter: brightness(.5);
}
</style>
