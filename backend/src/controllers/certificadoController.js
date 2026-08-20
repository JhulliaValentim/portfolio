import {
  buscarCertificadoPorId,
  listarCertificados
} from "../services/certificadoService.js";

export async function listar(req, res) {
  try {
    const certificados = await listarCertificados();

    return res.status(200).json({
      success: true,
      total: certificados.length,
      data: certificados
    });
  } catch (error) {
    console.error("Erro ao listar certificados:", error);

    return res.status(500).json({
      success: false,
      message: "Não foi possível carregar os certificados."
    });
  }
}

export async function buscarPorId(req, res) {
  try {
    const { id } = req.params;

    if (!/^\d+$/.test(id)) {
      return res.status(400).json({
        success: false,
        message: "ID inválido."
      });
    }

    const certificado = await buscarCertificadoPorId(Number(id));

    if (!certificado) {
      return res.status(404).json({
        success: false,
        message: "Certificado não encontrado."
      });
    }

    return res.status(200).json({
      success: true,
      data: certificado
    });
  } catch (error) {
    console.error("Erro ao buscar certificado:", error);

    return res.status(500).json({
      success: false,
      message: "Não foi possível carregar o certificado."
    });
  }
}
