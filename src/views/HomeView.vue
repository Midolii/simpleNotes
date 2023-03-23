<script setup lang="ts">
const isDeveloped = ref(true);
</script>

<template>
  <ComingSoon v-if="isDeveloped" />
</template>

<style scoped></style>
