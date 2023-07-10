import { View, Text, SafeAreaView, StatusBar, StyleSheet, TextInput, Alert} from "react-native";
import { fetchWeather } from "../Utils/ApiHelper";
import { useNavigation } from "@react-navigation/core";
import {useRoute} from '@react-navigation/native';
import { hp, wp } from "../Utils/ResponsiveLayout";
import { FONTS } from "../Utils/Fonts";
import { COLORS } from "../Utils/Colors";
import Button from '../Components/Button';
import Header from '../Components/Header';
import Loader from '../Components/Loader';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setIsLoading, setSelectedCity, setWeatherData } from "../Redux/weatherSlice";


const LocationScreen = () => {

    //objects
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();

    //state variables
    const [currentRoute, setCurrentRoute] = useState('');
    const [city, setCity] = useState('');

    //Redux Selector
    const isLoading = useSelector(state => state.weather.isLoading);
    const weatherData = useSelector(state => state.weather.weatherData);

    useEffect(() => {
        setCurrentRoute(route.params?.isFrom);
    }, []);

    const onPressBack = () => {
        navigation.goBack();
    }

    //fetch function
    const onPressFetch = async () => {

        dispatch(setIsLoading(true));

        let weatherResponse = await fetchWeather(city);

        if(weatherResponse?.error){
            dispatch(setIsLoading(false));
            Alert.alert('Error' , weatherResponse?.error?.message)
        }else{
            //update array if more than one location
            if(weatherData?.length >= 1){
                let tempArr = weatherData;
                tempArr = [...tempArr, weatherResponse];
                dispatch(setIsLoading(false));
                dispatch(setWeatherData(tempArr));
                dispatch(setSelectedCity(weatherData.length));
            }else{
                //push single data into array
                dispatch(setWeatherData([weatherResponse]));
            }

            dispatch(setIsLoading(false));
            setCity('');
            if(currentRoute === 'Home') navigation.goBack()

            console.log(weatherResponse);
        }
    }

       return(
            <View>
                <Text> Location Screen</Text>
                <Button
                  title='Fetch Weather'
                  buttonStyle={{alignSelf: 'center'}}
                  onPress={() => onPressFetch()}
                />
            </View>
        );
    }




export default LocationScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.YELLOW_COLOR,
      justifyContent: "center",
    },
    contentContainer: {
      alignItems: "center",
      marginBottom: 20,
    },
    title: {
      fontSize: wp(18),
      color: COLORS.BLACK,
      textAlign: "center",
      marginHorizontal: wp(24),
      marginVertical: hp(16),
      fontFamily: FONTS.POPPINS_SEMIBOLD,
    },
    text: {
      fontSize: wp(16),
      fontFamily: FONTS.POPPINS_REGULAR,
      color: COLORS.BLACK,
    },
    sepratorContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      marginVertical: hp(20),
    },
    separator: {
      height: StyleSheet.hairlineWidth,
      flex: 1,
      backgroundColor: COLORS.BLACK,
      marginHorizontal: 12,
    },
  });