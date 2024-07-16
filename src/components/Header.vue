<script setup>
import {Search} from "@vicons/ionicons5"
import {Icon} from '@vicons/utils'
import {to} from '@/utils/routerUtils'
import SearchDialog from "@/components/SearchDialog.vue";
import Switch from "@/components/Switch.vue";
import {ref} from "vue";

const search = ref()

function show() {
  search.value.showSearch()
}

</script>

<template>
  <div class="header">
    <div class="header-left">
      <div class="header-logo" @click="to({name: 'index'})">
        <div>XCK</div>
        <div style="font-size: 16px">desc</div>
      </div>
      <div class="header-item header-button" @click="to({name: 'index'})">首页</div>
      <!--      <div class="header-item header-button">说说</div>-->
      <!--      <div class="header-item header-button">关于</div>-->
      <div class="header-item header-button" @click="to({name: 'archive'})">归档</div>
      <div class="header-item header-button" @click="to({name: 'tags'})">标签</div>
      <!--      <div class="header-item header-button">留言</div>-->
      <!--      <div class="header-item header-button">友链</div>-->
      <div class="header-item header-button" @click="to({name: 'photo'})">相册</div>
    </div>
    <div class="header-right">
      <div class="header-item" @click="show">
        <Icon size="30">
          <Search></Search>
        </Icon>
      </div>
      <div class="header-item">登录</div>
      <Switch/>
    </div>
    <SearchDialog ref="search"/>
  </div>
</template>

<style scoped>
.header {
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
}

.header-logo {
  cursor: pointer;
  font-size: 30px;
  font-weight: bold;
}

.header-left {
  display: flex;
  align-items: center;
}

.header-right {
  display: flex;
  align-items: center;
}

.header-item {
  cursor: pointer;
  margin-left: 10px;
  padding: 6px;
  border-radius: 8px;
}

.header-button {

}

.header-button:hover {
  background-color: #a4a4a4;
}
</style>
