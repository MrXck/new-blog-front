<template>
  <div class="container theme-light">
    <router-view/>
  </div>
</template>

<script setup>
import '@/assets/font/style.css'
import '@/styles/index.css'
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: "LXGW WenKai Screen" ,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;
  font-weight: normal;
}

.container {
  width: 90%;
  margin: 0 auto;
}
</style>
