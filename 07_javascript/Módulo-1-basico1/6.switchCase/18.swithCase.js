// CONTROLE DE FLUXO - CONDICIONAIS - SWITH CASE

const imc = 18

switch(imc) {
    case 18:
        console.log("Você está com o peso normal, mas lute para não perder")
    break

    case 21:
        console.log('Este peso é o ideal')
    break

    case 24:
        console.log('Você está ficando acima do peso, cuidado!')
    break

    default:
        console.log('Não enconrei nenhuma das opções')
    break
}