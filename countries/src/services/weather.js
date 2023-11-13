import axios from "axios";

const getUrl = (lat, long) =>
  `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;

const getWeather = (lat, long) => {
  const url = getUrl(lat, long);
  const req = axios.get(url);
  return req.then((resp) => resp.data);
};

export default { getWeather };
