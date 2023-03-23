<script setup lang="ts">
import { navList } from "../../utils";

const isClickedLoginCard = ref(false); // 控制登陆卡片的渲染与否
const openLoginCard = () => {
  isClickedLoginCard.value = true;
};
const closeLoginCard = () => {
  setTimeout(() => {
    isClickedLoginCard.value = false;
  }, 200);
};
</script>

<template>
  <header
    class="h-14 shadow w-full flex items-center transform-gpu px-10 font-semibold text-sm"
  >
    <div class="routelist flex-1">
      <template v-for="(route, index) in navList" :key="route.name">
        <RouterLink
          class="router-link inline-block"
          :class="{
            'ml-8': index !== 0,
          }"
          v-if="!route.hide"
          :to="route.path"
        >
          {{ route.name }}
        </RouterLink>
      </template>
    </div>
    <div class="action h-full flex items-center">
      <button
        class="ml-4 px-4 py-2 border rounded-md text-white bg-blue-theme-main font-extrabold hover:border-transparent hover:bg-blue-theme-light hover:text-white duration-200"
        @click="openLoginCard"
      >
        登陆/注册
      </button>
    </div>
  </header>
  <div v-if="isClickedLoginCard">
    <LoginTeleport @close="closeLoginCard" />
  </div>
</template>

<style scoped>
.router-link {
  @apply text-zinc-400 h-full leading-10 relative;
  @apply hover:text-zinc-500 duration-200;
}
.router-link::after {
  content: "";
  @apply absolute bottom-0.5 w-0 left-1/2 bg-zinc-600 rounded-lg h-0.5 duration-300;
}
.router-link:hover::after {
  @apply absolute bottom-0.5 w-[90%] left-[5%] bg-zinc-600 rounded-lg h-0.5 duration-300;
}
.router-link.router-link-active.router-link-exact-active {
  @apply text-blue-500;
}
.router-link.router-link-active.router-link-exact-active::after {
  content: "";
  @apply absolute bottom-0.5 w-[80%] left-[10%] !bg-blue-500 rounded-lg h-0.5 duration-300;
}
</style>
