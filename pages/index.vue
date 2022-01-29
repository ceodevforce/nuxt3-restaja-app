<script setup>
//FIXME: Change between login and signup - user should go to dashboard after login

import { useTrainers } from '../stores/trainers'
import { useStore } from '../stores/user'

const { data } = await useAsyncData('trainer', () => $fetch('/api/trainer'))

const route = useRoute()

const trainer = useTrainers()
const store = useStore()

trainer.$state = {
  trainers: data,
}


const loggedUser = store.user





function enableCustomLayout() {
  if (!loggedUser) {
    route.meta.layout.value = 'default'
  } else {
      route.meta.layout.value = 'custom-user'
  }
}

function userCheck() {
  if (user) {
    router.push('/user')
  }
}

// watch(route, enableCustomLayout())

onMounted(() => {
  enableCustomLayout(),
  userCheck()
})

watch(route, () => {
  enableCustomLayout()
})

definePageMeta({
  title: 'RestaJa Gym',
  layout: ref(false),
})
</script>
<template>
  <div>
    <div class="h-screen">
      <div class="pt-32 lg:flex items-center relative z-10 container mx-auto">
        <div class="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
          <img
            tabindex="0"
            role="img"
            aria-label="people smiling"
            class="mx-auto rounded-lg border-2 shadow-lg drop-shadow"
            src="https://images.unsplash.com/photo-1610554843876-9be9b896b2d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="people smiling"
          />
        </div>
        <div role="contentinfo" class="w-full lg:w-1/2 h-full">
          <p tabindex="0" class="text-indigo-700 uppercase text-2xl mb-4">
            Rise above being mediocre
          </p>
          <h1 tabindex="0" class="text-indigo-700 text-4xl lg:text-6xl font-black mb-8">
            Get to Peak Fitness 
          </h1>
          <p tabindex="0" class="text-gray-800 font-regular mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur.
          </p>
          <div
            class="bg-white lg:mt-16 py-4 px-4 flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center shadow-lg rounded-lg"
          >
            <div class="sm:flex items-center py-2">
              <div class="flex items-center">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg4.svg"
                  alt="icon"
                />
                <input
                  aria-label="Trainer Name"
                  class="w-24 xl:w-32 leading-none tracking-normal text-gray-800 ml-2.5 placeholder-black"
                  placeholder="Trainer Name"
                />
              </div>
            </div>
            <button
              role="button"
              aria-label="search"
              class="focus:bg-indigo-700 focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2 text-white bg-indigo-600 hover:bg-indigo-700 mt-4 sm:mt-0 p-3 lg:-ml-8 rounded w-full sm:w-auto relative"
            >
              <img
                class="absolute right-0 mr-2 sm:mr-auto sm:relative icon icon-tabler icon-tabler-search cursor-pointer"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg7.svg"
                alt="search"
              />
              <input
                aria-label="search"
                class="sm:hidden border-b border-gray-300 w-full bg-transparent pr-6"
              />
            </button>
          </div>
        </div>
      </div>
    </div>

    <TrainerList :trainer="data" />
    <div
      class="p-6 container md:w-2/3 xl:w-auto mx-auto flex flex-col xl:items-stretch justify-between xl:flex-row"
    >
      <div
        class="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center"
      >
        <img
          src="https://cdn.tuk.dev/assets/components/26May-update/newsletter-1.png"
          alt="Envelope with a newsletter"
          role="img"
          class="h-full xl:w-full lg:w-1/2 w-full"
        />
      </div>
      <div class="w-full xl:w-1/2 xl:pl-40 xl:py-28">
        <h1
          class="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center xl:text-left md:mt-0 mt-4"
        >
          Subscribe
        </h1>
        <p class="text-base leading-normal text-gray-600 text-center xl:text-left">
          Whether article spirits new her covered hastily sitting her. Money witty books
          nor son add.
        </p>
        <div class="flex items-stretch mt-12">
          <input
            class="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500"
            type="email"
            placeholder="Your Email"
          />
          <button
            class="w-32 rounded-l-none hover:bg-indigo-600 bg-indigo-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
          >
            subscribe
          </button>
        </div>
      </div>
    </div>

    <div class="mx-auto container f-f-p px-4 xl:px-0 py-24">
      <h1
        class="focus:outline-none text-center text-3xl lg:text-4xl font-extrabold lg:leading-9 tracking-wider text-gray-900"
      >
        How it works?
      </h1>
      <div class="md:mt-24 f-f-p">
        <div class="hidden md:flex justify-center w-full">
          <div
            class="flex flex-col items-center md:items-end md:pr-12 md:border-r-4 border-gray-300 relative md:w-1/2"
          >
            <div aria-label="sign up" role="img">
              <img
                class="focus:outline-none mt-10"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg1.svg"
                alt="how it work"
              />
            </div>
            <div aria-label="2" role="img">
              <img
                class="focus:outline-none mt-24"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg"
                alt=""
              />
            </div>
            <div class="flex mt-12 flex-col items-center lg:items-end md:w-8/12">
              <h1 class="focus:outline-none text-xl font-bold leading-5">
                Create a Wallet
              </h1>
              <h2
                class="focus:outline-none text-gray-500 mt-3 pl-3 text-center md:text-right text-base leading-6 tracking-wide"
              >
                Create a wallet by linking a payment method that you’re comfortable with.
                Paypal, Visa and more
              </h2>
            </div>
            <div aria-label="transactions" role="img">
              <img
                class="focus:outline-none mt-24"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg3.svg"
                alt=""
              />
            </div>
            <img
              class="hidden md:block absolute right-0 top-0 -mt-2 -mr-1"
              src="https://cdn.tuk.dev/assets/components/111220/Fs7/line.png"
              alt=""
            />
          </div>

          <div
            class="flex flex-col items-center md:items-start md:pl-12 lg:border-gray-400 mt-20 md:mt-0 md:w-1/2"
          >
            <div aria-label="1" role="img">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg"
                alt=""
              />
            </div>

            <div class="flex mt-6 flex-col items-center md:items-start md:w-8/12">
              <h1 class="focus:outline-none text-xl font-bold leading-5">
                SignUp for an Account
              </h1>
              <h2
                class="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide"
              >
                Sign up on our website and opt for a program that suits you the best .
              </h2>
            </div>
            <div aria-label="wallet" role="img">
              <img
                class="focus:outline-none mt-32"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg5.svg"
                alt=""
              />
            </div>
            <div aria-label="3" role="img">
              <img
                class="focus:outline-none mt-20"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg"
                alt=""
              />
            </div>
            <div class="flex mt-6 flex-col items-center md:items-start md:w-8/12">
              <h1 class="focus:outline-none text-xl font-bold leading-5">
                Start your Transactions
              </h1>
              <h2
                class="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide"
              >
                Start transactions right away. No more complicated process for anything
                else.
              </h2>
            </div>
          </div>
        </div>
        <div class="md:hidden flex flex-col items-center w-full">
          <img
            class="focus:outline-none my-10"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg1.svg"
            alt="how it work"
          />
          <img
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg"
            alt=""
          />
          <div class="mt-10">
            <h1 class="text-xl text-center tracking-wide leading-5 font-bold">
              SignUp for an Account
            </h1>
            <h2 class="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">
              Sign up on our website and opt for a program that suits you the best .
            </h2>
          </div>
          <img
            class="focus:outline-none my-10"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg5.svg"
            alt=""
          />
          <img
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg"
            alt=""
          />
          <div class="mt-10">
            <h1 class="text-xl tracking-wide text-center leading-5 font-bold">
              Create a Wallet
            </h1>
            <h2
              class="text-gray-500 mt-3 pl-3 text-center text-base leading-6 tracking-wide"
            >
              Create a wallet by linking a payment method that you’re comfortable with.
              Paypal, Visa and more
            </h2>
          </div>
          <img
            class="focus:outline-none my-10"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg3.svg"
            alt=""
          />
          <img
            class=""
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg"
            alt=""
          />
          <div class="flex mt-10 flex-col items-center md:items-start md:w-8/12">
            <h1 class="text-xl text-center tracking-wide leading-5 font-bold">
              Start your Transactions
            </h1>
            <h2 class="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">
              Start transactions right away. No more complicated process for anything
              else.
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .heroWorks{
    background: #fff url(https://images.unsplash.com/photo-1610554843876-9be9b896b2d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60); 
    background-position: center; 
    background-size: cover; 
    background-repeat: no-repeat;

  }
</style>
