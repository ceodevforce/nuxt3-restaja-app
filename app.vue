<script setup>
import { useStore } from './stores/user'
const { supabase } = useSupabase()

const user = supabase.auth.user()
// console.log(user)

const store = useStore()



// console.log(store)

store.$state = {
  user: user
}
</script>
<template>
  <div>
    <NuxtPage/>
  </div>
</template>
