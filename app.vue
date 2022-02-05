<script setup>
import { useStore } from './stores/user'
import {useTrainers} from "./stores/trainers";



const { data } = await useAsyncData('trainer', () => $fetch('/api/trainer'))


const store = useStore()
const trainer = useTrainers()

const router = useRouter()
const { supabase } = useSupabase()

const user = supabase.auth.user()
console.log({user})

store.$state = {
  user: user
}

trainer.$state = {
  trainers: data,
}


</script>
<template>
  <div>

      <NuxtPage/>

  </div>
</template>
