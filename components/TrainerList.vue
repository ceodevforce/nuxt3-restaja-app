<script setup>
const props = defineProps({
    trainer: Object
})

// console.log(props.trainer.trainerData)
</script>
<template>
  <div>

                <div class="w-full bg-gray-100 px-10 pt-10">
                    <div class="container mx-auto">
                        <div role="list" aria-label="Behind the scenes People " class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">

                            <TrainerItem v-for="trainer in props.trainer.trainerData" :key="trainer.id" :trainer="trainer"/>

                        </div>
                    </div>
                </div>
  </div>
</template>