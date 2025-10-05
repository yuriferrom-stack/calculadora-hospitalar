/**
 * Função principal para calcular o número de altas necessárias.
 * Ela é chamada quando o usuário clica no botão "Calcular Altas".
 */
function calcularAltas() {
    // 1. Pegar os valores que o usuário digitou no formulário
    const estadiasAtuais = parseFloat(document.getElementById('estadias').value);
    const pacientesAtuais = parseFloat(document.getElementById('pacientes').value);
    const mphAlvo = parseFloat(document.getElementById('mphAlvo').value);

    // 2. Verificar se todos os campos foram preenchidos corretamente
    if (isNaN(estadiasAtuais) || isNaN(pacientesAtuais) || isNaN(mphAlvo) || pacientesAtuais <= 0 || mphAlvo <= 0) {
        alert("Por favor, preencha todos os campos com valores válidos e maiores que zero.");
        return; // Sai da função
    }

    // 3. O Cálculo da MPH Atual
    const mphAtual = estadiasAtuais / pacientesAtuais;

    // 4. Verificar se o MPH Alvo é de fato menor que o Atual
    if (mphAlvo >= mphAtual) {
        document.getElementById('mphAtual').textContent = mphAtual.toFixed(2) + " dias";
        document.getElementById('altasNecessarias').textContent = "0 (O alvo é maior ou igual à MPH atual)";
        alert("O MPH Alvo (" + mphAlvo + " dias) é maior ou igual ao MPH atual (" + mphAtual.toFixed(2) + " dias). Nenhuma alta é necessária para baixar a média.");
        return;
    }

    // 5. Cálculo do Número Total de Pacientes (TNP) para o MPH Alvo
    // TNP = Estadias Atuais / MPH Alvo
    const totalPacientesParaAlvo = estadiasAtuais / mphAlvo;

    // 6. Cálculo das Altas Necessárias
    // Altas Necessárias = Pacientes Atuais - TNP
    const altasNecessarias = pacientesAtuais - totalPacientesParaAlvo;

    // 7. Apresentar os resultados na tela
    document.getElementById('mphAtual').textContent = mphAtual.toFixed(2) + " dias";

    // Usamos Math.ceil() para arredondar para o próximo número inteiro, pois você precisa dar uma alta completa.
    const altasArredondadas = Math.ceil(altasNecessarias);
    
    document.getElementById('altasNecessarias').textContent = altasArredondadas + " altas (arredondado para cima)";
}
