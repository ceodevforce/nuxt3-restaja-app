<script setup>
const props = defineProps({
  trainer: Object
})
</script>
<template>
  <div>
      <div class="relative">
                        <div class="relative group">
                            <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img class="w-full" :src="props.trainer.trainerImage" alt="A girl Posing Image" />
                            <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                <button class="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                <button class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                            </div>
                        </div>
                        <p class="font-normal dark:text-white text-xl leading-5 text-gray-800 md:mt-6 mt-4">{{props.trainer.trainerName}}</p>
                        <p class="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4">{{props.trainer.speciality}}</p>
                    </div>
  </div>
</template>