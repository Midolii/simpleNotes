<script setup lang="ts"></script>

<template>
  <GlobalHeader />
  <main>
    <RouterView v-slot="{ Component }">
      <FadeTransition>
        <component :is="Component" />
      </FadeTransition>
    </RouterView>
  </main>
</template>

<style scoped></style>
