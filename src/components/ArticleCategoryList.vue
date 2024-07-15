<script setup>
import {getAll} from "@/api/categoryApi";
import {onMounted, reactive, ref} from "vue";
import {Icon} from '@vicons/utils'
import {ChevronDown, ChevronUpSharp} from "@vicons/ionicons5"

const emits = defineEmits(['changeCategory'])
const {current} = defineProps({
  current: {
    type: String,
    required: true
  }
})
const categoryList = reactive([])
const showAll = ref(false)

function init() {
  getAll().then(res => {
    categoryList.length = 0
    categoryList.push(...res.data.list)
  })
}

function changeCategory(id) {
  emits('changeCategory', id)
}

onMounted(() => {
  init()
})
</script>

<template>
  <div class="category-list" :style="showAll ? 'height: auto!important' : ''">
    <div class="category-items">
      <div :class="[
          'category-item',
          current === null ? 'active' : ''
      ]" @click="changeCategory(null)">全部
      </div>
      <div :class="[
          'category-item',
          current === item.id ? 'active' : ''
      ]" v-for="item in categoryList" @click="changeCategory(item.id)">{{ item.name }}
      </div>
    </div>
    <div class="category-icon">
      <div v-show="showAll" @click="showAll = false">
        <Icon size="20">
          <ChevronDown></ChevronDown>
        </Icon>
      </div>
      <div v-show="!showAll" @click="showAll = true">
        <Icon size="20">
          <ChevronUpSharp></ChevronUpSharp>
        </Icon>
      </div>

    </div>
  </div>
</template>

<style scoped>
.category-list {
  display: flex;
  background-color: #292929;
  padding: 10px 20px;
  border-radius: 8px;
  color: var(--font-color);
  gap: 10px;
  height: 34px;
  overflow: hidden;
  justify-content: space-between;
}

.category-item {
  background-color: var(--bg-color);
  padding: 6px;
  cursor: pointer;
  border-radius: 4px;
}

.category-items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.category-icon {
  padding: 6px;
}

.active {
  background-color: var(--active-tab-color);
}
</style>
