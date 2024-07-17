<script setup>
import {ref} from "vue";
import {Icon} from "@vicons/utils";
import {Search} from "@vicons/ionicons5";
import {to} from "@/utils/routerUtils";

const show = ref(false)
const isFirst = ref(true)
const keyword = ref('')

function showSearch() {
  show.value = true
  isFirst.value = false
  document.documentElement.style = 'overflow: hidden'
}

function closeSearch() {
  show.value = false
  document.documentElement.style = 'overflow: auto'
}

function toSearch() {
  to({name: 'article-search', query: {keyword: keyword.value}})
  closeSearch()
}

defineExpose({
  showSearch,
  closeSearch
})
</script>

<template>
  <div :class="[show ? 'show' : 'close', 'container', isFirst ? 'first' : '']">
    <div class="search-title">
      搜索文章
    </div>
    <div class="search-content">
      <input placeholder="Enter your text..." v-model="keyword" class="input" name="text" type="text">
      <div class="button" @click="toSearch">
        <Icon size="30">
          <Search></Search>
        </Icon>
      </div>
    </div>
  </div>
  <div class="mask" v-show="show" @click="closeSearch"></div>
</template>

<style scoped>
.container {
  width: 500px;
  background-color: var(--bg-color);
  z-index: 200;
  position: absolute;
  margin: 0;
  opacity: 0;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.first {
  opacity: 0 !important;
}

.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
}

.show {
  animation: showSearch .5s forwards;
}

.close {
  animation: closeSearch .5s forwards;
}

@keyframes showSearch {

  0% {
    transform: translate(calc(70vw - 50%), -150%) scale(0);
    opacity: 1;
  }

  100% {
    transform: translate(calc(45vw - 50%), 100px) scale(1);
    opacity: 1;
    margin: 0 auto;
  }
}

@keyframes closeSearch {
  0% {
    transform: translate(calc(45vw - 50%), 100px) scale(1);
    opacity: 1;
    margin: 0 auto;
  }

  100% {
    transform: translate(calc(70vw - 50%), -150%) scale(0);
    z-index: -1;
    display: none;
  }
}

.search-title {
  margin: 0 0 10px 0;
  font-size: 20px;
  color: var(--font-color);
}

.search-content {
  display: flex;
}

.input {
  background-color: #212121;
  flex: 8;
  height: 30px;
  padding: 10px;
  /* text-align: center; */
  border: 2px solid white;
  border-radius: 5px;
  font-size: 20px;
  color: var(--search-color);
  /* box-shadow: 3px 3px 2px rgb(249, 255, 85); */
}

.input:focus {
  color: rgb(0, 255, 255);
  background-color: #212121;
  outline-color: rgb(0, 255, 255);
  box-shadow: -3px -3px 15px rgb(0, 255, 255);
  transition: .1s;
  transition-property: box-shadow;
}

.button {
  background-color: var(--bg-color);
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--font-color);
}
</style>
