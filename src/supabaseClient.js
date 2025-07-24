// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://xsinfduseubbvidqnxhi.supabase.co"
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzaW5mZHVzZXViYnZpZHFueGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMzk2NjQsImV4cCI6MjA2ODkxNTY2NH0.COg50AVjmbeAePo-2ZW3lZE-g-VHvPJh0rlvwreLvxs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
