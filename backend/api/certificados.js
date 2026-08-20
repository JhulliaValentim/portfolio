import {
  configurarCors,
  responderOptions,
  validarMetodoGet
} from "../lib/cors.js";
import { getSupabase } from "../lib/supabase.js";

export default async function handler(req, res) {
  configurarCors(res);

  if (responderOptions(req, res)) {
    return;
  }

  if (!validarMetodoGet(req, res)) {
    return;
  }

  try {
    const supabase = getSupabase();

    const { data, error } = await supabase
      .from("certificados")
      .select("*")
      .eq("ativo", true)
      .order("ordem", { ascending: true })
      .order("data_conclusao", {
        ascending: false,
        nullsFirst: false
      });

    if (error) {
      console.error("Erro retornado pelo Supabase:", error);

      return res.status(500).json({
        success: false,
        message: "Erro ao consultar os certificados.",
        detail: error.message
      });
    }

    return res.status(200).json({
      success: true,
      total: data?.length ?? 0,
      data: data ?? []
    });
  } catch (error) {
    console.error("Erro da função /api/certificados:", error);

    return res.status(500).json({
      success: false,
      message: "Não foi possível carregar os certificados.",
      detail: error instanceof Error ? error.message : "Erro desconhecido."
    });
  }
}
