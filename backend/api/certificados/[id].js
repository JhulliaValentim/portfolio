import {
  configurarCors,
  responderOptions,
  validarMetodoGet
} from "../../lib/cors.js";
import { getSupabase } from "../../lib/supabase.js";

function obterId(req) {
  const idQuery = req.query?.id;

  if (Array.isArray(idQuery)) {
    return idQuery[0];
  }

  if (idQuery !== undefined && idQuery !== null) {
    return String(idQuery);
  }

  try {
    const url = new URL(req.url, "http://localhost");
    return url.pathname.split("/").filter(Boolean).at(-1) ?? "";
  } catch {
    return "";
  }
}

export default async function handler(req, res) {
  configurarCors(res);

  if (responderOptions(req, res)) {
    return;
  }

  if (!validarMetodoGet(req, res)) {
    return;
  }

  const id = obterId(req);

  if (!/^\d+$/.test(id)) {
    return res.status(400).json({
      success: false,
      message: "ID do certificado inválido."
    });
  }

  try {
    const supabase = getSupabase();

    const { data, error } = await supabase
      .from("certificados")
      .select("*")
      .eq("id", Number(id))
      .eq("ativo", true)
      .maybeSingle();

    if (error) {
      console.error("Erro retornado pelo Supabase:", error);

      return res.status(500).json({
        success: false,
        message: "Erro ao consultar o certificado.",
        detail: error.message
      });
    }

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Certificado não encontrado."
      });
    }

    return res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    console.error(`Erro da função /api/certificados/${id}:`, error);

    return res.status(500).json({
      success: false,
      message: "Não foi possível carregar o certificado.",
      detail: error instanceof Error ? error.message : "Erro desconhecido."
    });
  }
}
