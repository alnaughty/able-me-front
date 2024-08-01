import { defineStore } from 'pinia'

export const useDrawer = defineStore('drawer', {
  state: () => {
    return {
      open: false,
      modal: false,
      fmodal: false
    }
  },
  actions: {
    changeOpen() {
      this.open = true
    },
    close() {
      this.open = false
    },
    modalOpen() {
      this.modal = true
    },
    modalClose() {
      this.modal = false
    },
    fModalOpen() {
      this.fmodal = true
    },
    fModalClose() {
      this.fmodal = false
    },
  },
})