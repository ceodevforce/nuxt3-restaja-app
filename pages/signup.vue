<script setup>
import { ref } from 'vue'

const { handleLogin } = useLogin()
const email = ref('')
const password = ref('')

// handleLogin(email.value, password.value)

const handleSubmit = () => {
  handleLogin(email.value, password.value)
}

</script>
<template>
  <div
    class="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container"
  >
    <div class="flex flex-col justify-start items-start w-full space-y-9">
      <div class="flex justify-start flex-col items-start space-y-2">
        <button
          class="flex flex-row items-center text-gray-600 dark:text-white hover:text-gray-500 space-x-1"
        >
          <svg
            class="fill-stroke"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.91681 7H11.0835"
              stroke="currentColor"
              stroke-width="0.666667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.91681 7L5.25014 9.33333"
              stroke="currentColor"
              stroke-width="0.666667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.91681 7.00002L5.25014 4.66669"
              stroke="currentColor"
              stroke-width="0.666667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <NuxtLink to="/" class="text-sm leading-none">Back</NuxtLink>
        </button>
      </div>

      <form @submit.prevent="handleSubmit">
      <div
        class="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full"
      >
        <div
          class="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-900 dark:bg-gray-800 py-7 sm:py-0 xl:py-10 px-10 xl:w-full"
        >
          <div class="flex flex-col justify-start items-start w-full space-y-4">
            <p class="text-xl md:text-2xl leading-normal text-gray-800 dark:text-gray-50">
              Restaja
            </p>
          </div>
          <div class="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
            <img
              src="https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80"
              alt="headphones"
            />
          </div>
        </div>

        <div class="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">
          <button
            type="submit"
            class="border border-transparent hover:border-gray-300 bg-gray-900 dark:bg-white dark:hover:bg-gray-900 dark:hover:border-gray-900 dark:text-gray-900 dark:hover:text-white hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full"
          >
            
            <div>
              <p class="text-base leading-4">Signup</p>
            </div>
          </button>

          

          <div class="mt-8">
            <input
              class="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
              type="email"
              v-model="email"
              placeholder="Email"
            />
          </div>

          <label class="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50"
            >Password</label
          >
          <div class="mt-2 flex-col">
            <div>
              <input
                class="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                type="password"
                v-model="password"
                placeholder="Enter your password"
              />
            </div>
            
          </div>
        </div>
      </div>
      </form>
    </div>
  </div>
</template>
