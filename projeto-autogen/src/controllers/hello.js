/**
 * Rota para retornar uma mensagem de saudação.
 *
 * **Parâmetros esperados:**
 *
 * * `coisas` (string): O texto da mensagem de saudação
 *
 * **Resposta padrão:**
 *
 * * Código de status: 200
 * * Corpo da resposta:
 *    * `mensagem`: A mensagem de saudação
 *    * `coisas`: O valor do parâmetro
 */

const hello = (request, response) => {
    return response.status(200).json({
        msg: 'Ola! td ok.'
    });
};

export default hello;

