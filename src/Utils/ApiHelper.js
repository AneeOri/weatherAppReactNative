import { Alert } from "react-native";

const WEATHER_API_KEY = '7177d5a9668d478184a00902231007';

const weatherBaseUrl = 'https://api.weatherapi.com/v1/forecast.json?key=' + WEATHER_API_KEY;

export const fetchWeather = async (city) => {

    let data = null;
    let url = `${weatherBaseUrl}&q=${city}&dt=2023-07-30&aqi=yes&alerts=yes`;
    
    try {
        const response = await fetch(url, {method: 'GET'});
        const responseJson = await response.json();
        data = responseJson;
    } catch (error) {
        Alert.alert('Error' , error?.message);
        data = null;
    }

    return data;

};