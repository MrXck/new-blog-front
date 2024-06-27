<script setup>
import cover from '@/assets/image/default-cover.jpg'
import {Icon} from "@vicons/utils";
import {LogoWechat} from "@vicons/ionicons5";
import {QqOutlined, GithubOutlined, ZhihuOutlined, WeiboOutlined, TwitterOutlined} from "@vicons/antd";
import {toNewPage} from "@/utils/routerUtils";
import {getWebsiteConfigApi} from "@/api/websiteConfigApi";
import {onMounted, ref} from "vue";
import {IMAGE_URL} from "@/utils/Constant";
import {getArticleCount} from "@/api/articleApi";
import {getCategoryCount} from "@/api/categoryApi";
import {getTagCount} from "@/api/tagApi";

const data = ref({})
const articleCount = ref(0)
const categoryCount = ref(0)
const tagCount = ref(0)

function init() {
  getWebsiteConfigApi().then(res => {
    data.value = res.data.websiteConfigs[0]
  })


  getArticleCount().then(res => {
    articleCount.value = res.data.count
  })

  getCategoryCount().then(res => {
    categoryCount.value = res.data.count
  })

  getTagCount().then(res => {
    tagCount.value = res.data.count
  })
}

onMounted(() => {
  init()
})
</script>

<template>
  <div class="my-info">
    <img class="my-avatar" :src="data.authorCover ? IMAGE_URL + data.authorCover : cover" alt="">
    <div class="my-name">{{ data.authorName }}</div>
    <div class="my-desc">{{ data.authorDesc }}</div>
    <div class="my-option">
      <div class="my-icon" v-if="data.githubUrl" @click="toNewPage(data.githubUrl)">
        <Icon size="30">
          <GithubOutlined/>
        </Icon>
      </div>
      <div class="my-icon" v-if="data.wechatUrl" @click="toNewPage(data.wechatUrl)">
        <Icon size="30">
          <LogoWechat/>
        </Icon>
      </div>
      <div class="my-icon" v-if="data.qqUrl" @click="toNewPage(data.qqUrl)">
        <Icon size="30">
          <QqOutlined/>
        </Icon>
      </div>
      <div class="my-icon" v-if="data.zhihuUrl" @click="toNewPage(data.zhihuUrl)">
        <Icon size="30">
          <ZhihuOutlined/>
        </Icon>
      </div>
      <div class="my-icon" v-if="data.wbUrl" @click="toNewPage(data.wbUrl)">
        <Icon size="30">
          <WeiboOutlined/>
        </Icon>
      </div>
      <div class="my-icon" v-if="data.twitterUrl" @click="toNewPage(data.twitterUrl)">
        <Icon size="30">
          <TwitterOutlined/>
        </Icon>
      </div>
    </div>
    <div class="my-blog">
      <div class="my-blog-item">
        <div class="num">{{ articleCount }}</div>
        <div class="title">文章</div>
      </div>
      <div class="my-blog-item">
        <div class="num">0</div>
        <div class="title">说说</div>
      </div>
      <div class="my-blog-item">
        <div class="num">{{ categoryCount }}</div>
        <div class="title">分类</div>
      </div>
      <div class="my-blog-item">
        <div class="num">{{ tagCount }}</div>
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
  background-color: #292929;
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
  display: flex;
  flex-wrap: wrap;
}

.my-icon {
  cursor: pointer;
  margin-right: 10px;
  color: white;
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
  color: white;
  font-size: 18px;
}

.num {
  color: white;
  font-size: 18px;
}
</style>
