<script setup>
const emits = defineEmits(['change-page'])
const {page} = defineProps({
  page: {
    type: Object,
    required: true
  }
})

function updatePage(num) {
  emits('change-page', num)
}
</script>

<template>
  <div class="page-container">
    <div class="page-num" v-if="page.pageNum > 3" @click="updatePage(1)">1</div>
    <div class="page-num" v-if="page.pageNum > 4">...</div>
    <div class="page-num" v-if="page.pageNum - 2 > 0" @click="updatePage(page.pageNum - 2)">{{ page.pageNum - 2 }}</div>
    <div class="page-num" v-if="page.pageNum - 1 > 0" @click="updatePage(page.pageNum - 1)">{{ page.pageNum - 1 }}</div>
    <div class="page-num current">{{ page.pageNum }}</div>
    <div class="page-num" v-if="page.pageNum + 1 <= page.totalPage" @click="updatePage(page.pageNum + 1)">{{ page.pageNum + 1 }}</div>
    <div class="page-num" v-if="page.pageNum + 2 <= page.totalPage" @click="updatePage(page.pageNum + 2)">{{ page.pageNum + 2 }}</div>
    <div class="page-num" v-if="page.pageNum + 3 < page.totalPage">...</div>
    <div class="page-num" v-if="page.pageNum + 3 <= page.totalPage" @click="updatePage(page.totalPage)">{{page.totalPage}}</div>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  font-size: 20px;
}

.page-num {
  margin-right: 20px;
  cursor: pointer;
}

.current {
  color: #007bff;
  font-weight: bold;
}

.page-num:hover {
  color: #007bff;
}
</style>
