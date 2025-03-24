
import { createClient } from '@supabase/supabase-js';

// Default to empty strings, but show a console warning if they're missing
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if environment variables are set
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Supabase environment variables are missing. Please connect your project to Supabase through the Supabase menu in the top right corner of Lovable.'
  );
}

// Use default empty URLs for development so the app doesn't crash immediately,
// but it won't work properly until real values are provided
export const supabase = createClient(
  supabaseUrl || 'https://placeholder-url.supabase.co', 
  supabaseAnonKey || 'placeholder-key'
);
