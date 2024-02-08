import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://qxqzoymblwtzwfitoubv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4cXpveW1ibHd0endmaXRvdWJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExODU3NzAsImV4cCI6MjAxNjc2MTc3MH0.t8Q-rWXVkgSv-OZy99onbQ7cM7kCvbS-LJd-DY4phRc",
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);
