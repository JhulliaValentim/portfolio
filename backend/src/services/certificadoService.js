import { supabase } from "../config/supabase.js";

const CAMPOS_CERTIFICADO = `
  id,
  titulo,
  instituicao,
  categoria,
  descricao,
  data_conclusao,
  carga_horaria,
  periodo,
  certificado_url,
  imagem_url,
  destaque,
  ordem,
  ativo,
  created_at,
  updated_at
`;

export async function listarCertificados() {
  const { data, error } = await supabase
    .from("certificados")
    .select(CAMPOS_CERTIFICADO)
    .eq("ativo", true)
    .order("ordem", { ascending: true })
    .order("data_conclusao", { ascending: false, nullsFirst: false });

  if (error) throw error;
  return data ?? [];
}

export async function buscarCertificadoPorId(id) {
  const { data, error } = await supabase
    .from("certificados")
    .select(CAMPOS_CERTIFICADO)
    .eq("id", id)
    .eq("ativo", true)
    .maybeSingle();

  if (error) throw error;
  return data;
}
