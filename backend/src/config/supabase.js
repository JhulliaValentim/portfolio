import { createClient } from "@supabase/supabase-js";

let supabaseClient = null;

export function getSupabase() {
  const supabaseUrl = process.env.SUPABASE_URL;

  const supabaseKey =
    process.env.SUPABASE_SECRET_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl) {
    throw new Error(
      "SUPABASE_URL não foi configurada nas variáveis de ambiente."
    );
  }

  if (!supabaseKey) {
    throw new Error(
      "SUPABASE_SECRET_KEY ou SUPABASE_SERVICE_ROLE_KEY não foi configurada."
    );
  }

  if (!supabaseClient) {
    supabaseClient = createClient(
      supabaseUrl,
      supabaseKey,
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false
        }
      }
    );
  }

  return supabaseClient;
}