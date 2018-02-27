(function(win, doc) {
    'use strict';
    // Atribuindo ao formulário um evento de submit a função de cadastrar veículo
    doc.querySelector('[data-js="formulario"]').addEventListener('submit', cadastraVeiculo);
    // Função de cadastro de veículos
    function cadastraVeiculo(event) {
        // Isso aqui todo mundo já sabe. Faz com que o comportamento padrão do formulário seja cancelado
        event.preventDefault();
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
            localStorage.setItem('patio', JSON.stringify(carros));
        }

        console.log(carro);
    }

})(window, document);