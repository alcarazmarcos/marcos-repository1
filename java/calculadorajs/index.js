const displayNumeroAnterior = document.getElementById('numero-anterior');
const displayNumeroActual = document.getElementById('numero-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayNumeroAnterior,displayNumeroActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click',() => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click',() => display.computar(boton))
});