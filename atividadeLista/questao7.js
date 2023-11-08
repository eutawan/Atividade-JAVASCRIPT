function agenda(dia) {
    switch (dia.toUpperCase()){
        case 'SEGUNDA':
            return 'Reunião'
            break;
        case 'TERÇA':
           return 'Palestra'
            break;
        case 'QUARTA':
            return 'Workshop'
            break;
        case 'QUINTA':
            return 'Trabalho Remoto'
        case 'SEXTA':
            'Agendamento Semanal'
            break;
        case 'SABADO':
            return 'Shopping'
            break;
        case 'DOMINGO':
            return 'Praia'
            break;
        default:
            return 'Não identificado'
            break;
    }
}

console.log(agenda("segunda"))