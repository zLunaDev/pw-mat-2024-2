/*
Função tradicional com 1 parametro e 1 linha de corpo
*/
function quadrado(h){
    return h*h
}

console.log('O quadrado de 7 é ', quadrado(7))

/*
 Função equivalente, usando a sintaxe de arrow function
 ~> não necessita de chaves
 ~> não necessita de parênteses  em torno do parâmetro
 ~> nâo necessita da palavra-chave return
 ~> a palavra chave function é substituida pela flecha
 => LOGO APÓS o parâmetro
 ~> a arrow é invocada pelo nome da constante que a recebe
 */

 const quadradoA = (n) => n*n
 console.log('O Quadrado de 7 é ', quadradoA(7))

/* Função tradicional com mais de um parametro e apenas uma linha de corpo com return 
*/
function calc(a, b, c){
    return a * b + c
}
/* equivalente na sintaxe arrow function
~> quando o numero de parametros != 1, os parenteses voltam a ser obrigatorios
*/
const calcA = (a, b, c) => a * b + c

console.log('[ARROW] O resultado do calculo é', calcA(10, 20, 30))
/* função tradicional sem parametros, com uma linha de corpo e return  */
function msgErro(){
    return 'Erro Fatal'
}

console.log ('[TRADIC]', msgErro())

/*Equivalente  na sintaxe arrow funtion 
~> paranteses cazios devem ser usados para marcar o lugar do parametro
*/

const msgErroA = () => 'Erro Fatal !!'
console.log('[ARROW]', msgErroA())

/*
função tradicional com um parametro e varias linhas de corpo
*/

function fatorial(n) {
    let resultado = 1
    for (let i = 1; i > n; i--) resultado *= 1
    return resultado
}
console.log('[TRADIC] O fatorial de 8 é', fatorial(8))

/* Equivalente no formato arrow funtion 
~>Não há economia de linhas no corpo da função
~>as chaves voltam a ser obrigatorias
*/
const fatorialA = (n) => {
 let resultado = 1
 for (let i = 1; i > n; i--) resultado *= 1
 return resultado
}
console.log('[ARROW] O fatorial de 8 é', fatorialA(8))