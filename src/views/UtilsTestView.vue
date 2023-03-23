<script setup lang="ts">
import { onBeforeRouteLeave } from "vue-router";
import { dateFormater } from "../utils";

const currentTime = ref<string>(dateFormater());

const timer = setInterval(() => {
  currentTime.value = dateFormater();
}, 1000);

onBeforeRouteLeave(() => {
  clearInterval(timer);
});
</script>

<template>
  <div class="flex flex-col items-center w-full p-4">
    <ul>
      <li>
        <p class="border-b font-bold text-base">Function - dateFormater</p>
        <div class="mt-2 text-sm">
          <span>当前日期为：</span>
          <span>{{ currentTime }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul li {
  @apply flex flex-col items-center;
}
</style>
