import { ref } from 'vue'
import { useRouter } from '#imports'


export const useLogin = () => {
  const loading = ref(false)
  const errorMessage = ref('')
  const { supabase } = useSupabase()
    
    const router = useRouter()

  const handleLogin = async (email, password) => {
    try {
      loading.value = true
        const { data, error } = await supabase.auth.signUp({
            email,
          password  
        })
        if (error) throw error
        console.log(data)
        loading.value = false
        router.push("/")
    } catch (error) {
        console.log(error)
        errorMessage.value = error
    }
  }

    return {
        loading,
        errorMessage,
        handleLogin
  }
}
