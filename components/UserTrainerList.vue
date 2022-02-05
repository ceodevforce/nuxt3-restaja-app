<script setup>
const props = defineProps({
  trainers: Object
})
console.log(props.trainers)
</script>
<template>
  <div>
    <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                  <UserTrainerItem v-for="trainer in props.trainers.trainerData" :trainer="trainer"/>
                </div>
  </div>
</template>