<script setup>
import {Icon} from '@vicons/utils'
import {BonfireOutline} from "@vicons/ionicons5"
import Feature from "@/components/Feature.vue";

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
    <div class="feature-item">
      <Feature :vertical="true"/>
    </div>
    <div class="feature-item">
      <Feature :vertical="true"/>
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
  border: 2px black solid;
  border-radius: 8px;
  justify-items: center;
}

.feature-desc {
  font-size: 24px;
  font-weight: bold;
}

.feature-item {
  flex: 3;
  margin-left: 30px;
}

@media (max-width: 768px) {
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
