export function configurarCors(res) {
  // As rotas são somente leitura e não expõem a chave do Supabase.
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
}

export function responderOptions(req, res) {
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return true;
  }

  return false;
}

export function validarMetodoGet(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET, OPTIONS");
    res.status(405).json({
      success: false,
      message: "Método não permitido."
    });
    return false;
  }

  return true;
}
