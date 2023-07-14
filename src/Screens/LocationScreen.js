import { StatusBar } from "expo-status-bar";
import { Alert, View, Text, SafeAreaView, StyleSheet  } from "react-native";
import * as Location from "expo-location";
import LottieView from 'lottie-react-native';
import { FONTS } from "../Utils/Fonts"; 
import { COLORS } from "../Utils/Colors";
import { hp,wp } from "../Utils/ResponsiveLayout";
import { useNavigation } from "@react-navigation/core";
import {fetchWeather} from '../Utils/ApiHelper';
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading, setWeatherData } from "../Redux/weatherSlice";
import Button from '../Components/Button';
import Loader from '../Components/Loader';
import { useEffect } from "react";


const LocationScreen = () => {

    //objects
    const navigation = useNavigation();
    const dispatch = useDispatch();

    //Redux Selector
    const isLoading = useSelector(state => state.weather.isLoading);
    const data = useSelector(state => state.weather.weatherData);

    //Location Permission Enabled ro not
    const CheckIfLocationEnabled = async () => {
        dispatch(setIsLoading(true));

        let enabled = await Location.hasServicesEnabledAsync();

        if(!enabled){
            dispatch(setIsLoading(false));
            Alert.alert(
                "Location Service not enabled",
                "Please enable your location services to continue",
                [{ text: "OK" }],
                { cancelable: false }
            );
        }
        else{
            GetCurrentLocation();
        }
    }
    // Get Current Coords and Reverse geo coding
    const GetCurrentLocation = async () => {
        let {status} = await Location.requestBackgroundPermissionsAsync();
        // if permission not granted
        if(status !== 'granted'){
            dispatch(setIsLoading(false));
            Alert.alert(
                "Permission not granted",
                "Allow the app to use location service.",
                [{ text: "OK" }],
                { cancelable: false }
              );
        }
    
        let {coords} = await Location.getCurrentPositionAsync();

        if(coords) {
            const {latitude , longitude} = coords;
            //get address from coords
            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude,
            });
            if(response){
                let weatherResponse = await fetchWeather(response[0].city);
                if(weatherResponse?.error){
                     dispatch(setIsLoading(false));
                     Alert.alert("Error", weatherResponse?.error?.message);
                }
                else {
                dispatch(setWeatherData([weatherResponse])); // storing data to redux state
                dispatch(setIsLoading(false));
                }
            }
        }
    };
    //navigation to home screen after updating redux state
    useEffect(()=> {
        if(data.length >= 1){
          () => navigation.navigate('HomeScreen');
        }
    },[data]);

       return(
           <SafeAreaView style={styles.container}>
              <StatusBar style='auto'/>
              <View style ={styles.contentContainer}>
                <LottieView
                  autoPlay
                  source={require("../../assets/animation/locationAnimation.json")}
                  style={{
                    height: 200,
                    width :200,
                  }}
                />
                <Text style={styles.title}>{`Allow "WeatherSnap" to access your location`}</Text>
                <Button
                  title={"Fetch Weather"}
                  onPress={() => CheckIfLocationEnabled()}
                />
                <View style= {styles.sepratorContainer}>
                  <View style={styles.separator} />
                  <Text style={styles.text}>Or</Text>
                  <View style={styles.separator} />
                </View>
                <Button
                   title={"Add Manually"}
                   mode="outline"
                   onPress={() =>
                     navigation.navigate('AddLocation')
                   }
                />
              </View>
              {/* {isLoading && <Loader />} */}
           </SafeAreaView>
        );
    };

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