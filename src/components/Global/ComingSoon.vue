<script setup lang="ts">
const delayAnimation = ref(false);
setTimeout(() => {
  delayAnimation.value = true;
}, 200);
</script>

<template>
  <div class="flex flex-col items-center">
    <div
      class="w-full flex flex-col items-center justify-center h-[calc(100vh-56px)] relative"
    >
      <p
        class="text-zinc-800 text-5xl sm:text-6xl font-black text-center leading-normal"
        :class="{
          'zinc-800': delayAnimation,
        }"
      >
        SimpleNotes
      </p>
      <p
        class="text-zinc-400 text-xl font-bold text-center leading-normal mt-6"
      >
        Developing, coming soon
      </p>
      <button
        class="mt-8 w-16 h-16 cursor-pointer relative hover:translate-y-1 duration-300"
      >
        <icon-mdi-menu-down class="w-full h-full" />
      </button>
    </div>
  </div>
</template>

<style scoped>
p {
  @apply relative cursor-pointer select-none;
}
p::after {
  content: "";
  @apply absolute -bottom-3 left-1/2 w-0 h-1 rounded bg-zinc-400 duration-500;
}

.zinc-800::after {
  content: "";
  @apply absolute -bottom-3 left-[-1.5%] w-[103%] h-0.5 rounded;
}
</style>
