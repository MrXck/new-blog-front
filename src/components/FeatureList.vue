<script setup>
import {Icon} from '@vicons/utils'
import {BonfireOutline} from "@vicons/ionicons5"
import Feature from "@/components/Feature.vue";
import {getNewFeatured} from "@/api/articleApi";
import {onMounted, reactive} from "vue";

const featureList = reactive([])

function init() {
  getNewFeatured().then(res => {
    featureList.length = 0
    featureList.push(...res.data.articleVOS)
  })
}

onMounted(() => {
  init()
})
</script>

<template>
  <div class="feature-list">
    <div class="feature-title">
      <div class="feature-icon">
        <Icon size="30">
          <BonfireOutline></BonfireOutline>
        </Icon>
      </div>
      <div class="feature-desc">推荐文章</div>
    </div>
    <div class="feature-item" v-for="item in featureList">
      <Feature :vertical="true" :data="item"/>
    </div>
  </div>
</template>

<style scoped>
.feature-list {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.feature-title {
  display: flex;
  align-items: center;
  height: 300px;
  justify-content: center;
  width: 240px;
  border: var(--feature-title-border);
  border-radius: 8px;
  justify-items: center;
  color: var(--font-color);
}

.feature-icon {
  color: var(--font-color);
}

.feature-desc {
  font-size: 24px;
  font-weight: bold;
  color: var(--font-color);
}

.feature-item {
  flex: 3;
  margin-left: 30px;
}

@media (max-width: 1024px) {
  .feature-list {
    flex-direction: column;
  }

  .feature-title {
    width: 100%;
  }

  .feature-item {
    margin-left: 0;
    margin-top: 20px;
  }
}
</style>
