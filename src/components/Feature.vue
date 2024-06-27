<script setup>
import cover from "@/assets/image/default-cover.jpg";
import {onBeforeUnmount, onMounted, ref} from "vue";

const {} = defineProps({
  vertical: {
    type: Boolean,
    default: false
  },
  // data: {
  //   type: Object,
  //   required: true
  // }
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
    <div class="feature-container">
      <div class="feature-article">
        <div class="feature-left">
          <img class="feature-image" :src="cover" alt="">
          <span class="feature-image-nail"></span>
        </div>
        <div class="feature-right">
          <div class="feature-right-container">
            <div class="feature-right-top">
              <div class="feature-article-top">231321 #789789</div>
              <div class="feature-article-title">321321</div>
              <div class="feature-article-desc">gfdgfd</div>
            </div>
            <div class="feature-right-bottom">
              <img class="feature-avatar" :src="cover" alt="">
              <div class="feature-username">测试测试</div>
              <div class="feature-create-time">发布于 六月 26, 2024</div>
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
  background-color: #212121;
  transition: scale .5s;
}

.feature:hover {
  scale: 1.05;
}

.fixed-width {
  width: 100%!important;
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
  color: white;
  z-index: 40;
  padding: 40px;
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
  background: linear-gradient(90deg, hsla(0, 0%, 13%, 0) 0, hsla(0, 0%, 13%, 0.013) 8.1%, hsla(0, 0%, 13%, 0.049) 15.5%, hsla(0, 0%, 13%, 0.104) 22.5%, hsla(0, 0%, 13%, 0.175) 29%, hsla(0, 0%, 13%, 0.259) 35.3%, hsla(0, 0%, 13%, 0.352) 41.2%, hsla(0, 0%, 13%, 0.45) 47.1%, hsla(0, 0%, 13%, 0.55) 52.9%, hsla(0, 0%, 13%, 0.648) 58.8%, hsla(0, 0%, 13%, 0.741) 64.7%, hsla(0, 0%, 13%, 0.825) 71%, hsla(0, 0%, 13%, 0.896) 77.5%, hsla(0, 0%, 13%, 0.951) 84.5%, hsla(00, 0%, 13%, 0.987) 91.9%, #212121);
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
}

.feature-article-desc {
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-all;
  color: #9b9b9b;
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
}

.feature-create-time {
  color: #555555;
}

.vertical.feature {
  height: 300px;
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  background-color: #212121;
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
  color: white;
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
  background: linear-gradient(180deg, hsla(0, 0%, 13%, 0) 0, hsla(0, 0%, 13%, 0.013) 8.1%, hsla(0, 0%, 13%, 0.049) 15.5%, hsla(0, 0%, 13%, 0.104) 22.5%, hsla(0, 0%, 13%, 0.175) 29%, hsla(0, 0%, 13%, 0.259) 35.3%, hsla(0, 0%, 13%, 0.352) 41.2%, hsla(0, 0%, 13%, 0.45) 47.1%, hsla(0, 0%, 13%, 0.55) 52.9%, hsla(0, 0%, 13%, 0.648) 58.8%, hsla(0, 0%, 13%, 0.741) 64.7%, hsla(0, 0%, 13%, 0.825) 71%, hsla(0, 0%, 13%, 0.896) 77.5%, hsla(0, 0%, 13%, 0.951) 84.5%, hsla(00, 0%, 13%, 0.987) 91.9%, #212121);
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
}

.vertical .feature-article-desc {
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-all;
  color: #9b9b9b;
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
}

.vertical .feature-username {
  margin: 0 10px;
}

.vertical .feature-create-time {
  color: #555555;
}
</style>
