import { createClient } from "@supabase/supabase-js";

let cliente = null;

export function getSupabase() {
  if (cliente) {
    return cliente;
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SECRET_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl) {
    throw new Error(
      "SUPABASE_URL não foi configurada nas Environment Variables da Vercel."
    );
  }

  if (!supabaseKey) {
    throw new Error(
      "SUPABASE_SECRET_KEY (ou SUPABASE_SERVICE_ROLE_KEY) não foi configurada nas Environment Variables da Vercel."
    );
  }

  cliente = createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });

  return cliente;
}
