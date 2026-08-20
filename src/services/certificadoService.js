const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:3000/api"
).replace(/\/+$/, "");

async function lerResposta(response) {
  let body = null;

  try {
    body = await response.json();
  } catch {
    body = null;
  }

  if (!response.ok) {
    const mensagem =
      body?.message ||
      body?.detail ||
      `Erro HTTP ${response.status}.`;

    throw new Error(mensagem);
  }

  return body;
}

export async function buscarCertificados() {
  try {
    const response = await fetch(`${API_URL}/certificados`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });

    const resultado = await lerResposta(response);
    return resultado?.data ?? [];
  } catch (error) {
    console.error("Erro na requisição de certificados:", error);
    throw error;
  }
}

export async function buscarCertificadoPorId(id) {
  if (id === undefined || id === null || id === "") {
    throw new Error("ID do certificado não informado.");
  }

  try {
    const response = await fetch(
      `${API_URL}/certificados/${encodeURIComponent(id)}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }
    );

    const resultado = await lerResposta(response);
    return resultado?.data ?? null;
  } catch (error) {
    console.error("Erro ao buscar certificado:", error);
    throw error;
  }
}
