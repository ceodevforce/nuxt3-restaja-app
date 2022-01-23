import { acceptHMRUpdate, defineStore } from "pinia";



export const useTrainers = defineStore("trainers", {
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      trainers: []
    };
  },

  // other options...
});