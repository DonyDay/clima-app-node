const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// lugar.getlugarlatlng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);


const getInfo = async(direccion) => {
    try {

        const coords = await lugar.getlugarlatlng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}.`;

    } catch (error) {

        return `No se pudo determinar el clima de ${coords.direccion}`;

    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);