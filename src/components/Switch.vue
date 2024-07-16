<script setup>

function check(e) {
  const container = document.getElementById('container');
  if (e.target.checked) {
    container.classList.remove('theme-light')
    container.classList.add('theme-dark')
  } else {
    container.classList.remove('theme-dark')
    container.classList.add('theme-light')
  }
}

</script>

<template>
  <input class="checkbox" @click="check" type="checkbox">
</template>

<style scoped>
.checkbox {
  --total-width: 80px;
  --total-height: 40px;
  --margin: 4px;
  --height: calc(var(--total-height) - var(--margin) * 2);
  --width: calc(var(--total-width) / 2 - var(--margin) * 2);
  --active-width: calc(var(--width) * 1.5);
}

.checkbox {
  appearance: none;
  -webkit-appearance: none;
  width: var(--total-width);
  background-color: #bebebe;
  z-index: 100;
  height: var(--total-height);
  position: relative;
  border-radius: calc(var(--total-width) / 2);
  transition: all 0.3s ease-in-out;
}

.checkbox:before {
  content: "";
  height: var(--height);
  width: var(--width);
  position: absolute;
  margin: var(--margin);
  transform: translate(0, 0);
  background-color: white;
  border-radius: calc(var(--width) / 2);
  transition: all 0.3s ease-in-out;
}

.checkbox:active:before {
  width: var(--active-width);
}

.checkbox:checked:active:before {
  width: var(--active-width);
  transform: translate(calc(var(--total-width) - calc(var(--active-width) + calc(var(--margin) * 2))), 0);
}

.checkbox:checked {
  background-color: green;
}

.checkbox:checked:before {
  content: "";
  height: var(--height);
  width: var(--width);
  margin: var(--margin);
  transform: translate(calc(var(--total-width) - calc(var(--total-width) - calc(var(--width) + calc(var(--margin) * 2)))), 0);
  background-color: white;
  transition: all 0.3s ease-in-out;
}
</style>
