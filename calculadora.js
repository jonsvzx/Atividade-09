/**
 * 📄 Arquivo: calculadora.js
 * * Função para realizar o cálculo (Multiplicação ou Divisão) 
 * e exibir o resultado e o alerta do SweetAlert2.
 */

function calcular(operacao) {
    // 1. Obter os valores dos campos de entrada
    // O '+' converte a string do input para um número.
    const num1 = +document.getElementById('numero1').value;
    const num2 = +document.getElementById('numero2').value;
    
    let resultado = 0;
    let simbolo = "";

    // 2. Realizar a operação com base no parâmetro 'operacao'
    if (operacao === 'multiplicacao') {
        resultado = num1 * num2;
        simbolo = "×";
    } else if (operacao === 'divisao') {
        // 🚨 Adiciona uma verificação para evitar a divisão por zero
        if (num2 === 0) {
            // Exibir alerta de erro com SweetAlert2
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'Não é possível dividir por zero.',
                confirmButtonText: 'Entendi'
            });
            // Limpa o campo do resultado
            document.getElementById('resultado').textContent = 'Erro: Divisão por zero.';
            return; // Encerra a função para não continuar com a operação
        }
        resultado = num1 / num2;
        simbolo = "÷";
    } else {
        // Alerta para operação inválida (caso o botão seja chamado incorretamente)
        console.error("Operação inválida.");
        return;
    }

    // 3. Exibir o resultado na tela
    const expressao = `${num1} ${simbolo} ${num2} = ${resultado}`;
    document.getElementById('resultado').textContent = expressao;

    // 4. Exibir o alerta estilizado com SweetAlert2
    Swal.fire({
        icon: 'success', // Ícone de sucesso
        title: 'Cálculo realizado com sucesso!', // Título da mensagem
        text: `O resultado da operação é: ${resultado}`, // Texto adicional
        showConfirmButton: false, // Não mostra o botão de confirmação
        timer: 3000, // Fecha automaticamente após 3 segundos
        timerProgressBar: true // Mostra a barra de progresso do timer
    });
}