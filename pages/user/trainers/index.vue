<script setup>
import { useStore } from '../../../stores/user'
import { useTrainers } from "../../../stores/trainers";

const route = useRoute()


const store = useStore()
const trainerList = useTrainers()
const trainerA = trainerList.trainers

console.log(trainerList.trainers)

const loggedUser = store.user


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


        <div class="2xl:container 2xl:mx-auto">
            <div class="bg-gray-50 dark:bg-gray-900 text-center lg:py-10 md:py-8 py-6">
                <p class="w-10/12 mx-auto md:w-full font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 dark:text-white leading-9 text-center text-gray-800">Trainer Collection</p>
            </div>
            <div class="py-6 lg:px-20 md:px-6 px-4">
                <p class="font-normal text-sm leading-3 text-gray-600 dark:text-gray-300">Trainers</p>
                <hr class="w-full bg-gray-200 my-6" />

                <div class="flex justify-between items-center">
                    <div class="flex space-x-3 justify-center items-center text-gray-800 dark:text-white">
                      <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-5-svg1.svg" alt="toggler">
                      <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-5-svg1dark.svg

" alt="toggler">
                        <p class="font-normal text-base leading-4 text-gray-800 dark:text-white">Filter</p>
                    </div>
                    <p class="cursor-pointer hover:underline duration-100 font-normal text-base leading-4 text-gray-600 dark:text-gray-300">Showing 18 products</p>
                </div>

                <UserTrainerList :trainers="trainerList.trainers"/>

                <div class="flex justify-center items-center">
                    <button class="hover:bg-gray-700 disable dark:text-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">Load More</button>
                </div>
            </div>
        </div>

    </div>
</template>