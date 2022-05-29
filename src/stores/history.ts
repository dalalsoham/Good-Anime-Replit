import { defineStore } from "pinia";

export const useHistory = defineStore("history", {
  state: () => ({
    history: [0],
  }),
  actions: {
    addToHistory(id: number) {
      this.history.push(id);
    },
    checkHistory(id: number) {
      return this.history.includes(id);
    },
  },
});
