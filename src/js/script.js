let contador = 1; // Contador para as letras (a, b, c...)

document.getElementById('adicionar-alternativa').addEventListener('click', () => {
    const container = document.getElementById('alternativas-container');

    // Verifica se o número máximo de alternativas (5) foi atingido
    if (contador >= 5) {
        alert('Você atingiu o número máximo de 5 alternativas.');
        return; // Interrompe a função para não adicionar mais alternativas
    }

    // Cria um novo div para a alternativa
    const novaAlternativa = document.createElement('div');
    novaAlternativa.className = 'campo-alternativa';

    // Determina a próxima letra
    const letra = String.fromCharCode(97 + contador); // 97 é o código ASCII de 'a'

    // Cria o label e o input
    novaAlternativa.innerHTML = `<label for="alternativa-${letra}">${letra})</label>
                                 <input class="inp-alternativa" type="text" id="alternativa-${letra}" name="alternativa-${letra}" placeholder="Digite a alternativa">`;

    // Adiciona o novo campo no container
    container.appendChild(novaAlternativa);

    contador++; // Incrementa o contador para a próxima letra
});
