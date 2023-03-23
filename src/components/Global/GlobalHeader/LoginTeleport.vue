<script setup lang="ts">
import { ElMessage } from "element-plus";

type LoginCardType = "password" | "email";

const emits = defineEmits(["close"]);
const clickToClose = () => {
  emits("close");
};

const currentCard = ref<LoginCardType>("password");

const toggleCard = (type: LoginCardType) => {
  currentCard.value = type;
};
</script>

<template>
  <GlobalTeleport @close="clickToClose">
    <div class="login-container">
      <div class="login-card">
        <div class="login-toggle-button">
          <button
            :class="{
              'text-blue-theme-main': currentCard === 'password',
            }"
            @click="() => toggleCard('password')"
          >
            密码登录
          </button>
          <div class="hr" />
          <button
            :class="{
              'text-blue-theme-main': currentCard === 'email',
            }"
            @click="() => toggleCard('email')"
          >
            邮箱登陆
          </button>
        </div>
        <div class="login-input-block">
          <PasswordCard
            v-if="currentCard === 'password'"
            @registe="() => toggleCard('email')"
          />
          <EmailCard v-if="currentCard === 'email'" />
        </div>
        <div class="login-other">暂无其它登陆方式</div>
      </div>
    </div>
  </GlobalTeleport>
</template>

<style scoped>
.hr {
  @apply h-full w-px rounded bg-zinc-300 mx-6;
}
.login-container {
  @apply p-10 bg-white rounded-lg shadow flex items-center justify-center w-[40rem] h-full;
}
.login-card {
  @apply flex flex-col items-center w-[25rem];
}
.login-toggle-button {
  @apply flex font-medium text-lg items-center h-5 leading-5;
}
.login-input-block {
  @apply w-full;
}

.login-other {
  @apply mt-6 text-sm text-zinc-400;
}
</style>
