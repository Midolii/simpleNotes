<script setup lang="ts">
const display = ref(true);
const emits = defineEmits(["close"]);
const clickToClose = () => {
  display.value = false;
  emits("close");
};
</script>

<template>
  <Teleport to="#app">
    <FadeTransition>
      <div
        class="fixed top-0 right-0 bottom-0 left-0 z-10 bg-zinc-900 bg-opacity-40 flex items-center justify-center"
        v-if="display"
      >
        <FadeTransition>
          <div
            class="absolute top-0 right-0 bottom-0 left-0 z-10"
            @click="clickToClose"
          ></div>
        </FadeTransition>
        <div class="z-20">
          <slot></slot>
        </div>
      </div>
    </FadeTransition>
  </Teleport>
</template>

<style scoped></style>
