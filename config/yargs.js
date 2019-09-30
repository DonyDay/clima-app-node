const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccioon de la ciuda para obtener el clima',
        demand: true
    }
}).argv;

module.exports = {
    argv
};