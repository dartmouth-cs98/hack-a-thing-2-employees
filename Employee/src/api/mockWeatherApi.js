const weatherList = [
    {
        "city": "Hanover",
        "state": "NH",
        "weatherForecast": {
            "day": "Wednesday",
            "description": "Partly Cloudy",
            "temp": "87°F / 56°F",
            "wind": "SSW 7 mph",
            "humidity": "72%",
        },
        "image": "https://clipartion.com/wp-content/uploads/2015/11/weather-symbols-clip-art-at-vector-clip-art-online.png"
    }, {
        "city": "Boston",
        "state": "MA",
        "weatherForecast": {
            "day": "Wednesday",
            "description": "Partly Cloudy",
            "temp": "81°F / 65°F",
            "wind": "S 10 mph",
            "humidity": "78%",
        },
        "image": "https://clipartion.com/wp-content/uploads/2015/11/weather-symbols-clip-art-at-vector-clip-art-online.png"
    }, {
        "city": "Los Angeles",
        "state": "CA",
        "weatherForecast": {
            "day": "Wednesday",
            "description": "Sunny",
            "temp": "85°F / 63°F",
            "wind": "SSW 6 mph",
            "humidity": "44%",
        },
        "image": "https://clipartion.com/wp-content/uploads/2017/06/clipart-weather-icon-sunny.png"
    }, {
        "city": "Seattle",
        "state": "WA",
        "weatherForecast": {
            "day": "Wednesday",
            "description": "Partly Cloudy",
            "temp": "75°F / 56°F",
            "wind": "N 7 mph",
            "humidity": "69%",
        },
        "image": "https://clipartion.com/wp-content/uploads/2015/11/weather-symbols-clip-art-at-vector-clip-art-online.png"
    }, {
        "city": "Denver",
        "state": "CO",
        "weatherForecast": {
            "day": "Wednesday",
            "description": "Mostly Cloudy",
            "temp": "65°F / 48°F",
            "wind": "NNE 7 mph",
            "humidity": "59%",
        },
        "image": "https://clipartion.com/wp-content/uploads/2015/11/weather-symbols-clip-art-at-vector-clip-art-online.png"
    }, {
        "city": "Anchorage",
        "state": "AK",
        "weatherForecast": {
            "day": "Wednesday",
            "description": "Showers",
            "temp": "54°F / 46°F",
            "wind": "N 7 mph",
            "humidity": "79%",
        },
        "image": "https://clipartion.com/wp-content/uploads/2016/04/rain-cloud-clipart.png"
    }, {
        "city": "Seoul",
        "state": "South Korea",
        "weatherForecast": {
            "day": "Thursday",
            "description": "Sunny",
            "temp": "23°C / 10°C",
            "wind": "NW 13 mph",
            "humidity": "49%",
        },
        "image": "https://clipartion.com/wp-content/uploads/2017/06/clipart-weather-icon-sunny.png"
    }, {
        "city": "Austin",
        "state": "TX",
        "weatherForecast": {
            "day": "Wednesday",
            "description": "Cloudy",
            "temp": "90°F / 72°F",
            "wind": "ENE 6 mph",
            "humidity": "68%",
        },
        "image": "https://clipartion.com/wp-content/uploads/2016/04/vector-of-black-and-white-cloudy-day-sign.png"
    }, {
        "city": "San Francisco",
        "state": "CA",
        "weatherForecast": {
            "day": "Wednesday",
            "description": "Sunny",
            "temp": "82°F / 58°F",
            "wind": "NNW 11 mph",
            "humidity": "46%",
        },
        "image": "https://clipartion.com/wp-content/uploads/2017/06/clipart-weather-icon-sunny.png"
    }, {
        "city": "Honolulu",
        "state": "HI",
        "weatherForecast": {
            "day": "Wednesday",
            "description": "Mostly Sunny",
            "temp": "87°F / 75°F",
            "wind": "NE 14 mph",
            "humidity": "62%",
        },
        "image": "https://clipartion.com/wp-content/uploads/2015/11/weather-symbols-clip-art-at-vector-clip-art-online.png"
    }];

class WeatherApi {
    static getAllWeatherNodes() {
        return new Promise((resolve, reject) => setTimeout(() => resolve(weatherList)), 1200);
    }

    static searchByLocation(qs) {
        return new Promise((resolve, reject) => {
            let result = weatherList.filter(weather => {
                const fullName = `${weather.city.toLowerCase()} ${weather.state.toLowerCase()}`;
                return fullName.indexOf(qs.toLowerCase()) > -1;
            });

            resolve(result);
        })
    }
}

export default WeatherApi;
