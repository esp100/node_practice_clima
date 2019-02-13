const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).help().argv;


const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


let getInfo = async(direccion) => {
    let coors = await lugar.getLugarLatLng(argv.direccion);
    let temp = await clima.getClima(coors.lat, coors.lng);

    return `El clima en ${coors.direccion} es de ${temp}ºC`;
}
getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log('Dirección', resp.direccion);
//         console.log('lat', resp.lat);
//         console.log('lng', resp.lng);
//     }).catch(e => console.log(e));

// clima.getClima(-47, -126)
//     .then(resp => {
//         console.log(`El clima correspondiente a R'lyeh es: \n${resp}`);
//     }).catch(e => console.log(e));