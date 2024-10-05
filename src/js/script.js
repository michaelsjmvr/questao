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

document.getElementById('gerar-questao').addEventListener('click', () => {
    const pergunta = document.getElementById('pergunta').value.trim();
    const alternativas = document.querySelectorAll('#alternativas-container input[type="text"]');

    if (!pergunta) {
        alert('Por favor, insira uma pergunta.');
        return;
    }

    // Atualiza o conteúdo da pergunta no h2
    const conteudoPergunta = document.querySelector('.conteudo-gerado h2');
    conteudoPergunta.textContent = `${pergunta}`;

    // Gera o texto das alternativas e atualiza o parágrafo
    const conteudoAlternativas = document.querySelector('.conteudo-gerado p');
    let textoAlternativas = '';

    alternativas.forEach((input, index) => {
        const letra = String.fromCharCode(97 + index); // Gera a letra a, b, c...
        if (input.value.trim()) {
            textoAlternativas += `${letra}) ${input.value.trim()}<br>`;
        }
    });

    if (!textoAlternativas) {
        alert('Por favor, insira pelo menos uma alternativa válida.');
        return;
    }

    conteudoAlternativas.innerHTML = `<br>${textoAlternativas}`;

    // Exibe a área de conteúdo gerado
    document.querySelector('.conteudo-gerado').style.display = 'flex';
});

document.getElementById('fechar-conteudo-gerado').addEventListener('click', () => {
    // Oculta a área de conteúdo gerado
    document.querySelector('.conteudo-gerado').style.display = 'none';
});

document.getElementById('limpar').addEventListener('click', () => {
    // Limpa o campo de pergunta
    document.getElementById('pergunta').value = '';

    // Limpa todos os campos de alternativa
    const alternativas = document.querySelectorAll('#alternativas-container input[type="text"]');
    alternativas.forEach(input => {
        input.value = ''; // Limpa cada campo de alternativa
    });

    // Oculta o conteúdo gerado
    document.querySelector('.conteudo-gerado').style.display = 'none';
});


document.getElementById("btn-copiar").addEventListener("click", function() {
    // Seleciona o conteúdo da div
    const pergunta = document.querySelector(".caixa-pergunta-alternativa h2").innerText;
    const descricao = document.querySelector(".caixa-pergunta-alternativa p").innerText;

    // Combina pergunta e descrição
    const conteudo = `${pergunta} ${descricao}`;

    // Copia o conteúdo para a área de transferência
    navigator.clipboard.writeText(conteudo).then(() => {
        alert('Conteúdo copiado! Cole na caixa de texto do ChatGPT ou Gemini.');
    }).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });
});


document.getElementById("btn-chatgpt").addEventListener("click", function() {
    // Abre a nova guia do ChatGPT
    window.open('https://chat.openai.com/', '_blank');
});

document.getElementById("btn-gemini").addEventListener("click", function() {
    // Abre a nova guia do ChatGPT
    window.open('https://gemini.google.com/app', '_blank');
});