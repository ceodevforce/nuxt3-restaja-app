<script setup>
import { useStore } from './stores/user'

const store = useStore()
const router = useRouter()
const { supabase } = useSupabase()

const user = supabase.auth.user()
console.log({user})
store.$state = {
  user: user
}

function userCheck() {
  if (user) {
    router.push('/user')
  }
}
onMounted(() => {
  userCheck()
})

</script>
<template>
  <div>
    <NuxtPage/>
  </div>
</template>
