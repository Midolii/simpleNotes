<script setup lang="ts">
import { ElMessage } from "element-plus";

const emits = defineEmits(["registe"]);

const passwordCard = ref({
  account: "",
  password: "",
  valicode: "",
});

const clickToRegiste = () => {
  ElMessage.info("输入邮箱进行注册");
  emits("registe");
};

const clickToLogin = () => {
  ElMessage.success("登陆成功");
};

const isAllowLogin = computed(() => {
  return passwordCard.value.account && passwordCard.value.password;
});

const passwordInputType = ref<"password" | "text">("password");
const togglePasswordInputType = () => {
  passwordInputType.value =
    passwordInputType.value === "password" ? "text" : "password";
};
const forgetPassword = () => {
  ElMessage.info("忘记密码");
};
</script>

<template>
  <div class="flex flex-col text-sm">
    <div class="flex flex-col mt-6 border rounded-lg w-full h-full">
      <div class="input-block">
        <label for="password_account">账号</label>
        <input
          id="password_account"
          type="text"
          placeholder="请输入账号/邮箱"
          v-model="passwordCard.account"
        />
      </div>
      <div class="hr" />
      <div class="input-block">
        <label for="password_password">密码</label>
        <input
          id="password_password"
          :type="passwordInputType"
          placeholder="请输入密码"
          v-model="passwordCard.password"
        />
        <div class="px-4 flex-shrink-0 flex justify-center">
          <button class="mr-4 w-5 h-5" @click="togglePasswordInputType">
            <icon-mdi-eye-off
              v-if="passwordInputType === 'password'"
              class="w-full h-full"
            />
            <icon-mdi-eye
              v-if="passwordInputType === 'text'"
              class="w-full h-full"
            />
          </button>
          <button class="text-blue-theme-main" @click="forgetPassword">
            忘记密码?
          </button>
        </div>
      </div>
    </div>
    <div class="btn-list">
      <button @click="clickToRegiste">注册</button>
      <button
        :class="{
          'opacity-100 bg-blue-theme-main': isAllowLogin,
          'opacity-50 cursor-not-allowed bg-blue-theme-light ': !isAllowLogin,
        }"
        :disabled="!isAllowLogin"
        @click="clickToLogin"
      >
        登陆
      </button>
    </div>
  </div>
</template>

<style scoped>
.hr {
  @apply w-full h-px bg-zinc-300;
}
.input-block {
  @apply flex w-full px-5 py-3;
}

.input-block label {
  @apply w-12 text-center flex-shrink-0;
}

.input-block input {
  @apply ml-5 flex-1 outline-none;
}

.btn-list {
  @apply mt-5 flex;
}

.btn-list button {
  @apply flex-1 rounded-lg py-[10px] text-white;
}

.btn-list button:not(:last-child) {
  @apply mr-6 border bg-white text-zinc-800;
}
</style>
