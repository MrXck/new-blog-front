<script setup>
import cover from "@/assets/image/default-cover.jpg";
import {onBeforeUnmount, onMounted, ref} from "vue";
import {IMAGE_URL} from "@/utils/Constant";
import {to} from "@/utils/routerUtils";

const {data} = defineProps({
  vertical: {
    type: Boolean,
    default: false
  },
  data: {
    type: Object,
    required: true
  }
})

const windowSmall = ref(document.documentElement.clientWidth < 768)

function resize() {
  windowSmall.value = document.documentElement.clientWidth < 768
}

onMounted(() => {
  window.addEventListener('resize', resize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resize)
})

</script>

<template>
  <div :class="[
      'feature',
      vertical ? 'vertical' : '',
      windowSmall ? 'vertical fixed-width' : ''
  ]">
    <div class="feature-container" @click="to({name: 'article', params: {id: data?.id}})">
      <div class="feature-article">
        <div class="feature-left">
          <img class="feature-image" :src="data?.cover ? IMAGE_URL + data.cover : cover" alt="">
          <span class="feature-image-nail"></span>
        </div>
        <div class="feature-right">
          <div class="feature-right-container">
            <div class="feature-right-top">
              <div class="feature-article-top">{{ data?.categoryName }}<span
                  v-for="item in data?.tagList"> #{{ item }}</span></div>
              <div class="feature-article-title">{{ data?.title }}</div>
              <div class="feature-article-desc">{{ data?.digest }}</div>
            </div>
            <div class="feature-right-bottom">
              <img class="feature-avatar" :src="data.avatar ? IMAGE_URL + article.avatar : cover" alt="">
              <div class="feature-username">{{ data?.username }}</div>
              <div class="feature-create-time">发布于 {{ data?.createTime?.replace('T', ' ') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.feature {
  height: 450px;
  overflow: hidden;
  border-radius: 20px;
  background-color: var(--feature-bg-color);
  transition: scale .5s;
}

.feature:hover {
  scale: 1.05;
}

.fixed-width {
  width: 100% !important;
}

.feature-container {
  display: flex;
  height: 100%;
}

.feature-article {
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.feature-left {
  width: 50%;
  position: relative;
}

.feature-right {
  width: 45%;
  color: var(--font-color);
  z-index: 40;
  padding: 40px;
  box-sizing: border-box;
}

.feature-right-container {
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.feature-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 120%;
  height: 100%;
  object-fit: cover;
  z-index: 20;
}

.feature-image-nail {
  position: absolute;
  z-index: 35;
  left: 71%;
  top: 0;
  height: 100%;
  width: 50%;
  background: var(--feature-nail-bg-color);
}

.feature-article-title {
  font-size: 40px;
  font-weight: bold;
  margin: 20px 0;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-all;
  color: var(--feature-title-color);
}

.feature-article-desc {
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-all;
  color: var(--feature-desc-color);
  font-size: 18px;
}

.feature-right-bottom {
  display: flex;
  align-items: center;
}

.feature-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}

.feature-username {
  margin: 0 10px;
  color: var(--feature-title-color);
}

.feature-create-time {
  color: var(--feature-time-color);
}

.feature-article-top {
  color: var(--feature-title-color);
}

.vertical.feature {
  height: 300px;
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  background-color: var(--feature-bg-color);
}

.vertical .feature-container {
  display: flex;
  height: 100%;
  flex-direction: column;
}

.vertical .feature-article {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.vertical .feature-left {
  height: 40%;
  width: 100%;
  position: relative;
}

.vertical .feature-right {
  height: 60%;
  color: var(--font-color);
  z-index: 40;
  width: 100%;
  padding: 0 0 20px 0;
}

.vertical .feature-right-container {
  height: 100%;
  padding: 0 20px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.vertical .feature-image {
  position: absolute;
  top: 0;
  left: 0;
  height: 120%;
  width: 100%;
  object-fit: cover;
  z-index: 20;
  border-radius: 10px;
}

.vertical .feature-image-nail {
  position: absolute;
  z-index: 35;
  top: 35%;
  left: 0;
  height: 100%;
  width: 100%;
  background: var(--feature-vertical-nail-bg-color);
}

.vertical .feature-article-title {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-all;
  color: var(--feature-title-color);
}

.vertical .feature-article-desc {
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-all;
  color: var(--feature-desc-color);
  font-size: 16px;
}

.vertical .feature-right-bottom {
  display: flex;
  align-items: center;
}

.vertical .feature-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  color: var(--font-color);
}

.vertical .feature-username {
  margin: 0 10px;
  color: var(--feature-title-color);
}

.vertical .feature-create-time {
  color: var(--feature-time-color);
}
</style>
