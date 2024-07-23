import { defineStore } from 'pinia'

export const useDrawer = defineStore('drawer', {
  state: () => {
    return {
      open: false,
    }
  },
  actions: {
    changeOpen() {
      this.open = true
    },
    close() {
      this.open = false
    },
  },
})