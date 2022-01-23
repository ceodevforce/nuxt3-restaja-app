import { acceptHMRUpdate, defineStore } from "pinia";

// // const { supabase } = useSupabase();
// const user = supabase.auth.user()

export const useStore = defineStore("main", {
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      user: {}
    };
  },

  // other options...
});