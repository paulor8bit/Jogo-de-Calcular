// import 'sorteio'
function getInteiroAleatorio (min, max) { 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


const jogadas = {
   contador: getInteiroAleatorio(0, 30),
   mult: getInteiroAleatorio(1, 11),
   somar: getInteiroAleatorio(1, 10),
   diminuir: getInteiroAleatorio(1, 11),
   sorteio: getInteiroAleatorio(0, 30),
    }


new Vue({
    el: "#app", 
    data: {
        contador: jogadas.contador,
        somar: jogadas.somar,
        diminuir: jogadas.diminuir,
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
        mult() {
            this.contador *= this.multiplicar
        }
    }
})