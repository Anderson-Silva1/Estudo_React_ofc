// Ano, mes, dia, hora, minuto, segundo, milésimo EXATA

let hora = new Date().toLocaleTimeString('pt-BR')
let dia = new Date().getDay()
let mes = new Date().getMonth() + 1
let ano = new Date().getFullYear()
    console.log(`Ano -> ${ano}`)
    console.log(`Mês -> ${mes}`)
    console.log(`Dia -> ${dia}`)
    console.log(`Hora -> ${hora}`)

    if (mes == 1) {
        mes = "Janeiro";
    } else if (mes == 2) {
        mes = "Fevereiro";
    } else if (mes == 3) {
        mes = "Março";
    } else if (mes == 4) {
        mes = "Abril";
    } else if (mes == 5) {
        mes = "Maio";
    } else if (mes == 6) {
        mes = "Junho";
    } else if (mes == 7) {
        mes = "Julho";
    } else if (mes == 8) {
        mes = "Agosto";
    } else if (mes == 9) {
        mes = "Setembro";
    } else if (mes == 10) {
        mes = "Outubro";
    } else if (mes == 11) {
        mes = "Novembro";
    } else if (mes == 12) {
        mes = "Dezembro";
    }

console.log(`Agora são ${hora} do ano ${ano} do mes de ${mes} do dia ${dia}`)