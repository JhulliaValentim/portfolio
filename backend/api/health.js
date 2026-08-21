import {
  configurarCors,
  responderOptions,
  validarMetodoGet
} from "../lib/cors.js";

export default async function handler(req, res) {
  configurarCors(res);

  if (responderOptions(req, res)) {
    return;
  }

  if (!validarMetodoGet(req, res)) {
    return;
  }

  return res.status(200).json({
    success: true,
    status: "online",
    node: process.version,
    message: "API do portfólio está funcionando."
  });
}
