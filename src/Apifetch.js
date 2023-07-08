
const API_URL="https://wft-geo-db.p.rapidapi.com/v1/geo"
const API_config = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4d44073831msh868787685f2de59p11760bjsn37dffcd85b20',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  },
  params: {
    languageCode: 'english'
  },
};

const Live_Weather_API_URL="https://api.openweathermap.org/data/2.5"
const Live_Weather_ApiKey="15fd410e9df554a9d8c11b6d065cabb9"
export {API_config,API_URL,Live_Weather_ApiKey,Live_Weather_API_URL};