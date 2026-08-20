import {
    useEffect,
    useState
} from "react";

import {
    Award,
    CalendarDays,
    Clock3,
    ExternalLink,
    LoaderCircle,
    RefreshCw,
    Tag
} from "lucide-react";

import {
    buscarCertificados
} from "../services/certificadoService";


export default function Certifications() {

    const [
        certificados,
        setCertificados
    ] = useState([]);


    const [
        carregando,
        setCarregando
    ] = useState(true);


    const [
        erro,
        setErro
    ] = useState("");


    /*
        Carrega os certificados
        quando o componente abrir.
    */

    useEffect(() => {

        carregarCertificados();

    }, []);


    async function carregarCertificados() {

        try {

            setCarregando(true);

            setErro("");


            const dados =
                await buscarCertificados();


            setCertificados(dados);

        } catch (error) {

            console.error(
                "Erro ao carregar certificados:",
                error
            );


            setErro(
                "Não foi possível carregar as certificações."
            );

        } finally {

            setCarregando(false);

        }

    }


    /*
        Converte:

        2025-10-23

        para:

        23/10/2025
    */

    function formatarData(data) {

        if (!data) {

            return "";

        }


        const partes =
            data.split("-");


        if (partes.length !== 3) {

            return data;

        }


        const [
            ano,
            mes,
            dia
        ] = partes;


        return `${dia}/${mes}/${ano}`;

    }


    /*
        Abre o certificado somente
        quando existir URL.
    */

    function abrirCertificado(
        event,
        certificado
    ) {

        if (!certificado.certificado_url) {

            event.preventDefault();

        }

    }


    return (

        <section
            className="section certifications-section"
            id="certificacoes"
        >

            <div className="container">


                {/* TÍTULO */}

                <div className="section-heading">

                    <span className="eyebrow">

                        FORMAÇÃO CONTÍNUA

                    </span>


                    <h2 className="section-title">

                        Cursos e{" "}

                        <span>

                            certificações.

                        </span>

                    </h2>


                    <p>

                        Cursos, formações e certificações
                        que complementam minha trajetória
                        profissional e meu desenvolvimento
                        na área de tecnologia.

                    </p>

                </div>


                {/* CARREGANDO */}

                {
                    carregando && (

                        <div className="certification-status">

                            <LoaderCircle
                                size={30}
                                className="loading-icon"
                            />

                            <p>

                                Carregando certificações...

                            </p>

                        </div>

                    )
                }


                {/* ERRO */}

                {
                    !carregando &&
                    erro && (

                        <div className="certification-error">

                            <Award size={32} />

                            <h3>

                                Ops!

                            </h3>

                            <p>

                                {erro}

                            </p>


                            <button
                                type="button"
                                className="button"
                                onClick={
                                    carregarCertificados
                                }
                            >

                                <RefreshCw size={17} />

                                Tentar novamente

                            </button>

                        </div>

                    )
                }


                {/* CERTIFICADOS */}

                {
                    !carregando &&
                    !erro &&
                    certificados.length > 0 && (

                        <div className="certifications-grid">

                            {
                                certificados.map(
                                    (certificado) => (

                                        <a
                                            href={
                                                certificado.certificado_url ||
                                                "#"
                                            }
                                            target={
                                                certificado.certificado_url
                                                    ? "_blank"
                                                    : undefined
                                            }
                                            rel={
                                                certificado.certificado_url
                                                    ? "noopener noreferrer"
                                                    : undefined
                                            }
                                            className={
                                                certificado.destaque
                                                    ? "certification-card certification-card--featured"
                                                    : "certification-card"
                                            }
                                            key={
                                                certificado.id
                                            }
                                            onClick={
                                                (event) =>
                                                    abrirCertificado(
                                                        event,
                                                        certificado
                                                    )
                                            }
                                        >


                                            {/* TOPO */}

                                            <div className="certification-card__top">

                                                <div className="certification-card__icon">

                                                    <Award
                                                        size={24}
                                                    />

                                                </div>


                                                {
                                                    certificado.destaque && (

                                                        <span className="certification-featured">

                                                            Destaque

                                                        </span>

                                                    )
                                                }

                                            </div>


                                            {/* INSTITUIÇÃO */}

                                            <span className="certification-institution">

                                                {
                                                    certificado.instituicao
                                                }

                                            </span>


                                            {/* TÍTULO */}

                                            <h3>

                                                {
                                                    certificado.titulo
                                                }

                                            </h3>


                                            {/* DESCRIÇÃO */}

                                            {
                                                certificado.descricao && (

                                                    <p className="certification-description">

                                                        {
                                                            certificado.descricao
                                                        }

                                                    </p>

                                                )
                                            }


                                            {/* INFORMAÇÕES */}

                                            <div className="certification-info">


                                                {
                                                    certificado.categoria && (

                                                        <span>

                                                            <Tag
                                                                size={13}
                                                            />

                                                            {
                                                                certificado.categoria
                                                            }

                                                        </span>

                                                    )
                                                }


                                                {
                                                    certificado.data_conclusao && (

                                                        <span>

                                                            <CalendarDays
                                                                size={13}
                                                            />

                                                            {
                                                                formatarData(
                                                                    certificado.data_conclusao
                                                                )
                                                            }

                                                        </span>

                                                    )
                                                }


                                                {
                                                    !certificado.data_conclusao &&
                                                    certificado.periodo && (

                                                        <span>

                                                            <CalendarDays
                                                                size={13}
                                                            />

                                                            {
                                                                certificado.periodo
                                                            }

                                                        </span>

                                                    )
                                                }


                                                {
                                                    certificado.carga_horaria && (

                                                        <span>

                                                            <Clock3
                                                                size={13}
                                                            />

                                                            {
                                                                certificado.carga_horaria
                                                            }

                                                            h

                                                        </span>

                                                    )
                                                }

                                            </div>


                                            {/* VER CERTIFICADO */}

                                            {
                                                certificado.certificado_url ? (

                                                    <div className="certification-link">

                                                        Ver certificado

                                                        <ExternalLink
                                                            size={16}
                                                        />

                                                    </div>

                                                ) : (

                                                    <div className="certification-link certification-link--disabled">

                                                        Certificado indisponível

                                                    </div>

                                                )
                                            }

                                        </a>

                                    )
                                )
                            }

                        </div>

                    )
                }


                {/* BANCO VAZIO */}

                {
                    !carregando &&
                    !erro &&
                    certificados.length === 0 && (

                        <div className="certification-empty">

                            <Award size={36} />

                            <h3>

                                Nenhuma certificação encontrada

                            </h3>

                            <p>

                                As certificações serão
                                exibidas aqui automaticamente.

                            </p>

                        </div>

                    )
                }

            </div>

        </section>

    );

}