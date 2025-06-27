import Calculo from './calculo'

export default class Bhaskara extends Calculo {
    public calcular (numero1: number, numero2: number): number {
        console.log('Método não implementado para Bhaskara.')
        return 0
    }

    public calcularBhaskara (numero1: number, numero2: number, numero3: number,): number [] | null {
        let delta = numero2 * numero2 - 4 * numero1 * numero3
        if (delta > 0) {
            let x1 = (-numero2 + Math.sqrt(delta)) / (2 * numero1)
            let x2 = (-numero2 - Math.sqrt(delta)) / (2 * numero1)
            console.log(`As raízes da equação são: x1 = ${x1.toFixed(2)} e x2 = ${x2.toFixed(2)}`)
            return [x1, x2]
        }
        else if (delta === 0) {
            let x = -numero2 / (2 * numero1)
            console.log(`A raiz da equação é: x = ${x.toFixed(2)}`)
            return [x]
        }
        else {
            console.log('A equação não possui raízes reais.')
            return null
        }
    }
}