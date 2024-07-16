<script setup>
import {ref} from "vue";

const show = ref(false)
const isFirst = ref(true)

function showSearch() {
  show.value = true
  isFirst.value = false
  document.documentElement.style = 'overflow: hidden'
}

function closeSearch() {
  show.value = false
  document.documentElement.style = 'overflow: auto'
}

defineExpose({
  showSearch,
  closeSearch
})
</script>

<template>
  <div :class="[show ? 'show' : 'close', 'container', isFirst ? 'first' : '']"></div>
  <div class="mask" v-show="show" @click="closeSearch"></div>
</template>

<style scoped>
.container {
  width: 500px;
  height: 400px;
  background-color: white;
  z-index: 200;
  position: absolute;
  margin: 0;
  opacity: 0;
}

.first {
  opacity: 0!important;
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
    transform: translate(calc(70vw - 50%), -150%);
    opacity: 1;
  }

  100% {
    transform: translate(calc(45vw - 50%), 100px);
    opacity: 1;
    margin: 0 auto;
  }
}

@keyframes closeSearch {
  0% {
    transform: translate(calc(45vw - 50%), 100px);
    opacity: 1;
    margin: 0 auto;
  }

  100% {
    transform: translate(calc(70vw - 50%), -150%);
    z-index: -1;
    display: none;
  }
}
</style>
