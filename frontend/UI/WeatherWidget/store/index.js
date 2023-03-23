// import axios from 'axios';

// import { ACTIONS, MUTATIONS }    from './config';
// import state from './state';

// const actions = {
//     async [ACTIONS.GET_BOOKMARKS_LIST](context) {
//         await fetch('https://jsonplaceholder.typicode.com/todos')
//             .then(response => response.json())
//             .then(json => context.commit('setBookmarksList', json));
//     }
// };

// const mutations = {
//     [MUTATIONS.SET_BOOKMARKS_LIST](state, response) {
//         state.itemsList = response;
//     }
// };

// export default {
//     namespaced: true,
//     state,
//     actions,
//     mutations,
// };

async function requestWeather(cityName, cityTemplate) {
    await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${
        cityName}&appid=bdda379c91faa9bf0e5eae4b5e97295e&lang=ru`) 
        .then((result) => {
            const response = result.json();

            return CreateCityWeather(response, cityTemplate);
        });
}

function CreateCityWeather(response, template) {
    return new Promise ((resolve) => {
        resolve(response);
    })
        .then((result) => {
            template.cityName = result.city.name;   
            template.cityLocation = result.city.country; 
            template.id = result.city.id;         
            template.timeZone = result.city.timezone; 
            template.population = result.city.population;
 
            return new Promise((resolve) => {
                resolve(result.list);       
            });
        })
        .then((result) => { 
            template.fourDayWeather = result;
  
            return template;
        });
}
  
class СityInfo {
    constructor(cityName) {
        this.cityName = cityName;
    }
    location() {                                        
        return `город: ${this.cityName}, страна: ${
            this.cityLocation},часовой пояс: ${this.timeZone}`;
    }                                                     
    population() {
        return `численность населения : ${this.population} человек`; 
    }
}
  
class GetCityWeatherForecast extends СityInfo {
    constructor(cityName) {
        super(cityName);
        this.cityName = cityName;
    }
    fourDayForecast() {                                         
        const fourDayData = this.fourDayWeather;
        const weatherDayContain = (data) => {
            return data.map((item) => {
                const weather = {};
                const dayTime = () => {      
                    let time = item.sys.pod;
              
                    switch (time) {
                    case 'd':
                        return 'день';
                    case 'n':
                        return 'ночь'; 
                    }
                };
                weather.day = `дата=${item.dt_txt}`;          
                weather.dayTime = dayTime();                  
                weather.description = `${item.weather[0].description}`;
                weather.humidity = `влажность воздуха ${item.main.humidity}%`; 
                weather.max_Temp = `+${                  
                    (item.main.temp_max-273.15).toFixed(2)}°C`;      
                weather.min_Temp = `+${                  
                    (item.main.temp_min-273.15).toFixed(2)}°C`;      
                weather.feels_like = `чувствуется как +${        
                    (item.main.feels_like-273.15).toFixed(2)}°C`;
                weather.wind = `скорость ветра: ${item.wind.speed} м/с`;
 
                return weather;
            });
        };
        return weatherDayContain(fourDayData);
    }
  
    oneDayForecast() {                     
        const oneDayData = this.fourDayForecast(); 
        const oneDayWeatherData = oneDayData.slice(0, 8);
  
        return oneDayWeatherData;
    }
    momentWeatherForecast() {                            
        const weatherData = this.fourDayForecast();  
        const weatherForecast = (data) => {
            return data.map((item) => {
                return `на улице ${item.dayTime}, ${item.description}, температура от t:${
                    item.min_Temp} до t:${item.max_Temp}, ${item.wind}, ${item.humidity}`;
            });
        };
        const showForecast = weatherForecast(weatherData);

        return showForecast[0];
    }  
}
const LondonCity = new GetCityWeatherForecast('London');
const GetWeatherInLondon = requestWeather('London', LondonCity);
const CherkasyCity = new GetCityWeatherForecast('Cherkasy');
const GetWeatherInCherkasy = requestWeather('Cherkasy', CherkasyCity);
const WroclawCity = new GetCityWeatherForecast('Wrocław');
const GetWeatherInWroclaw = requestWeather('Wrocław', WroclawCity);
