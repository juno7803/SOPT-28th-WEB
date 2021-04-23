const weatherTemp = document.querySelector(".weather_temp");

const API_KEY = "734bf25472a20c2e1d438fa3ad1db566";
const fetchWeather = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    const weather = await response.json();
    paintWeather(weather);
  } catch (err) {
    throw err;
  }
};

const paintWeather = (weatherData) => {
  const weather = {
    temp: (weatherData.main.temp - ABS_ZERO).toFixed(2),
    tempFeel: (weatherData.main.feels_like - ABS_ZERO).toFixed(2),
    tempMin: (weatherData.main.temp_min - ABS_ZERO).toFixed(2),
    tempMax: (weatherData.main.temp_max - ABS_ZERO).toFixed(2),
    hum: weatherData.main.humidity,
    main: weatherData.weather[0].main,
    wind: weatherData.wind.speed,
    id: weatherData.weather[0].id, // 나중에 아이콘 사용하기 위한 용도
    rain: weatherData.rain ? weatherData.rain["1h"] : null, // 비가 올 때만 데이터가 들어있음
    icon: weatherData.weather[0].icon,
  };

  weatherTemp.innerHTML = `${weather.temp} °C`;
  //   weatherMain.innerHTML = `${weather.main}`;
  //   weatherTemps.innerHTML = `<span>Feels:</span> ${weather.tempFeel} °C &nbsp;&nbsp;
  //       <span>Min:</span> ${weather.tempMin} °C &nbsp;&nbsp;
  //       <span>Max:</span> ${weather.tempMax} °C`;
  //   if (weather.rain) {
  //     weatherOthers.innerHTML = `<span>Humidity:</span> ${weather.hum} % &nbsp;&nbsp;
  //       <span>Rain:</span> ${weather.rain} mm/h &nbsp;&nbsp;
  //       <span>Wind:</span> ${weather.wind} m/s`;
  //   } else {
  //     weatherOthers.innerHTML = `<span>Humidity:</span> ${weather.hum} % &nbsp;&nbsp;
  //       <span>Wind:</span> ${weather.wind} m/s`;
  //   }
};

const getLocation = () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      fetchWeather(latitude, longitude);
    },
    (error) => {
      alert(`Error ${error.message}!`);
    }
  );
};

getLocation();
