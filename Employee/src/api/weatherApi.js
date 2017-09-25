weatherList = [
    {
        "city": "Hanover",
        "state": "NH",
        "weatherForecast": {
            "temp": "55 degrees",
            "wind": "variable",
            "humidity": "50%",
            "sunset": "something"
        },
        "image": "https://randomuser.me/api/portraits/men/67.jpg"
    }];

class WeatherApi {
    static getAllWeatherNodes() {
        return new Promise((resolve, reject) => setTimeout(() => resolve(weatherList)), 1200);
    }

    static searchByLocation(qs) {
        return new Promise((resolve, reject) => {
            let result = weatherList.filter(employee => {
                const fullName = `${weatherList.city.toLowerCase()} ${weatherList.state.toLowerCase()}`;
                return fullName.indexOf(qs.toLowerCase()) > -1;
            });

            resolve(result);
        })
    }
}

export default WeatherApi;
