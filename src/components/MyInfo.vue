<script setup>
import cover from '@/assets/image/default-cover.jpg'
import {Icon} from "@vicons/utils";
import {LogoGithub} from "@vicons/ionicons5";
import {toNewPage} from "@/utils/routerUtils";
</script>

<template>
  <div class="my-info">
    <img class="my-avatar" :src="cover" alt="">
    <div class="my-name">XCK</div>
    <div class="my-desc">XCK</div>
    <div class="my-option">
      <div class="my-icon" @click="toNewPage('https://github.com/MrXck')">
        <Icon size="30">
          <LogoGithub/>
        </Icon>
      </div>
    </div>
    <div class="my-blog">
      <div class="my-blog-item">
        <div class="num">0</div>
        <div class="title">文章</div>
      </div>
      <div class="my-blog-item">
        <div class="num">0</div>
        <div class="title">说说</div>
      </div>
      <div class="my-blog-item">
        <div class="num">0</div>
        <div class="title">分类</div>
      </div>
      <div class="my-blog-item">
        <div class="num">0</div>
        <div class="title">标签</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1e222f;
  padding: 20px;
  border-radius: 10px;
}

.my-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.my-name {
  font-size: 40px;
  font-weight: bold;
  color: white;
  margin-top: 20px;
}

.my-desc {
  margin-top: 20px;
  color: white;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-all;
}

.my-option {
  margin-top: 40px;
}

.my-icon {
  cursor: pointer;
}

.my-blog {
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 40px;
}

.my-blog-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  color: #a18999;
  font-size: 18px;
}

.num {
  color: #f3dceb;
  font-size: 18px;
}
</style>
