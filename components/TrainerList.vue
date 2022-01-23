<script setup>
const props = defineProps({
    trainer: Object
})

// console.log(props.trainer.trainerData)
</script>
<template>
    <div class="container flex justify-center mx-auto pt-16">
                    <div>
                        <p class="text-gray-500 text-lg text-center font-normal pb-3">BUILDING TEAM of Trainers</p>
                        <h1 class="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the RestaJa Gym</h1>
                    </div>
                </div>
                <div class="w-full bg-gray-100 px-10 pt-10">
                    <div class="container mx-auto">
                        <div role="list" aria-label="Behind the scenes People " class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">

                            <TrainerItem v-for="trainer in props.trainer.trainerData" :key="trainer.id" :trainer="trainer"/>

                        </div>
                    </div>
                </div>
</template>