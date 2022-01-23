
import { useNuxtApp } from '#app'
import { createClient } from '@supabase/supabase-js'

export default function () {
    const {payload, $config} = useNuxtApp()
    // console.log($config )

    const supabase = createClient($config.supabaseURL, $config.supabaseKEY)

    return {
        supabase
    }  
}