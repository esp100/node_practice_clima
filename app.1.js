const argv = require('yargs').options({
    direcccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).help().argv;


const axios = require('axios');


//console.log(argv, argv.direcccion);
let encodeUrl = encodeURI(argv.direcccion);

let listrem = [];

listrem = require('./data.json');

// console.log(JSON.stringify(listrem, undefined, 3));

let location = listrem.results[0];
let coors = location.geometry.location;

console.log('Direccion:', location.formatted_address);
console.log('lat:', coors.lat);
console.log('lng:', coors.lng);



// axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
//     .then(resp => {
//         console.log('////////////////\n');
//         console.log(JSON.stringify(resp.data, undefined, 3));
//         console.log('////////////////\n');
//         console.log(resp.status);
//         console.log('////////////////\n');
/*       
            let location = resp.data.results[0];
            let coors = location.geometry.location;
            console.log('Direccion:', location.formatted_address);
            console.log('lat:', coors.lat);
            console.log('lng:', coors.lng);
*/
//     })
//     .catch(e => console.log(`Obviamente esto ocacionaría error`, e));