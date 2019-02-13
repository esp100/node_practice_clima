const axios = require('axios');

const getClima = async(lat, lng) => {



    let encodeUrlat = encodeURI(lat);
    let encodeUrlng = encodeURI(lng);


    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${encodeUrlat}&lon=${encodeUrlng}&units=metric&appid=9a5508bb0895fe6a24bd54aff081c6e5`);

    let clima = resp.data.main.temp;
    return clima;




}

module.exports = {
    getClima
};