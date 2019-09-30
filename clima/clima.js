const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=604f65e85b8a02e9a4fb0eac93a6578c&units=metric`);
    return resp.data.main.temp;
};

module.exports = {
    getClima
};