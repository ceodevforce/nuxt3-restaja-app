<script setup>
const props = defineProps({
    trainer: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div role="listitem" class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div class="rounded overflow-hidden shadow-md bg-white">
                                    <div class="absolute -mt-20 w-full flex justify-center">
                                        <div class="h-32 w-32">
                                            <img :src="props.trainer.trainerImage" alt="Display Picture of Johnson Stone" role="img" class="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div class="px-6 mt-16">
                                        <h1 class="font-bold text-3xl text-center mb-1">{{props.trainer.trainerName}}</h1>
                                        <p class="text-gray-800 text-sm text-center">Manager Development</p>
                                        <p class="text-center text-gray-600 text-base pt-3 font-normal">{{ props.trainer.description }}</p>
                                        <div class="w-full flex justify-center pt-5 pb-5">
                                            <a href="javascript:void(0)" class="mx-5">
                                                <div aria-label="Github" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" class="mx-5">
                                                <div aria-label="Twitter" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" class="mx-5">
                                                <div aria-label="Instagram" role="img">
                                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
</template>