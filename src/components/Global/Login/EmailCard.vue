<script setup lang="ts">
import axios from "axios";
import { ElMessage } from "element-plus";

const emailCard = ref({
  emailAddress: "",
  emailValiCode: "",
  inviteCode: "",
});

const waitingTime = 5;
const leftSeconds = ref(waitingTime);

const isAvalibleToSendValiCode = computed(() => {
  if (leftSeconds.value < waitingTime) {
    return false;
  }
  return true;
});

const resetLeftSeconds = (timer: NodeJS.Timer) => {
  clearInterval(timer);
  leftSeconds.value = waitingTime;
};

const sendValiCode = async () => {
  leftSeconds.value--;
  let timer = setInterval(() => {
    if (leftSeconds.value <= 1) {
      resetLeftSeconds(timer);
    } else {
      leftSeconds.value--;
    }
  }, 1000);
  try {
    await axios.get("./");
  } catch (e) {
    ElMessage.error("网络错误");
    if (timer) {
      setTimeout(() => {
        resetLeftSeconds(timer);
      }, 1000);
    }
  }
};
</script>

<template>
  <div class="flex flex-col text-sm">
    <div class="flex flex-col mt-6 border rounded-lg w-full h-full">
      <div class="input-block">
        <label for="email_email">邮箱</label>
        <input
          id="email_email"
          type="text"
          placeholder="请输入邮箱"
          v-model="emailCard.emailAddress"
        />
        <div class="w-px bg-zinc-300 h-5 mx-2" />
        <div class="w-28 flex-shrink-0 flex justify-center">
          <button
            :class="{
              'duration-200': true,
              'text-zinc-400 cursor-not-allowed':
                !emailCard.emailAddress || !isAvalibleToSendValiCode,
              'text-blue-theme-main':
                emailCard.emailAddress && isAvalibleToSendValiCode,
            }"
            @click="sendValiCode"
            :disabled="!emailCard.emailAddress"
          >
            {{ isAvalibleToSendValiCode ? "获取验证码" : leftSeconds }}
          </button>
        </div>
      </div>
      <div class="hr" />
      <div class="input-block">
        <label for="email_validata">验证码</label>
        <input
          id="email_validata"
          type="text"
          placeholder="请输入验证码"
          v-model="emailCard.emailValiCode"
        />
      </div>
      <!-- <div class="hr" />
      <div class="input-block">
        <label for="email_invitecode">邀请码</label>
        <input
          id="email_invitecode"
          type="text"
          placeholder="请输入邀请码"
          v-model="emailCard.emailValiCode"
        />
      </div> -->
    </div>
    <div class="btn-list">
      <button>登陆/注册</button>
    </div>
  </div>
</template>

<style scoped>
.hr {
  @apply w-full h-px bg-zinc-300 flex-shrink-0;
}
.input-block {
  @apply flex w-full px-5 py-3;
}

.input-block label {
  @apply w-12 text-center flex-shrink-0;
}

.input-block input {
  @apply ml-5 flex-1 outline-none min-w-[10rem];
}
.btn-list {
  @apply mt-5 w-full flex justify-center;
}

.btn-list button {
  @apply rounded-lg border border-blue-theme-light py-[10px] bg-blue-theme-light text-white w-48;
}
</style>
