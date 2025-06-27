import * as readline from 'readline'
import Soma from './somar'
import Subtracao from './subtracao'
import Multiplicacao from './multiplicacao'
import Divisao from './divisao'
import Potenciacao from './potenciacao'
import Radiciacao from './radiciacao'
import Bhaskara from './bhaskara'

let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    leitor.question(`Por favor, insira 2 números e a operação desejada! (Ex: 2 3 SOMAR)\n`, (valor) => {
        let instrucoes = valor.split(' ')
        let numero1 = Number(instrucoes[0])
        let numero2 = Number(instrucoes[1])
        let operação = instrucoes[2].toUpperCase()

        if (instrucoes.length !== 3) {
            console.log('Por favor, insira exatamente 2 números e a operação desejada!')
            leitor.close()
            return
        }

        if (isNaN(numero1) || isNaN(numero2)) {
            console.log('Por favor, insira números válidos!')
            leitor.close()
            return
        }
    
        console.log(`Estas foram suas instruções: ${numero1}, ${numero2}, ${operação} \n`)

        let calculo
        switch (operação) {
            case 'SOMAR':
                calculo = new Soma()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}`)
                break
            
            case 'SUBTRAIR':
                calculo = new Subtracao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}`)
                break

            case 'MULTIPLICAR':
                calculo = new Multiplicacao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}`)
                break

            case 'DIVIDIR':
                if (numero2 === 0) {
                    console.log('Não é possível dividir por zero!')
                    leitor.close()
                    return
                }
                else {
                    calculo = new Divisao()
                    console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}`)
                    break
                }

            case 'POTENCIAR':
                calculo = new Potenciacao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}`)
                break

            case 'RADICIAR':
                calculo = new Radiciacao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}`)
                break

            case 'BHASKARA':
                leitor.question(`Por favor, insira o terceiro número!\n`, (valor3) => {
                let numero3 = Number(valor3)

                if (isNaN(numero3)) {
                    console.log('Por favor, insira um número válido!')
                    leitor.close()
                    return
                }
                calculo = new Bhaskara()   
                calculo.calcularBhaskara(numero1, numero2, numero3)

                leitor.close()
                })
                return

            default:
                console.log('Operação desconhecida!')
                leitor.close()
                return
        }

        leitor.close()
    })
}

iniciar()