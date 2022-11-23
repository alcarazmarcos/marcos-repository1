class Display {
    constructor(displayNumeroAnterior, displayNumeroActual) {
        this.displayNumeroActual= displayNumeroActual;
        this.displayNumeroAnterior= displayNumeroAnterior;
        this.calculador = new Calculadora();
        this.NumeroActual = '';
        this.NumeroAnterior = '';
    }
    borrar(){
        this.NumeroActual = this.NumeroActual.toString().slice(0,-1);
        this.imprimirNumeros();
    }
    borrarTodo(){
        this.NumeroActual='';
        this.NumeroAnterior='';
        this.TipoOperacion = undefined;
        this.imprimirNumeros();
    }

    computar(tipo){
        this.TipoOperacion !== 'igual' && this.calcular();
        this.TipoOperacion = tipo;
        this.NumeroAnterior = this.NumeroActual || this.NumeroAnterior;
        this.NumeroActual = '';
    }

    agregarNumero(numero) {
        if(numero === '.' && this.NumeroActual.includes('.')) return
        this.NumeroActual = this.NumeroActual.toString() + numero.toString();
        this.imprimirNumeros();
    }
    imprimirNumeros() {

        this.displayNumeroActual.textContent = this.NumeroActual;
        this.displayNumeroAnterior.textContent = this.NumeroAnterior;
}
calcular(){
    const NumeroAnterior = parsFloat(this.NumeroAnterior);
    const NumeroActual = parsFloat(this.NumeroActual);

    if( isNaN(NumeroActual) || isNaN(NumeroAnterior) ) return
    this.NumeroActual = this.calculador[this.TipoOperacion](NumeroAnterior, NumeroActual);
}
}
