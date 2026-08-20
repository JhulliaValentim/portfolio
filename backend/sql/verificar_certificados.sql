SELECT
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
FROM public.certificados
WHERE ativo = TRUE
ORDER BY ordem ASC;
