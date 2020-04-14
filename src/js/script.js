// import 'sorteio'
function getInteiroAleatorio (min, max) { 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


const jogadas = {
   contador: getInteiroAleatorio(0, 99),
   mult: getInteiroAleatorio(1, 11),
   dividir: getInteiroAleatorio(2, 10),
   somar: getInteiroAleatorio(1, 10),
   diminuir: getInteiroAleatorio(1, 11),
   sorteio: getInteiroAleatorio(0, 99),
    }


new Vue({
    el: "#app", 
    data: {
        contador: jogadas.contador,
        somar: jogadas.somar,
        diminuir: jogadas.diminuir,
        dividir: jogadas.dividir,
        multiplicar: jogadas.mult,
        sorteio: jogadas.sorteio

    }, 
    methods: { 
        add() {
            this.contador += this.somar
        }, 
        remove() { 
            this.contador -= this.diminuir
        },
        divid() { 
            if (this.contador < this.dividir && this.contador >= 0) {
                this.contador   }
           
            else { this.contador = Math.floor(this.contador/this.dividir)}
            },
        mult() {
            this.contador *= this.multiplicar
        }
    }
})