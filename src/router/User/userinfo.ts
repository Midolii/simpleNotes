import { defineStore } from "pinia";

const setup = () => {
  const userid = ref<string>("");
  const username = ref<string>("");
  return {
    userid,
    username,
  };
};

const options = {
  persist: true,
};

export const Userinfo = defineStore("userinfo", setup, options);
