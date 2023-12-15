let numberOne = prompt("Insira o primeiro número:")
let numberTwo = prompt("Insira o segundo número:")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert('Soma: ' + sum)

if (sum % 2 == 0){
  alert (`O resultado ${sum} é par.`)
} else{
  alert (`O resultado ${sum} é impar.`)
}

alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)

if(numberOne==numberTwo){
  alert("Os números inseridos são iguais")
}else{
  alert(`Os números inseridos são diferentes, 
  sendo respectivamente: ${numberOne} e ${numberTwo}`)
}