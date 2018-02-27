(function(win, doc) {
    'use strict';
    // Atribuindo ao formulário um evento de submit a função de cadastrar veículo
    doc.querySelector('[data-js="formulario"]').addEventListener('submit', cadastraVeiculo);
    // Função de cadastro de veículos
    function cadastraVeiculo(event) {
        // Seleção dos inputs
        var modeloVeiculo = doc.querySelector('[data-js="modeloVeiculo"]').value;
        var placaVeiculo = doc.querySelector('[data-js="placaVeiculo"]').value;
        // Atribuindo a data/hora atual
        var time = new Date();
        // Objeto carro com todas as propriedades
        var carro = {
            modelo: modeloVeiculo,
            placa: placaVeiculo,
            hora: time.getHours(),
            minutos: time.getMinutes()
        };
        // Verificando se em LocalStorage não existe a variável de armazenamento
        // patio criada, se não, eu crio
        if(localStorage.getItem('patio') === null) {
            var carros = [];
            carros.push(carro);
            // Atribuo ao pátio(LocalStorage) o array carros em formato json
            localStorage.setItem('patio', JSON.stringify(carros));
        } else {
            // Se já estiver criado a variável patio em LocalStorage,
            // Atribuo à variável carros os valores que tem lá no LocalStorage
            // Lembrando de converter o formato json para string.
            var carros = JSON.parse(localStorage.getItem('patio'));
            carros.push(carro);
            localStorage.setItem('patio', JSON.stringify(carros));
        }
        // Executo a função para que todas as vezes que forem cadastrados novos carros
        // Atualize a tabela automaticamente
        mostraPatio();
        // Isso aqui todo mundo já sabe. Faz com que o comportamento padrão do formulário seja cancelado
        event.preventDefault();
    } // FINAL da Função de cadastro de veículos

    // Função para listar os carros cadastrados no pátio
    function mostraPatio() {
        // Pegando os dados do pátio e atribuindo a variável
        var carros = JSON.parse(localStorage.getItem('patio'));
        // Selecionando a tabela lá da index
        var carrosResultado = doc.querySelector('[data-js="resultados"]');
        // Setando as informações da variável carrosResultados à tabela na index
        // Inicia em null porque vamos setar os valores quando iterar
        carrosResultado.innerHTML = '';
        // Iteração
        for (var i = 0; i < carros.length; i++) {
            var modelo = carros[i].modelo;
            var placa = carros[i].placa;
            var hora = carros[i].hora;
            var minutos = carros[i].minutos;

            // Agora atribuo o resultado ao carrosResultados.innerHTML
            carrosResultado.innerHTML += '<tr><td>' + modelo +
                                         '</td><td>' + placa +
                                         '</td><td>' + hora + ':' + minutos +
                                         '</td></tr>';
        }
    }// FINAL da Função para listar os carros cadastrados no pátio
    // Adiciono ao body da index o evento onload passando a função para carregar a tabela
    doc.body.addEventListener('onload', mostraPatio());

})(window, document);