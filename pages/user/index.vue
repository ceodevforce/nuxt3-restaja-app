<script setup>
//TODO: Add subscribe using Pinia to persist the trainer data

// import useSupabase from "../../composables/useSupabase";
const { supabase } = useSupabase()

const { data } = await useAsyncData('trainer', () => $fetch('/api/trainer'))

import { useStore } from '../../stores/user'
import { useTrainers } from '../../stores/trainers';

const loading = ref(false)
const metricStats = ref([])
const errorMessage = ref('')
const route = useRoute()
const weight = ref('')
const runningStats = ref('')
const waterCounts = ref('')

const store = useStore()
const trainer = useTrainers()


// console.log('UserDash',trainer)
// console.log({data})


const loggedUser = store.user

function enableCustomLayout() {
  if (!loggedUser) {
    route.meta.layout.value = 'default'
  }
  
  route.meta.layout.value = "custom-user"
}

const fetchGymMetrics = async () => {
  try {
    loading.value = true
    const { data, error } = await supabase.from('gym_metrics').select('*')
    if (error) {
      console.error({error})
      errorMessage.value = error
    }
    console.log(data)
    metricStats.value = data

  } catch (e) {
    console.log(e)
  }
}

const handleSubmit = async() => {
  try {
    loading.value = true
     const { data, error } = await supabase.from('gym_metrics').insert([
    {
      weight: weight.value,
      runningStats: runningStats.value,
      waterCounts: waterCounts.value
    }
  ])
    if (error) {
      errorMessage.value = error
    }
    console.log('Inserted Data: ', data)
    //TODO: Update Pinia State
    loading.value = false
    weight.value = ''
    runningStats.value = ''
    waterCounts.value = ''

  } catch (e) {
    console.log(e)
  }

}

//TODO: Figure out how to update using same column
// Update matching rows
const handleUpdate = async () => {
  try {
    loading.value = true
    const { data, error } = await supabase
      .from('gym_metrics')
      .update({ other_column: 'otherValue' })
      // .eq('some_column', 'someValue')
      }
  catch (e) {
        console.log(e)
  }
}

onMounted(() => {
  enableCustomLayout()
  fetchGymMetrics()
})

definePageMeta({
  layout: ref(false)
})

</script>
<template>
    <div>
        <h1>User Dashboard</h1>
        <TrainerList :trainer="data"/>
      <section class="mb-10">
        <div class="container">
          <div>
            <h1>Metrics</h1>
            <div v-for="stats in metricStats" :key="stats.id">
              <p>Weight: {{stats.weight}}</p>
              <p>Running: {{stats.runningStats}}</p>
            </div>
          </div>
          <div>
            <h1>Stats</h1>
            <form @submit.prevent="handleSubmit" >
            <div class="items-center mt-4">
              <div class="md:64">
                <label class="text-sm leading-none">
                  weight
                </label>
                <input v-model="weight" class="w-full p-3 mt-3 bh-gray-300 border rounded border-gray-200" type="text" name="weight" placeholder="Weight"/>
              </div>
              <div class="md:64">
                <label class="text-sm leading-none">
                  Running Stats
                </label>
                <input v-model="runningStats" class="w-full p-3 mt-3 bh-gray-300 border rounded border-gray-200" type="text" name="runningStats" placeholder="Running Stats"/>
              </div>
              <div class="md:64">
                <label class="text-sm leading-none">
                  Water Counts
                </label>
                <input v-model="waterCounts" class="w-full p-3 mt-3 bh-gray-300 border rounded border-gray-200" type="text" name="weight" placeholder="Water Counts"/>
              </div>
              <button type="submit">Update</button>
            </div>
            </form>
          </div>
        </div>
      </section>
    </div>
</template>