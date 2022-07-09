import { defineStore } from "pinia";

export const useStoreAdminAuthPembimbingSekolah = defineStore({
  id: "storeAdminAuthPembimbingSekolah",
  state: () => ({
    token: localStorage.getItem("tokenPembimbingSekolah")
      ? localStorage.getItem("tokenPembimbingSekolah")
      : "",
    isLogin: localStorage.getItem("isLoginPembimbingSekolah")
      ? localStorage.getItem("isLoginPembimbingSekolah")
      : false,
    me: {
      id: 0,
      name: "",
    },
  }),
  getters: {
    getToken: (state) => state.token,
    getIsLogin: (state) => state.isLogin,
    getMe: (state) => state.me,
  },
  actions: {
    setToken(token) {
      this.token = token;
    },
    setIsLogin(isLogin) {
      this.isLogin = isLogin;
    },
    setMe(me) {
      this.me = me;
    },
  },
});
