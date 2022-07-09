import { defineStore } from 'pinia'

export const useStoreAdminPembimbingSekolah = defineStore({
  id: 'storeAdmin',
  state: () => ({
    pagesActive: 'dashboard',
  }),
  getters: {
    getPagesActive: (state) => state.pagesActive
  },
  actions: {
    setPagesActive(pagesActive: string): void {
      this.pagesActive = pagesActive;
    },
  }
})
