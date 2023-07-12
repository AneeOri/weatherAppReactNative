import { View, Text, SafeAreaView, StatusBar, StyleSheet,TextInput,Alert } from "react-native";
import { fetchWeather } from '../Utils/ApiHelper'
import { useNavigation } from '@react-navigation/core'
import {useRoute} from '@react-navigation/native';
import { FONTS } from "../Utils/Fonts";
import { COLORS } from "../Utils/Colors";
import { wp,hp} from "../Utils/ResponsiveLayout";
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading, setSelectedCity, setWeatherData } from "../Redux/weatherSlice";

import Button from "../Components/Button";
import Header from "../Components/Header";
import Loader from "../Components/Loader";
import { useEffect, useState } from "react";

const AddLocation = () => {

  //objects
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  //state variables
  const [currentRoute, setCurrentRoute] = useState('');
  const [city, setCity] = useState('');

  //Redux Selector
  const isLoading =  useSelector(state => state.weather.isLoading);
  const weatherData = useSelector(state => state.weather.weatherData);

  useEffect(()=>{
    setCurrentRoute(route.params?.isFrom)
  },[]);

  // On press back button
  const onPressBack = () => {
    navigation.goBack();
  }
 
   // On press fetch button
   const onPressFetch = async () => {
    dispatch(setIsLoading(true))

    let weatherResponse = await fetchWeather(city) // fetch API response

      if (weatherResponse?.error) {
        dispatch(setIsLoading(false))
        Alert.alert('Error', weatherResponse?.error?.message)
      } else {
        // Updated array if more than one location
        if (weatherData?.length >= 1) {
          let tempArr = weatherData;
          tempArr = [...tempArr, weatherResponse]
          dispatch(setIsLoading(false))
          dispatch(setWeatherData(tempArr))
          dispatch(setSelectedCity(weatherData.length))
        } else {
          // push single data into array
          dispatch(setWeatherData([weatherResponse]));
        }
        
        dispatch(setIsLoading(false))
        setCity('')
        if (currentRoute === 'Home') navigation.goBack()
      }
  }
    return(
     <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.YELLOW_COLOR}/>
        <Header {...navigation} title='Add Location' onPressButton={() => onPressBack()}/>
        <View style={styles.innerContainer}>
          <Text style={styles.titleText}>{`Add city name to fetch weather`}</Text>
          <TextInput 
            value={city}
            placeholder='Add city'
            placeholderTextColor={'grey'}
            style={styles.inputStyle}
            onChangeText={text => setCity(text)}
          />
          <Button 
            title='Fetch Weather'
            buttonStyle={{alignSelf: 'center'}}
            onPress={() => onPressFetch()}
          />
        </View>
        {isLoading && <Loader />}
    </SafeAreaView>
    );
}

export default AddLocation;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.YELLOW_COLOR,
      justifyContent: 'center',
    },
    innerContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    titleText: {
      fontSize: wp(20),
      fontFamily: FONTS.POPPINS_SEMIBOLD,
      color: COLORS.BLACK,
      textAlign: 'center',
      marginHorizontal: wp(24),
    },
    inputStyle: {
      height: hp(52),
      borderWidth: 3,
      marginHorizontal: wp(24),
      borderRadius: 12,
      paddingHorizontal: wp(12),
      marginVertical: hp(26),
      fontSize: wp(16),
      fontFamily: FONTS.POPPINS_REGULAR,
      color: COLORS.BLACK
    }
  });