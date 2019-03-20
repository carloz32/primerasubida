const opciones = {
    nombre: {
        alias: 'n',
        demand: true
    },
    matematicas: {
        alias: 'm',
        demand: true
    },
    ingles: {
        alias: 'i',
        demand: true
    },
    programacon: {
        alias: 'p',
        demand: true
    },

}
let obtenerpromedio = (nota_uno, nota_dos, nota_tres);

const arvg =require('yargs')
            .command ('promedio', 'Calcular el promedio',opciones)
            .argv

module.exports ={
    obtenerpromedio,
    argv
}