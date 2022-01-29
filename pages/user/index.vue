<script setup>
import { useStore } from '../../stores/user'


const route = useRoute()


const store = useStore()



const loggedUser = store.user
console.log({loggedUser})
function enableCustomLayout() {
  if (!loggedUser) {
    route.meta.layout.value = 'default'
  }
  
  route.meta.layout.value = "custom-user"
}

onMounted(() => {
  enableCustomLayout()
})

definePageMeta({
  layout: ref(false)
})
</script>
<template>
    <div>
        <h1>User</h1>
    </div>
</template>