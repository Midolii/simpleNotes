<script setup lang="ts">
const emits = defineEmits(["close"]);
const clickToClose = () => {
  emits("close");
};
</script>

<template>
  <GlobalTeleport @close="clickToClose">
    <div class="p-4 bg-white rounded-md shadow">LoginBox</div>
  </GlobalTeleport>
</template>

<style scoped></style>
