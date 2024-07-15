<script setup>
import {to} from "@/utils/routerUtils";
import {getPhotoAlbumListByPage} from "@/api/photoAlbumApi";
import {onMounted, reactive, ref} from "vue";
import {IMAGE_URL} from "@/utils/Constant";
import Pagination from "@/components/Pagination.vue";

const photoList = reactive([])
const page = ref({
  pageSize: 10,
  pageNum: 1,
  totalPage: 0,
})

function init() {
  getPhotoAlbumListByPage({
    pageSize: page.value.pageSize,
    pageNum: page.value.pageNum,
  }).then(res => {
    if (res.code === 0) {
      photoList.push(...res.data.photoAlbumVOS)
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
    <div class="photo-title">相册</div>
    <div class="photo-content">
      <div class="photo-list">
        <div class="photo-item" v-for="item in photoList"
             @click="to({name: 'photo-list', params: {id: item?.id}, query: {name: item.name}})">
          <img class="photo-cover" :src="IMAGE_URL + item.cover" alt="">
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
  display: flex;
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

.photo-item {
  cursor: pointer;
  position: relative;
}

.photo-count {
  position: absolute;
  left: 10px;
  bottom: 30px;
  color: var(--photo-count-color);
  font-size: 20px;
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
