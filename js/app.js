(function(win, doc) {
    'use strict';

    doc.querySelector('[data-js="formulario"]').addEventListener('submit', cadastraVeiculo);

    function cadastraVeiculo(event) {
        event.preventDefault();
        var modeloVeiculo = doc.querySelector('[data-js="modeloVeiculo"]').value;
        var placaVeiculo = doc.querySelector('[data-js="placaVeiculo"]').value;
        var time = new Date();

        var carro = {
            modelo: modeloVeiculo,
            placa: placaVeiculo,
            hora: time.getHours(),
            minutos: time.getMinutes()
        };

        console.log(carro);
    }
})(window, document);