<template>
  <div class="w-full h-full bg-gray-200">
    <div class="flex flex-no-wrap">
      <Sidebar />
      <div class="w-full">
        <HeaderNav />
        <div class="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
          <!-- Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border -->
          <div class="w-full h-full rounded bg-white">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
