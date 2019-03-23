const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f8c57df555fcb51a3202103614a77517&units=metric`)
    return resp.data.main.temp;
}
module.exports = {
    getClima
}