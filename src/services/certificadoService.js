const API_URL =
    import.meta.env.VITE_API_URL ||
    "http://localhost:8080/api";


export async function buscarCertificados() {

    try {

        const response = await fetch(
            `${API_URL}/certificados`
        );


        if (!response.ok) {

            throw new Error(
                `Erro ${response.status}: não foi possível carregar os certificados.`
            );

        }


        const resultado = await response.json();


        /*
            Nosso backend retorna:

            {
                success: true,
                total: 4,
                data: [...]
            }
        */

        return resultado.data || [];

    } catch (error) {

        console.error(
            "Erro na requisição de certificados:",
            error
        );

        throw error;

    }

}


export async function buscarCertificadoPorId(id) {

    try {

        const response = await fetch(
            `${API_URL}/certificados/${id}`
        );


        if (!response.ok) {

            throw new Error(
                `Erro ${response.status}: certificado não encontrado.`
            );

        }


        const resultado = await response.json();

        return resultado.data;

    } catch (error) {

        console.error(
            "Erro ao buscar certificado:",
            error
        );

        throw error;

    }

}