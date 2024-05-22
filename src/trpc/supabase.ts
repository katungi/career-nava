import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://thpgwzgxukugvbgtmbla.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRocGd3emd4dWt1Z3ZiZ3RtYmxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM0MjkyOTIsImV4cCI6MjAyOTAwNTI5Mn0._Yo6Pwe3J6mPUJ5Y-oKWAafj58eoHEBXjwJSpYc8enY";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)


export { supabase }