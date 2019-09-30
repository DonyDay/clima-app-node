const axios = require('axios');


const getlugarlatlng = async(dir) => {
    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl} `,
        headers: { 'x-rapidapi-key': '0878b7ba92mshf207fbe36500bdfp1a03f4jsn159b55d00bdc' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    };
};

module.exports = {
    getlugarlatlng
};

// Se optimiza este codigo como promesa con asyc y await
// instance.get()
//     .then(resp => {
//         console.log(resp.data.Results[0]);
//     })
//     .catch(err => {
//         console.log('ERROR!!!!', err);
//     });