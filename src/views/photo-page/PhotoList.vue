<script setup>
import {IMAGE_URL} from "@/utils/Constant";
import {useRoute} from "vue-router";
import {onMounted, reactive, ref} from "vue";
import Pagination from "@/components/Pagination.vue";
import {getPhotoAlbumPhotoListByPage} from "@/api/photoApi";
import {to, toNewPage} from "@/utils/routerUtils";

const route = useRoute()
const photoList = reactive([])
const page = ref({
  pageSize: 10,
  pageNum: 1,
  totalPage: 0,
})

function init() {
  getPhotoAlbumPhotoListByPage(route.params.id, {
    pageSize: page.value.pageSize,
    pageNum: page.value.pageNum
  }).then(res => {
    if (res.code === 0) {
      photoList.length = 0
      photoList.push(...res.data.page.records)
      page.value.totalPage = Math.ceil(res.data.page.total / page.value.pageSize)
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
    <div class="photo-title">{{ route.query.name }}</div>
    <div class="photo-content">
      <div class="photo-list">
        <div class="photo-item" v-for="item in photoList">
          <img class="photo-cover" :src="IMAGE_URL + item.path" alt="">
          {{ item.name }}
          <div class="photo-count">{{ item.photoCount }}</div>
        </div>
      </div>
      <Pagination @change-page="updatePage" :page="page"/>
    </div>
  </div>
</template>

<style scoped>
.photo-title {
  font-size: 40px;
  font-weight: bold;
  color: var(--font-color);
}

.photo-content {
  background-color: var(--article-bg-color);
  color: var(--article-font-color);
  padding: 40px;
  border-radius: 20px;
  box-shadow: var(--box-shadow);
  margin-top: 20px;
}

.photo-list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
}

.photo-cover {
  width: 100%;
  object-fit: cover;
  height: 200px;
}

@media (max-width: 1024px) {
  .photo-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .photo-list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
